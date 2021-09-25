import BaseComponent from "../components/BaseComponent.js";
import Header from "../components/Header.js";
import { appendTo, getMedia } from "../models/utils.js";
import UserInfo from "../components/UserInfo.js";
import * as data from "../data.js";
import StoryInGrid from "../components/StoryInGrid.js";
import StoryInList from "../components/StoryInList.js";

export default class Profile extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      stories: data.stories,
      user: data.user,
    };
  }
  render() {
    getMedia(this.state.stories);
    let $container = document.createElement("div");
    $container.classList.add("wrapper");
    let _header = new Header({
      user: this.state.user,
      stories: this.state.stories,
    });

    let $profileSection = document.createElement("section");
    $profileSection.classList.add("profile");

    //User Info
    let $profileContainer = document.createElement("div");
    $profileContainer.classList.add("container");
    let _userInfo = new UserInfo({
      user: data.user,
    });

    //User Favorite Stories
    let $storySection = document.createElement("div");
    $storySection.classList.add("section-wrapper");
    let $favoriteSection = document.createElement("section");
    $favoriteSection.classList.add("favorite");
    let $title = document.createElement("h2");
    $title.className = "favorite-title title";
    $title.innerHTML = "Your Favorites";
    let $favoriteList = document.createElement("ul");
    $favoriteList.classList.add("favorite-list");
    this.state.stories.forEach((story) => {
      let _story = new StoryInGrid({ story: story });
      appendTo($favoriteList, _story);
    });
    $favoriteSection.append($title, $favoriteList);
    //User Read Stories
    let $activitySection = document.createElement("section");
    $activitySection.classList.add("activity");
    let $activityTitle = document.createElement("h2");
    $activityTitle.className = "activity-title title";
    $activityTitle.innerHTML = "Recent Reading";

    let $activityTabs = document.createElement("ul");
    $activityTabs.classList.add("activity-tabs");
    this.generateTabs(data.categories, $activityTabs);
    let $activityList = document.createElement("ul");
    $activityList.classList.add("activity-list");
    this.state.stories.forEach((story) => {
      let _story = new StoryInList({ story: story });
      appendTo($activityList, _story);
    });

    $activitySection.append($activityTitle, $activityTabs, $activityList);
    $storySection.append($favoriteSection, $activitySection);
    appendTo($profileContainer, _header);
    appendTo($profileContainer, _userInfo);
    $profileContainer.append($storySection);
    $profileSection.append($profileContainer);
    $container.append($profileSection);
    return $container;
  }
  generateTabs(list, tabs) {
    list.forEach((item) => {
      let $tab = document.createElement("li");
      $tab.classList.add("activity-tab-item");
      $tab.innerHTML = `${item.name}`;
      tabs.appendChild($tab);
    });
  }
}
