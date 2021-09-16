import BaseComponent from "../components/BaseComponent.js";
import Header from "../components/Header.js";
import Category from "../components/Category.js";
import Story from "../components/Story.js";
import { appendTo } from "../models/utils.js";

export default class DashBoard extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        image: "",
        name: "",
        role: "user",
      },
      category: {
        image: "",
        name: "",
        desc: "",
      },
      story: {
        coverImage: "",
        name: "",
        view: "",
        date: "",
        rating: "",
        author: {
          name: "",
          image: "",
        },
      },
    };
  }
  render() {
    let $container = document.createElement("div");
    $container.classList.add("wrapper");
    let $header = document.createElement("header");
    $header.classList.add("header");
    let _header = new Header({
      image: "https://source.unsplash.com/random/?girl",
      name: "Tungggggggggggggggggg",
    });
    $header.append(_header.render());

    let $categorySection = document.createElement("section");
    $categorySection.classList.add("category");

    let $categoryContainer = document.createElement("div");
    $categoryContainer.className = "container";
    let $title = document.createElement("h2");
    $title.className = "category-title title";
    $title.innerHTML = "Categories";
    let $categoryList = document.createElement("ul");
    $categoryList.className = "category-list";
    let _category1 = new Category({
      image: "./IMG/categories/all.png",
      name: "All",
      desc: "Tất tần tật các câu chuyện về mọi chủ đề.",
      onclick: (event) => {
        console.log("Category: ", event.target.value);
      },
    });
    let _category2 = new Category({
      image: "./IMG/categories/family-1.png",
      name: "Family",
      desc: "Gia đình.",
      onclick: (event) => {
        console.log("Category: ", event.target.value);
      },
    });
    let _category3 = new Category({
      image: "./IMG/categories/kid.png",
      name: "Kid",
      desc: "Thiếu nhi.",
      onclick: (event) => {
        console.log("Category: ", event.target.value);
      },
    });
    let _category4 = new Category({
      image: "./IMG/categories/education.png",
      name: "Education",
      desc: "Trường học, thầy cô và bạn bè.",
      onclick: (event) => {
        console.log("Category: ", event.target.value);
      },
    });
    let _category5 = new Category({
      image: "./IMG/categories/history-1.png",
      name: "History",
      desc: "Lịch sử và truyền thống ở Việt Nam.",
      onclick: (event) => {
        console.log("Category: ", event.target.value);
      },
    });
    let _category6 = new Category({
      image: "./IMG/categories/motivate.png",
      name: "Motivation",
      desc: "Những câu chuyện vươn lên và truyền cảm hứng trong cuộc sống.",
      onclick: (event) => {
        console.log("Category: ", event.target.value);
      },
    });
    let _category7 = new Category({
      image: "./IMG/categories/world.png",
      name: "World",
      desc: "Khám phá những câu truyện cổ tích khác trên thế giói..",
      onclick: (event) => {
        console.log("Category: ", event.target.value);
      },
    });
    appendTo($categoryList, _category1, _category2, _category3, _category4, _category5, _category6, _category7);
    $categoryContainer.append($title, $categoryList);
    $categorySection.append($categoryContainer);

    let $storySection = document.createElement("main");
    $storySection.classList.add("main");
    let $storyContainer = document.createElement("div");
    $storyContainer.className = "container";

    let $storyHeader = document.createElement("div");
    $storyHeader.classList.add("main-header");
    $storyHeader.innerHTML = `
    <h2 class="main-header-title title">Fairy Tales</h2>
    <div class="main-header-mode">
      <button class="mode-active"><i class="fas fa-th"></i></button>
      <button><i class="fas fa-th-list"></i></button>
    </div>
    `;
    let $storyList = document.createElement("ul");
    $storyList.className = "story-list";
    let _story1 = new Story({
      length: "8:30",
      coverImage: "https://source.unsplash.com/random/?vietnam",
      name: "Lorem Lorem Lorem",
      view: "100",
      date: new Date().toLocaleDateString("vi-VI"),
      rating: "4.5",
      authorImage: "https://source.unsplash.com/random/?girl",
      authorName: "Author",
      onclick: (event) => {
        console.log("Category: ", event.target.value);
      },
    });
    let _story2 = new Story({
      length: "8:30",
      coverImage: "https://source.unsplash.com/random/?vietnam",
      name: "Lorem Lorem Lorem",
      view: "100",
      date: new Date().toLocaleDateString("vi-VI"),
      rating: "4.5",
      authorImage: "https://source.unsplash.com/random/?girl",
      authorName: "Author",
      onclick: (event) => {
        console.log("Category: ", event.target.value);
      },
    });
    let _story3 = new Story({
      length: "8:30",
      coverImage: "https://source.unsplash.com/random/?vietnam",
      name: "Lorem Lorem Lorem",
      view: "100",
      date: new Date().toLocaleDateString("vi-VI"),
      rating: "4.5",
      authorImage: "https://source.unsplash.com/random/?girl",
      authorName: "Author",
      onclick: (event) => {
        console.log("Category: ", event.target.value);
      },
    });
    let _story4 = new Story({
      length: "8:30",
      coverImage: "https://source.unsplash.com/random/?vietnam",
      name: "Lorem Lorem Lorem",
      view: "100",
      date: new Date().toLocaleDateString("vi-VI"),
      rating: "4.5",
      authorImage: "https://source.unsplash.com/random/?girl",
      authorName: "Author",
      onclick: (event) => {
        console.log("Category: ", event.target.value);
      },
    });
    let _story5 = new Story({
      length: "8:30",
      coverImage: "https://source.unsplash.com/random/?vietnam",
      name: "Lorem Lorem Lorem",
      view: "100",
      date: new Date().toLocaleDateString("vi-VI"),
      rating: "4.5",
      authorImage: "https://source.unsplash.com/random/?girl",
      authorName: "Author",
      onclick: (event) => {
        console.log("Category: ", event.target.value);
      },
    });
    let _story6 = new Story({
      length: "8:30",
      coverImage: "https://source.unsplash.com/random/?vietnam",
      name: "Lorem Lorem Lorem",
      view: "100",
      date: new Date().toLocaleDateString("vi-VI"),
      rating: "4.5",
      authorImage: "https://source.unsplash.com/random/?girl",
      authorName: "Author",
      onclick: (event) => {
        console.log("Category: ", event.target.value);
      },
    });
    appendTo($storyList, _story1, _story2, _story3, _story4, _story5, _story6);
    $storyContainer.append($storyHeader, $storyList);
    $storySection.append($storyContainer);
    $container.append($header, $categorySection, $storySection);
    return $container;
  }
}
