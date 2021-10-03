import BaseComponent from "../components/BaseComponent.js";
import StoryInGrid from "../components/StoryInGrid.js";
import * as data from "../data.js";
import { filterStory, getAllStories } from "../models/stories.js";
import { appendTo } from "../models/utils.js";

export default class DashBoard extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = "";
  }
  render() {
    let $container = document.querySelector("#dashboard");
    let $profile = document.querySelector("#profile");
    let $player = document.querySelector("#player");
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
      $categoryItem.addEventListener("click", async () => {
        // item.classList.remove("active");
        // $categoryList[`data-value="${item.dataset.value}"`].classList.add("active");
        let stories = await getAllStories();
        let storiesFilter = filterStory(category.name.toLowerCase(), stories);
        let $storyList = document.createElement("ul");
        $storyList.className = "story-list";
        try {
          storiesFilter.forEach((story) => {
            let _story = new StoryInGrid({ story: story });
            appendTo($storyList, _story);
          });
        } catch (error) {
          console.error(error.message);
        }
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
    db.collection("stories")
      .orderBy("name", "desc")
      .onSnapshot((snapshot) => {
        $storyList.innerHTML = "";
        snapshot.docs.forEach((doc) => {
          let story = {
            id: doc.id,
            ...doc.data(),
          };
          let _story = new StoryInGrid({ story: story });
          appendTo($storyList, _story);
        });
        // if (stories.length == 0) {
        //   $storyList.innerHTML = `<img class="img-nf" src="./IMG/404-post.png">`;
        // }
      });

    $storyContainer.append($storyHeader, $storyList);
    $storySection.append($storyContainer);
    $profile.innerHTML = "";
    $player.innerHTML = "";
    $container.innerHTML = "";
    $container.append($categorySection, $storySection);
    return $container;
  }
}
