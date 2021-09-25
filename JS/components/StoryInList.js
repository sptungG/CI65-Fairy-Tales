import BaseComponent from "./BaseComponent.js";

export default class StoryInList extends BaseComponent {
  render() {
    let $storyItem = document.createElement("li");
    $storyItem.classList.add("activity-item");
    $storyItem.innerHTML = `
    <div class="activity-item-image">
      <img src="${this.props.story.pages[0].image}" alt="" />
      <span class="activity-item-time">${this.props.story.length}</span>
    </div>
    <div class="activity-item-info">
      <h3 class="title activity-item-title">${this.props.story.name}</h3>
      <div class="activity-item-author">${this.props.story.author.name}</div>
      <div class="activity-item-desc">${this.props.story.desc}</div>
      <div class="activity-item-act">
        <div class="activity-item-date"><i class="far fa-clock"></i><span class="time-num">${this.props.story.date}</span></div>
      </div>
      <div class="activity-item-delete"><i class="far fa-times-circle"></i></div>
    </div>
    `;
    return $storyItem;
  }
}
