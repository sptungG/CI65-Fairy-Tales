import { getStoryById } from "../models/stories.js";
import { authStateChanged, listenCurrentUser } from "../models/user.js";
import { getImgByName } from "../models/utils.js";
import StoryScreen from "../screens/StoryScreen.js";
import BaseComponent from "./BaseComponent.js";

export default class StoryInGrid extends BaseComponent {
  render() {
    let $storyItem = document.createElement("li");
    $storyItem.classList.add("story", "story-item");
    $storyItem.dataset.id = this.props.story.id;
    let $storyLength = document.createElement("span");
    $storyLength.classList.add("story-time");
    $storyLength.innerHTML = `${this.props.story.length ? this.props.story.length : "2:56"}`;
    let $storyImage = document.createElement("div");
    $storyImage.classList.add("story-image");

    $storyImage.innerHTML = `
    <img src="./DATA/${getImgByName(this.props.story.name)}/Pages/00.jpg" alt="" />
    <div class="author-img--wrapper story-author">
      <img src="./DATA/Authors/${this.props.story.authorName ? getImgByName(this.props.story.authorName) : "soc-nhi"}.jpg" alt="" class="author-img" />
    </div>
    `;
    $storyImage.addEventListener("click", (e) => {
      e.stopPropagation();
      this.getComments(this.props.story);
      this.getFavorite(this.props.story);
      this.getRating(this.props.story);
      this.viewsCount(this.props.story);
      this.readCount(this.props.story);
      this.handleOnclick(this.props.story);
    });
    let $storyContent = document.createElement("div");
    $storyContent.classList.add("story-content");
    $storyContent.innerHTML = `
    <span class="story-by">${this.props.story.authorName}</span>
    <h3 class="story-title">${this.props.story.name}</h3>

    <div class="story-view">
      <span class="story-view-num">${this.props.story.viewsNum ? this.props.story.viewsNum : 0} views</span>
      <span class="story-date">${this.props.story.createAt}</span>
    </div>
    `;
    let $storyRatingBtn = document.createElement("div");
    $storyRatingBtn.classList.add("story-line");
    $storyRatingBtn.innerHTML = `
    <i class="far fa-heart"></i><span class="heart-num">${this.props.story.favoriteNum ? this.props.story.favoriteNum : 0}</span>
    `;
    authStateChanged((user) => {
      if (user) {
        let currentUser = auth.currentUser;

        listenCurrentUser((user) => {
          if (user.storiesFavorite.includes(`${this.props.story.id}`)) {
            $storyRatingBtn.classList.add("active");
          }
        });
      } else {
      }
    });
    $storyRatingBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (auth.currentUser) {
        this.favoriteCount($storyRatingBtn, this.props.story);
      } else {
        alert("Đăng nhập đi rồi mới thích được");
      }
    });
    $storyContent.append($storyRatingBtn);
    $storyItem.append($storyLength, $storyImage, $storyContent);
    return $storyItem;
  }
  async handleOnclick(item) {
    router.navigate("/story");
    let $dashboard = document.getElementById("dashboard");
    let $profile = document.getElementById("profile");
    let $player = document.getElementById("player");
    $player.innerHTML = "";
    $profile.innerHTML = "";
    $dashboard.innerHTML = "";
    // console.log(item);
    new StoryScreen({ id: item.id }).render();
  }
  async viewsCount(item) {
    let story = db.collection("stories").doc(item.id);
    await story.update({
      viewsNum: firebase.firestore.FieldValue.increment(1),
    });
  }
  async getFavorite(item){
    let storyRef = await db.collection("stories").doc(item.id);
    if(!item.favoriteNum){
      storyRef.set({
        favoriteNum: 0,
      },{merge: true});
    }
  }
  async favoriteCount(btn, item) {
    let userRef = await db.collection("users").doc(auth.currentUser.uid);
    let storyRef = await db.collection("stories").doc(item.id);
    if (btn.classList.contains("active")) {
      // --love
      btn.classList.remove("active");
      storyRef.update({
        favoriteNum: firebase.firestore.FieldValue.increment(-1),
      });

      //remove fromfavorite of user
      userRef.update({
        storiesFavorite: firebase.firestore.FieldValue.arrayRemove(`${item.id}`),
      });
    } else {
      // ++love
      btn.classList.add("active");
      storyRef.update({
        favoriteNum: firebase.firestore.FieldValue.increment(1),
      });

      //add to favorite of user
      userRef.update({
        storiesFavorite: firebase.firestore.FieldValue.arrayUnion(`${item.id}`),
      });
    }
  }
  async readCount(item) {
    if (auth.currentUser) {
      let userRef = await db.collection("users").doc(auth.currentUser.uid);
      userRef.update({
        storiesRead: firebase.firestore.FieldValue.arrayUnion(`${item.id}`),
      });
    }
  }
  async getComments(item) {
    if (!item.comments) {
      let story = db.collection("stories").doc(item.id);
      await story.set(
        {
          comments: [],
        },
        { merge: true }
      );
    }
  }
  async getRating(item) {
    if (!item.usersRating) {
      let story = db.collection("stories").doc(item.id);
      await story.set(
        {
          avgRating: 0,
          usersRating: [],
        },
        { merge: true }
      );
    }
  }
}
