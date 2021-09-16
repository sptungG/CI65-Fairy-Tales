import BaseComponent from "./BaseComponent.js";

export default class ReadStory extends BaseComponent {
  render() {
    let $activityItem = document.createElement("li");
    $activityItem.classList.add("activity-item");
    $activityItem.innerHTML = `
    <div class="activity-item-image">
      <img src="${this.props.coverImage}" alt="" />
      <span class="activity-item-time">${this.props.length}</span>
    </div>
    <div class="activity-item-info">
      <h3 class="title activity-item-title">${this.props.name}</h3>
      <div class="activity-item-author">${this.props.authorName}</div>
      <div class="activity-item-desc">${this.props.desc}</div>
      <div class="activity-item-act">
        <div class="activity-item-date"><i class="far fa-clock"></i><span class="time-num">${this.props.date}</span></div>
      </div>
      <div class="activity-item-delete"><i class="far fa-times-circle"></i></div>
    </div>
    `;
    return $activityItem;
  }
}
