import BaseComponent from "../components/BaseComponent.js";
import { appendTo, getMedia } from "../models/utils.js";
import UserInfo from "../components/UserInfo.js";
import * as data from "../data.js";
import StoryInGrid from "../components/StoryInGrid.js";
import StoryInList from "../components/StoryInList.js";

export default class Profile extends BaseComponent {
  render() {
    db.collection("users")
      .doc(this.props.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let _userInfo = new UserInfo({
            user: { ...doc.data() },
          });
          doc.data().storiesRated.forEach((story) => {
            let _story = new StoryInGrid({ story: story });
            appendTo($favoriteList, _story);
          });
          doc.data().storiesRead.forEach((story) => {
            let _story = new StoryInList({ story: story });
            appendTo($activityList, _story);
          });
          let $container = document.querySelector("#dashboard");
          $container.classList.add("wrapper");

          let $profileSection = document.createElement("section");
          $profileSection.classList.add("profile");

          //User Info
          let $profileContainer = document.createElement("div");
          $profileContainer.classList.add("container");
          // let _userInfo = new UserInfo({
          //   user: this.state.user,
          // });

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
          // this.state.stories.forEach((story) => {
          //   let _story = new StoryInGrid({ story: story });
          //   appendTo($favoriteList, _story);
          // });
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
          let tabItems = document.querySelectorAll(".activity-tab-item");
          [...tabItems].forEach((item) =>
            item.addEventListener("click", function (e) {
              [...tabItems].forEach((el) => el.classList.remove("active"));
              e.target.classList.add("active");
            })
          );
          let $activityList = document.createElement("ul");
          $activityList.classList.add("activity-list");
          // this.state.stories.forEach((story) => {
          //   let _story = new StoryInList({ story: story });
          //   appendTo($activityList, _story);
          // });

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
  generateTabs(list, tabs) {
    list.forEach((item) => {
      let $tab = document.createElement("li");
      $tab.classList.add("activity-tab-item");
      $tab.innerHTML = `${item.name}`;
      tabs.appendChild($tab);
    });
  }
}
