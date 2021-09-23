import BaseComponent from "../components/BaseComponent.js";
import Header from "../components/Header.js";
import { appendTo } from "../models/utils.js";
import StoriesRead from "../components/StoriesRead.js";
import StoriesFavorite from "../components/StoriesFavorite.js";
import UserInfo from "../components/UserInfo.js";
import * as data from "../data.js";

export default class Profile extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  render() {
    let $container = document.createElement("div");
    $container.classList.add("wrapper");
    let _header = new Header({
      user: data.user,
      stories: data.stories,
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
    $favoriteSection.append($title);
    let _favoriteList = new StoriesFavorite({
      stories: data.user.storiesRated,
    });
    appendTo($favoriteSection, _favoriteList);

    //User Read Stories
    let $activitySection = document.createElement("section");
    $activitySection.classList.add("activity");
    let $activityTitle = document.createElement("h2");
    $activityTitle.className = "activity-title title";
    $activityTitle.innerHTML = "Recent Reading";

    let $activityTabs = document.createElement("ul");
    $activityTabs.classList.add("activity-tabs");
    this.generateTabs(data.categories, $activityTabs);
    let _readList = new StoriesRead({
      stories: data.user.storiesRead,
    });

    $activitySection.append($activityTitle, $activityTabs);
    appendTo($activitySection, _readList);
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
