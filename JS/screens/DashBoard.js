import BaseComponent from "../components/BaseComponent.js";
import Header from "../components/Header.js";
import StoryInGrid from "../components/StoryInGrid.js";
import * as data from "../data.js";
import { filterStory, generateCategories } from "../models/stories.js";
import { appendTo, capitalize, getMedia } from "../models/utils.js";

export default class DashBoard extends BaseComponent {
  constructor(props) {
    super(props);
    console.log(auth.currentUser);
    this.state = {
      stories: data.stories,
      user: {
        // email: auth.currentUser.email,
        // name: auth.currentUser.displayName 
      }
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

    let $categorySection = document.createElement("section");
    $categorySection.classList.add("category");
    let $categoryContainer = document.createElement("div");
    $categoryContainer.classList.add("container");
    let $categoryTitle = document.createElement("h2");
    $categoryTitle.classList.add("category-title", "title");
    $categoryTitle.innerHTML = "Categories";
    let $categoryList = document.createElement("ul");
    $categoryList.classList.add("category-list");
    generateCategories(data.categories, $categoryList);
    // 
    [...$categoryList.childNodes].forEach((item) => {
      item.addEventListener("click", () => {
        // item.classList.remove("active");
        // $categoryList[`data-value="${item.dataset.value}"`].classList.add("active");
        let storiesFilter = filterStory(item.dataset.value, this.state.stories);
        let $storyList = document.createElement("ul");
        $storyList.className = "story-list";
        storiesFilter.forEach((story) => {
          let _story = new StoryInGrid({ story: story });
          appendTo($storyList, _story);
        });
        $storyContainer.innerHTML = "";
        $storyHeaderCategory.innerHTML = `<i class="fas fa-layer-group main-header-category-icon"></i><span class="main-header-category title">${capitalize(
          item.dataset.value
        )}</span>`;
        $storyContainer.append($storyHeader, $storyList);
      });
    });
    $categoryContainer.append($categoryTitle, $categoryList);
    $categorySection.append($categoryContainer);

    let $storySection = document.createElement("main");
    $storySection.classList.add("main");
    let $storyContainer = document.createElement("div");
    $storyContainer.classList.add("container");

    let $storyHeader = document.createElement("div");
    $storyHeader.classList.add("main-header");
    let $storyHeaderTitleWrapper = document.createElement("div");
    $storyHeaderTitleWrapper.classList.add("main-header-title-wrapper");
    let $storyHeaderTitle = document.createElement("h2");
    $storyHeaderTitle.classList.add("main-header-title", "title");
    $storyHeaderTitle.innerHTML = "Fairy Tales";
    let $storyHeaderCategory = document.createElement("span");
    $storyHeaderCategory.innerHTML = `<i class="fas fa-layer-group main-header-category-icon"></i><span class="main-header-category title">All</span>`;
    let $storyHeaderModes = document.createElement("div");
    $storyHeaderModes.classList.add("main-header-mode");
    let $gridMode = document.createElement("div");
    $gridMode.classList.add("grid-mode", "mode-active", "btn-mode");
    $gridMode.innerHTML = `<i class="fas fa-th"></i>`;
    let $listMode = document.createElement("div");
    $listMode.classList.add("list-mode", "btn-mode");
    $listMode.innerHTML = `<i class="fas fa-th-list"></i>`;
    $storyHeaderTitleWrapper.append($storyHeaderTitle, $storyHeaderCategory);
    $storyHeaderModes.append($gridMode, $listMode);
    $storyHeader.append($storyHeaderTitleWrapper, $storyHeaderModes);
    let $storyList = document.createElement("ul");
    $storyList.className = "story-list";
    this.state.stories.forEach((story) => {
      let _story = new StoryInGrid({ story: story });
      appendTo($storyList, _story);
    });

    $storyContainer.append($storyHeader, $storyList);
    $storySection.append($storyContainer);
    appendTo($container, _header);
    $container.append($categorySection, $storySection);
    return $container;
  }
}
