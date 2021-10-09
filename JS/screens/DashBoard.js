import BaseComponent from "../components/BaseComponent.js";
import StoryInGrid from "../components/StoryInGrid.js";
import * as data from "../data.js";
import { filterStory, getAllStories } from "../models/stories.js";
import { appendTo } from "../models/utils.js";
import { auth, db, storage } from "../firebase.js";
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
      storage
        .ref(`categories`)
        .child(`${category.name.toLowerCase()}.png`)
        .getDownloadURL()
        .then((url) => {
          $categoryItem.innerHTML = `
            <div class="category-item-image">
              <img src="${url}" alt="" />
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
            storiesFilter.forEach((story) => {
              let _story = new StoryInGrid({ story: story });
              appendTo($storyList, _story);
            });
            $storyContainer.innerHTML = "";
            $storyHeaderCategory.innerHTML = `<i class="fas fa-layer-group main-header-category-icon"></i><span class="main-header-category title">${category.name}</span>`;
            $storyContainer.append($storyHeader, $storyList);
          });
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

    $storyHeaderTitleWrapper.append($storyHeaderTitle, $storyHeaderCategory);
    $storyHeader.append($storyHeaderTitleWrapper, $storyHeaderModes);
    let $storyList = document.createElement("ul");
    $storyList.className = "story-list";
    db.collection("stories")
      .orderBy("avgRating", "desc")
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

    this.generateSortMode($storyHeaderModes, $storyList);
    $storyContainer.append($storyHeader, $storyList);
    $storySection.append($storyContainer);
    $profile.innerHTML = "";
    $player.innerHTML = "";
    $container.innerHTML = "";
    $container.append($categorySection, $storySection);
    return $container;
  }
  generateSortMode(wrap, list) {
    let $sortIcon = document.createElement("div");
    $sortIcon.classList.add("mode-sort");
    $sortIcon.innerHTML = `<i class="fas fa-sort-amount-down"></i> <i class="fas fa-sort-amount-down-alt"></i>`;
    let mode = "desc";

    let $rateMode = document.createElement("div");
    $rateMode.classList.add("mode-rate", "active", "btn-mode");
    $rateMode.innerHTML = `<i class="far fa-star"></i>`;
    $rateMode.dataset.sortBy = "avgRating";
    $rateMode.onclick = (e) => {
      $rateMode.classList.add("active");
      $viewMode.classList.remove("active");
      $dateMode.classList.remove("active");
      db.collection("stories")
        .orderBy("avgRating", `${mode}`)
        .onSnapshot((snapshot) => {
          list.innerHTML = "";
          snapshot.docs.forEach((doc) => {
            let story = {
              id: doc.id,
              ...doc.data(),
            };
            let _story = new StoryInGrid({ story: story });
            appendTo(list, _story);
          });
        });
    };
    let $viewMode = document.createElement("div");
    $viewMode.classList.add("mode-view", "btn-mode");
    $viewMode.innerHTML = `<i class="far fa-eye"></i>`;
    $viewMode.dataset.sortBy = "viewsNum";
    $viewMode.onclick = (e) => {
      $rateMode.classList.remove("active");
      $viewMode.classList.add("active");
      $dateMode.classList.remove("active");
      db.collection("stories")
        .orderBy("viewsNum", `${mode}`)
        .onSnapshot((snapshot) => {
          list.innerHTML = "";
          snapshot.docs.forEach((doc) => {
            let story = {
              id: doc.id,
              ...doc.data(),
            };
            let _story = new StoryInGrid({ story: story });
            appendTo(list, _story);
          });
        });
    };
    let $dateMode = document.createElement("div");
    $dateMode.classList.add("mode-date", "btn-mode");
    $dateMode.innerHTML = `<i class="far fa-clock"></i>`;
    $dateMode.dataset.sortBy = "createAt";
    $dateMode.onclick = (e) => {
      $rateMode.classList.remove("active");
      $viewMode.classList.remove("active");
      $dateMode.classList.add("active");
      db.collection("stories")
        .orderBy("createAt", `${mode}`)
        .onSnapshot((snapshot) => {
          list.innerHTML = "";
          snapshot.docs.forEach((doc) => {
            let story = {
              id: doc.id,
              ...doc.data(),
            };
            let _story = new StoryInGrid({ story: story });
            appendTo(list, _story);
          });
        });
    };

    wrap.append($rateMode, $viewMode, $dateMode, $sortIcon);
  }
}
