import BaseComponent from "./BaseComponent.js";

export default class Story extends BaseComponent {
  render() {
    let $storyItem = document.createElement("li");
    $storyItem.classList.add("story", "story-item");
    $storyItem.innerHTML = `
    <span class="story-time">${this.props.length}</span>
    <div class="story-image">
      <img src="${this.props.coverImage}" alt="" />
      <div class="author-img--wrapper story-author">
        <img src="${this.props.authorImage}" alt="" class="author-img" />
      </div>
    </div>
    <div class="story-content">
      <span class="story-by">${this.props.authorName}</span>
      <h3 class="story-title">${this.props.name}</h3>

      <div class="story-view">
        <span class="story-view-num">${this.props.view} views</span>
        <span class="story-date">${this.props.date}</span>
      </div>
      <div class="story-line active"><i class="far fa-heart"></i><span class="heart-num">${this.props.rating}</span></div>
    </div>
    `;
    if(this.props.isRated){
    }else{}
    return $storyItem;
  }
}
