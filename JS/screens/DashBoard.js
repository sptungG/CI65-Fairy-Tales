import BaseComponent from "../components/BaseComponent.js";
import Header from "../components/Header.js";
// import Categories from "../components/Categories.js";
import Stories from "../components/Stories.js";
import * as data from "../data.js";
import { appendTo, capitalize } from "../models/utils.js";

export default class DashBoard extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
    };
  }
  render() {
    let $container = document.createElement("div");
    $container.classList.add("wrapper");
    let _header = new Header({
      user: data.user,
      stories: data.stories,
    });
    let _storyList = new Stories({
      stories: data.stories,
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
    this.generateCategories(data.categories, $categoryList);
    [...$categoryList.childNodes].forEach((item) => {
      item.addEventListener("click", () => {
        let _storyList = new Stories({
          stories: this.filterStory(item.dataset.value, data.stories),
        });
        // item.classList.remove("active");
        // $categoryList[`data-value="${item.dataset.value}"`].classList.add("active");
        $storyContainer.innerHTML = "";
        $storyHeaderCategory.innerHTML = `<i class="fas fa-layer-group main-header-category-icon"></i><span class="main-header-category title">${capitalize(item.dataset.value)}</span>`;
        $storyContainer.append($storyHeader);
        appendTo($storyContainer, _storyList);
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

    $storyContainer.append($storyHeader);
    appendTo($storyContainer, _storyList);
    $storySection.append($storyContainer);
    appendTo($container, _header);
    $container.append($categorySection, $storySection);
    return $container;
  }
  generateCategories(categoryList, list) {
    categoryList.forEach((category) => {
      let $categoryItem = document.createElement("li");
      $categoryItem.classList.add("category-item");
      $categoryItem.dataset.value = category.name.toLowerCase();
      $categoryItem.innerHTML = `
      <div class="category-item-image">
        <img src=${category.image} alt="" />
      </div>
      <div class="category-item-content">
        <h3>${category.name}</h3>
        <p>${category.desc}</p>
      </div>
      `;
      list.appendChild($categoryItem);
    });
  }
  filterStory(category, stories) {
    let filterStories = stories;
    if (category != "all") {
      filterStories = stories.filter((story) => {
        return story.categories.join(",").toLowerCase().split(",").indexOf(category) != -1;
      });
      console.log("Filter: ", category, filterStories);
      return filterStories;
    }
    console.log("Filter: ", category, filterStories);
    return filterStories;
  }
}
