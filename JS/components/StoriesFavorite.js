import BaseComponent from "./BaseComponent.js";

export default class StoriesFavorite extends BaseComponent {
  render() {
    let $favoriteList = document.createElement("ul");
    $favoriteList.classList.add("favorite-list");
    this.generateStory(this.props.stories, $favoriteList);
    return $favoriteList;
  }
  generateStory(storyList, list) {
    storyList.forEach((story) => {
      let $storyItem = document.createElement("li");
      $storyItem.classList.add("story", "story-item");
      $storyItem.innerHTML = `
      <span class="story-time">${story.length}</span>
      <div class="story-image">
        <img src="${story.pages[0].image}" alt="" />
        <div class="author-img--wrapper story-author">
          <img src="${story.author.image}" alt="" class="author-img" />
        </div>
      </div>
      <div class="story-content">
        <span class="story-by">${story.author.name}</span>
        <h3 class="story-title">${story.name}</h3>
  
        <div class="story-view">
          <span class="story-view-num">${story.view} views</span>
          <span class="story-date">${story.date}</span>
        </div>
        <div class="story-line active"><i class="far fa-heart"></i><span class="heart-num">${story.avgRating}</span></div>
      </div>
      `;
      list.appendChild($storyItem);
    });
  }
}
