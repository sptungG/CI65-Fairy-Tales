import { getImgByName } from "../models/utils.js";
import BaseComponent from "./BaseComponent.js";
import { auth, db, storage } from "../firebase.js";
export default class StoryInList extends BaseComponent {
  render() {
    let $storyItem = document.createElement("li");
    $storyItem.classList.add("activity-item");
    $storyItem.dataset.id = this.props.story.id;
    storage
      .ref(`${getImgByName(this.props.story.name)}/Pages`)
      .child(`00.jpg`)
      .getDownloadURL()
      .then((url) => {
        $storyItem.innerHTML = `
          <div class="activity-item-image">
            <img src="${url}" alt="" />
            <span class="activity-item-time">${this.props.story.length}</span>
          </div>
          <div class="activity-item-info">
            <h3 class="title activity-item-title">${this.props.story.name}</h3>
            <div class="activity-item-author">${this.props.story.authorName}</div>
            <div class="activity-item-desc">${this.props.story.name} ${this.props.story.desc}</div>
            <div class="activity-item-act">
              <div class="activity-item-date"><i class="far fa-clock"></i><span class="time-num">${this.props.story.createAt}</span></div>
            </div>
        </div>
      `;
      let $deleteBtn = document.createElement("div");
      $deleteBtn.classList.add("activity-item-delete");
      $deleteBtn.innerHTML = `<i class="far fa-times-circle"></i>`;
      $deleteBtn.addEventListener("click", () => {
        this.removeActivity(this.props.story.id);
        $deleteBtn.parentElement.style.display = "none";
      });
      $storyItem.append($deleteBtn);
      });
    return $storyItem;
  }
  async removeActivity(itemId) {
    let usersRef = await db.collection("users").doc(auth.currentUser.uid);
    usersRef.update({
      storiesRead: firebase.firestore.FieldValue.arrayRemove(`${itemId}`),
    });
  }
}
