import { getStoryById } from "../models/stories.js";
import { getImgByName } from "../models/utils.js";
import BaseComponent from "./BaseComponent.js";
import { auth, db, storage } from "../firebase.js";
export default class StoryDetail extends BaseComponent {
  render() {
    let $detailContainer = document.createElement("div");
    $detailContainer.classList.add("story-detail");

    // Story Categories
    let $detailCategory = document.createElement("ul");
    $detailCategory.classList.add("detail-category");
    this.generateCategories(this.props.story.categories, $detailCategory);

    // Story Detail Name, Rating, Date, Desc, Author
    let $detailTitleWrapper = document.createElement("div");
    $detailTitleWrapper.classList.add("detail-title-wrapper");
    let $detailTitleContainer = document.createElement("div");
    $detailTitleContainer.classList.add("detail-title-container");
    let $storyTitle = document.createElement("h2");
    $storyTitle.classList.add("title", "detail-title");
    $storyTitle.innerHTML = `${this.props.story.name}`;
    let $detailAvgWrapper = document.createElement("div");
    $detailAvgWrapper.classList.add("detail-avg");
    let $date = document.createElement("div");
    $date.classList.add("detail-date");
    $date.innerHTML = `<i class="far fa-clock"></i><span class="detail-date-num">${this.props.story.createAt}</span>`;
    let $avgHeading = document.createElement("span");
    $avgHeading.classList.add("detail-avg-heading");
    $avgHeading.innerHTML = `User Rating`;
    let $avgHearts = document.createElement("span");
    $avgHearts.classList.add("detail-avg-heart");
    this.generateHearts(!isNaN(this.props.story.avgRating) ? this.props.story.avgRating : 0, $avgHearts);
    let $avgText = document.createElement("p");
    $avgText.innerHTML = `<span class="avg-num rating-num">${!isNaN(this.props.story.avgRating) ? this.props.story.avgRating : 0}</span> average based on <span class="avg-num view-num">${this.props.story.usersRating.length}</span> reviews.`;

    let $detailBtnWrapper = document.createElement("div");
    $detailBtnWrapper.classList.add("detail-btn-wrapper");
    let $btnRating = document.createElement("button");
    $btnRating.classList.add("detail-rating", "btn-rating");
    $btnRating.innerHTML = `<i class="far fa-star"></i>Rating`;
    let $ratingWrapper = document.createElement("div");
    $ratingWrapper.classList.add("rating-wrapper");
    let $ratingHeader = document.createElement("h2");
    $ratingHeader.classList.add("rating-title", "title");
    $ratingHeader.innerHTML = `Rating`;
    let $ratingStar = document.createElement("div");
    $ratingStar.classList.add("rating-star");
    for (let index = 5; index > 0; index--) {
      let $rating = document.createElement("input");
      $rating.id = `star${index}`;
      $rating.name = "rating";
      $rating.type = "radio";
      let $label = document.createElement("label");
      $label.setAttribute("for", `star${index}`);
      $rating.setAttribute("value", `${index}`);
      $ratingStar.append($rating, $label);
    }
    let $ratingValue = document.createElement("span");
    $ratingValue.classList.add("rating-value");
    $ratingValue.id = "rating-value";
    $ratingValue.innerHTML = `0`;
    let $ratingMessage = document.createElement("span");
    $ratingMessage.classList.add("rating-message");
    $ratingMessage.id = "rating-message";
    $ratingMessage.innerHTML = `Not rated yet`;
    $ratingStar.append($ratingValue);
    if (auth.currentUser) {
      $btnRating.addEventListener("click", () => {
        $ratingWrapper.classList.toggle("show");
        // $btnRating.classList.add("active");
      });
      let ratingStar = [...$ratingStar.childNodes].filter((element, index) => index % 2 === 0);
      ratingStar.pop();
      let that = this;
      db.collection("users")
        .get()
        .then(async (e) => {
          let isRated = false;
          let rateTotal = 0;
          let count = 0;
          e.docs.forEach((doc) => {
            doc.data().storiesRated.forEach((story) => {
              if (story.storyId == this.props.id) {
                rateTotal += parseInt(story.storyRated);
                count++;
              }
            });
          });
          let storyRef = await db.collection("stories").doc(that.props.id);
          storyRef.update({
            avgRating: parseFloat(rateTotal / count).toFixed(2),
          });
          e.docs.forEach((doc) => {
            if (doc.id == auth.currentUser.uid) {
              doc.data().storiesRated.forEach((story) => {
                if (story.storyId == this.props.id) {
                  isRated = true;
                }
              });
            }
          });
          if (isRated) {
            e.docs.forEach((doc) => {
              if (doc.id == auth.currentUser.uid) {
                doc.data().storiesRated.forEach((story) => {
                  if (story.storyId == this.props.id) {
                    ratingStar[Math.abs(story.storyRated - 5)].checked = true;
                    $ratingValue.innerHTML = story.storyRated + "/5";
                  }
                });
              }
            });
            $ratingMessage.innerHTML = `Rated <i class="far fa-grin-stars"></i> <i class="far fa-grin-hearts"></i>`;
            for (let i = 0; i < ratingStar.length; i++) {
              ratingStar[i].disabled = true;
            }
          } else {
            ratingStar.forEach((star, index) => {
              star.addEventListener("click", async (e) => {
                // console.log(star.value);
                $ratingValue.innerHTML = star.value + "/5";
                $ratingMessage.innerHTML = `You rated ${that.props.story.name} ${star.value}/5`;
                for (let i = 0; i < ratingStar.length; i++) {
                  ratingStar[i].disabled = true;
                }
                let userRef = await db.collection("users").doc(auth.currentUser.uid);
                let storyRef = await db.collection("stories").doc(that.props.id);
                storyRef.update({
                  avgRating: star.value,
                  usersRating: firebase.firestore.FieldValue.arrayUnion({
                    userId: auth.currentUser.uid,
                    userRated: star.value,
                  }),
                });
                userRef.update({
                  storiesRated: firebase.firestore.FieldValue.arrayUnion({
                    storyId: that.props.id,
                    storyRated: star.value,
                  }),
                });
              });
            });
          }
          // console.log(count, rateTotal);
        });
    } else {
      $btnRating.onclick = () => {
        alert("Đăng nhập để đánh giá");
      };
      // $btnRating.disabled = true;
      $btnRating.style = "cursor: not-allowed; opacity: 0.9;";
    }

    $ratingWrapper.append($ratingHeader, $ratingStar, $ratingMessage);

    $detailBtnWrapper.append($btnRating, $ratingWrapper);
    $detailAvgWrapper.append($date, $avgHeading, $avgHearts, $avgText);
    $detailTitleContainer.append($storyTitle, $detailAvgWrapper);
    $detailTitleWrapper.append($detailTitleContainer, $detailBtnWrapper);

    let $desc = document.createElement("p");
    $desc.classList.add("text", "detail-desc");
    $desc.innerHTML = `${this.props.story.name} ${this.props.story.desc}`;
    let $authorWrapper = document.createElement("div");
    $authorWrapper.classList.add("detail-author-wrapper");
    $authorWrapper.innerHTML = `
    <img src="${this.props.story.authorImg ? this.props.story.authorImg : "https://source.unsplash.com/random/?girl"}" alt="" class="detail-author-image" />
    <span class="detail-author-name">${this.props.story.authorName}</span>
    `;
    let $dashboard = document.getElementById("dashboard");
    let $profile = document.getElementById("profile");
    let $player = document.getElementById("player");
    $player.innerHTML = "";
    $profile.innerHTML = "";
    $dashboard.innerHTML = "";
    $detailContainer.append($detailCategory, $detailTitleWrapper, $desc, $authorWrapper);
    return $detailContainer;
  }
  generateCategories(categories, list) {
    categories.forEach((category) => {
      let $category = document.createElement("li");
      $category.classList.add("detail-category-item");
      $category.innerHTML = `${category}`;
      list.appendChild($category);
    });
  }
  generateHearts(avgNum, list) {
    for (let i = 0; i < Math.floor(avgNum); i++) {
      let $heart = document.createElement("i");
      $heart.classList.add("fas", "fa-star", "checked");
      list.appendChild($heart);
    }
    for (let i = 5; i > Math.floor(avgNum); i--) {
      let $heart = document.createElement("i");
      $heart.classList.add("fas", "fa-star");
      list.appendChild($heart);
    }
  }
}
