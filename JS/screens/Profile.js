import BaseComponent from "../components/BaseComponent.js";
import { appendTo } from "../models/utils.js";
import UserInfo from "../components/UserInfo.js";
import * as data from "../data.js";
import StoryInGrid from "../components/StoryInGrid.js";
import StoryInList from "../components/StoryInList.js";
import { filterStory, getStoryById } from "../models/stories.js";

export default class Profile extends BaseComponent {
  render() {
    db.collection("users")
      .doc(this.props.id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          let _userInfo = new UserInfo({
            user: { ...doc.data() },
          });

          let $container = document.querySelector("#dashboard");
          $container.classList.add("wrapper");

          let $profileSection = document.createElement("section");
          $profileSection.classList.add("profile");

          //User Info
          let $profileContainer = document.createElement("div");
          $profileContainer.classList.add("container");

          //User Favorite Stories
          let $storySection = document.createElement("div");
          $storySection.classList.add("section-wrapper");
          let $favoriteSection = document.createElement("section");
          $favoriteSection.classList.add("favorite");
          let $title = document.createElement("h2");
          $title.className = "favorite-title title";
          $title.innerHTML = `Your Favorites <span>${doc.data().storiesFavorite.length}</span>`;
          let $favoriteList = document.createElement("ul");
          $favoriteList.classList.add("favorite-list");
          doc.data().storiesFavorite.forEach(async (item) => {
            let story = await getStoryById(item);
            let _story = new StoryInGrid({ story: story });
            appendTo($favoriteList, _story);
          });
          $favoriteSection.append($title, $favoriteList);
          //User Read Stories
          let $activitySection = document.createElement("section");
          $activitySection.classList.add("activity");
          let $activityTitle = document.createElement("h2");
          $activityTitle.className = "activity-title title";
          $activityTitle.innerHTML = `Recent Reading <span>${doc.data().storiesRead.length}</span>`;

          let $activityTabs = document.createElement("ul");
          $activityTabs.classList.add("activity-tabs");
          data.categories.forEach((item) => {
            let $tab = document.createElement("li");
            $tab.dataset.value = item.name;
            $tab.classList.add("activity-tab-item");
            $tab.innerHTML = `${item.name}`;
            $activityTabs.appendChild($tab);
          });
          
          let $activityList = document.createElement("ul");
          $activityList.classList.add("activity-list");
          doc.data().storiesRead.forEach(async (item) => {
            let story = await getStoryById(item);
            let _story = new StoryInList({ story: story });
            appendTo($activityList, _story);
          });

          $activitySection.append($activityTitle, $activityTabs, $activityList);
          $storySection.append($favoriteSection, $activitySection);
          appendTo($profileContainer, _userInfo);
          $profileContainer.append($storySection);
          $profileSection.append($profileContainer);
          $container.innerHTML = "";
          $container.append($profileSection);
          return $container;
        }
      });
  }
}
