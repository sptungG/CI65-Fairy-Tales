import { getImgByName, removeVietnameseTones } from "../models/utils.js";
import StoryScreen from "../screens/StoryScreen.js";
import BaseComponent from "./BaseComponent.js";

export default class StoryInGrid extends BaseComponent {
  render() {
    let $storyItem = document.createElement("li");
    $storyItem.classList.add("story", "story-item");
    $storyItem.dataset.id = this.props.story.id;
    let $storyLength = document.createElement("span");
    $storyLength.classList.add("story-time");
    $storyLength.innerHTML = `${this.props.story.length}`;
    let $storyImage = document.createElement("div");
    $storyImage.classList.add("story-image");
    $storyImage.innerHTML = `
    <img src="../DATA/${getImgByName(this.props.story.name)}/Pages/00.jpg" alt="" />
    <div class="author-img--wrapper story-author">
      <img src="../DATA/Authors/${getImgByName(this.props.story.authorName)}.jpg" alt="" class="author-img" />
    </div>
    `;
    $storyImage.addEventListener("click", (e) => {
      this.handleOnclick(this.props.story);
    });
    let $storyContent = document.createElement("div");
    $storyContent.classList.add("story-content");
    $storyContent.innerHTML = `
    <span class="story-by">${this.props.story.authorName}</span>
    <h3 class="story-title">${this.props.story.name}</h3>

    <div class="story-view">
      <span class="story-view-num">${this.props.story.viewsNum} views</span>
      <span class="story-date">${this.props.story.createAt}</span>
    </div>
    `;
    let $storyRatingBtn = document.createElement("div");
    $storyRatingBtn.classList.add("story-line");
    $storyRatingBtn.innerHTML = `
    <i class="far fa-heart"></i><span class="heart-num">${this.props.story.avgRating}</span>
    `;
    $storyRatingBtn.addEventListener("click", (e) => {
      // this.handleOnclick(this.props.story.id);
    });
    $storyContent.append($storyRatingBtn);
    $storyItem.append($storyLength, $storyImage, $storyContent);
    return $storyItem;
  }
  async handleOnclick(item) { 
    let _content = document.querySelector("#dashboard");
    _content.innerHTML = "";
    console.log(item);
    new StoryScreen({ id: item.id }).render();
  }
}
