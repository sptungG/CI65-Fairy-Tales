import BaseComponent from "./BaseComponent.js";

export default class StoriesRead extends BaseComponent {
  render() {
    let $activityList = document.createElement("ul");
    $activityList.classList.add("activity-list");
    this.generateStory(this.props.stories, $activityList);
    return $activityList;
  }
  generateStory(storyList, list) {
    storyList.forEach((story) => {
      let $activityItem = document.createElement("li");
      $activityItem.classList.add("activity-item");
      $activityItem.innerHTML = `
      <div class="activity-item-image">
        <img src="${story.pages[0].image}" alt="" />
        <span class="activity-item-time">${story.length}</span>
      </div>
      <div class="activity-item-info">
        <h3 class="title activity-item-title">${story.name}</h3>
        <div class="activity-item-author">${story.author.name}</div>
        <div class="activity-item-desc">${story.desc}</div>
        <div class="activity-item-act">
          <div class="activity-item-date"><i class="far fa-clock"></i><span class="time-num">${story.date}</span></div>
        </div>
        <div class="activity-item-delete"><i class="far fa-times-circle"></i></div>
      </div>
      `;
      list.appendChild($activityItem);
    });
  }
}
