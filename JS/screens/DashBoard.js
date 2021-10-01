import BaseComponent from "../components/BaseComponent.js";
import StoryInGrid from "../components/StoryInGrid.js";
import * as data from "../data.js";
import { filterStory} from "../models/stories.js";
import { appendTo} from "../models/utils.js";

export default class DashBoard extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = "";
  }
  render() {
    db.collection("stories").onSnapshot((snapshot) => {
      let stories = [];
      snapshot.docs.forEach((doc) => {
        stories.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      // console.log(stories);
      let $container = document.querySelector("#dashboard");
      $container.classList.add("wrapper");
      let $categorySection = document.createElement("section");
      $categorySection.classList.add("category");
      let $categoryContainer = document.createElement("div");
      $categoryContainer.classList.add("container");
      let $categoryTitle = document.createElement("h2");
      $categoryTitle.classList.add("category-title", "title");
      $categoryTitle.innerHTML = "Categories";
      let $categoryList = document.createElement("ul");
      $categoryList.classList.add("category-list");
      data.categories.forEach((category) => {
        let $categoryItem = document.createElement("li");
        $categoryItem.classList.add("category-item");
        $categoryItem.dataset.value = category.name.toLowerCase();
        $categoryItem.innerHTML = `
        <div class="category-item-image">
          <img src="./IMG/categories/${category.name.toLowerCase()}.png" alt="" />
        </div>
        <div class="category-item-content">
          <h3>${category.name}</h3>
          <p>${category.desc}</p>
        </div>
        `;
        $categoryItem.addEventListener("click", () => {
          // item.classList.remove("active");
          // $categoryList[`data-value="${item.dataset.value}"`].classList.add("active");
          let storiesFilter = filterStory(category.name.toLowerCase(), stories);
          let $storyList = document.createElement("ul");
          $storyList.className = "story-list";
          storiesFilter.forEach((story) => {
            let _story = new StoryInGrid({ story: story });
            appendTo($storyList, _story);
          });
          $storyContainer.innerHTML = "";
          $storyHeaderCategory.innerHTML = `<i class="fas fa-layer-group main-header-category-icon"></i><span class="main-header-category title">${category.name}</span>`;
          $storyContainer.append($storyHeader, $storyList);
        });
        $categoryList.appendChild($categoryItem);
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
      stories.forEach((story) => {
        let _story = new StoryInGrid({ story: story });
        appendTo($storyList, _story);
      });

      $storyContainer.append($storyHeader, $storyList);
      $storySection.append($storyContainer);
      $container.innerHTML = "";
      $container.append($categorySection, $storySection);
      return $container;
    });
  }
}
