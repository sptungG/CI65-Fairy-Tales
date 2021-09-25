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
    <img src="${this.props.story.pages[0].image}" alt="" />
    <div class="author-img--wrapper story-author">
      <img src="${this.props.story.author.image}" alt="" class="author-img" />
    </div>
    `;
    // $storyImage.addEventListener("click", function () {
    //   console.log("Clicked: ", this.props.story);
    // });
    let $storyContent = document.createElement("div");
    $storyContent.classList.add("story-content");
    $storyContent.innerHTML = `
    <span class="story-by">${this.props.story.author.name}</span>
    <h3 class="story-title">${this.props.story.name}</h3>

    <div class="story-view">
      <span class="story-view-num">${this.props.story.views} views</span>
      <span class="story-date">${this.props.story.date}</span>
    </div>
    `;
    let $storyRatingBtn = document.createElement("div");
    $storyRatingBtn.classList.add("story-line");
    $storyRatingBtn.innerHTML = `
    <i class="far fa-heart"></i><span class="heart-num">${this.props.story.avgRating}</span>
    `;
    $storyRatingBtn.addEventListener("click", function () {
      console.log("Rated:", this.props.story.avgRating);
    });
    $storyContent.append($storyRatingBtn);
    $storyItem.append($storyLength, $storyImage, $storyContent);
    return $storyItem;
  }
}
