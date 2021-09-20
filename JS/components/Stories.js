import BaseComponent from "./BaseComponent.js";

export default class Stories extends BaseComponent {
  render() {
    let $storyList = document.createElement("ul");
    $storyList.className = "story-list";
    this.generateStory(this.props.stories, $storyList);
    return $storyList;
  }
  generateStory(storyList, list) {
    storyList.forEach((story) => {
      let $storyItem = document.createElement("li");
      $storyItem.classList.add("story", "story-item");
      $storyItem.dataset.id = story.id;
      let $storyLength = document.createElement("span");
      $storyLength.classList.add("story-time");
      $storyLength.innerHTML = `${story.length}`;
      let $storyImage = document.createElement("div");
      $storyImage.classList.add("story-image");
      $storyImage.innerHTML = `
      <img src="${story.pages[0].image}" alt="" />
      <div class="author-img--wrapper story-author">
        <img src="${story.author.image}" alt="" class="author-img" />
      </div>
      `;
      $storyImage.addEventListener("click", function () {
        console.log("Clicked: ", story);
      });
      let $storyContent = document.createElement("div");
      $storyContent.classList.add("story-content");
      $storyContent.innerHTML = `
      <span class="story-by">${story.author.name}</span>
      <h3 class="story-title">${story.name}</h3>

      <div class="story-view">
        <span class="story-view-num">${story.views} views</span>
        <span class="story-date">${story.date}</span>
      </div>
      `;
      let $storyRatingBtn = document.createElement("div");
      $storyRatingBtn.classList.add("story-line");
      $storyRatingBtn.innerHTML = `
      <i class="far fa-heart"></i><span class="heart-num">${story.avgRating}</span>
      `
      $storyRatingBtn.addEventListener("click", function () {
        console.log("Rated:", story.avgRating);
      });
      $storyContent.append($storyRatingBtn);
      $storyItem.append($storyLength, $storyImage, $storyContent);
      list.appendChild($storyItem);
    });
  }
}
