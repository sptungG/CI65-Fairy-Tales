import BaseComponent from "../components/BaseComponent.js";
import Header from "../components/Header.js";
import Category from "../components/Category.js";
import Story from "../components/Story.js";
import { appendTo } from "../models/utils.js";
import ReadStory from "../components/ReadStory.js";
import UserInfo from "../components/UserInfo.js";

export default class Profile extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        image: "",
        wallpaper: "",
        name: "",
        gmail: "",
        bio: "",
        role: "user",
        read: "",
        rated: "",
        commented: "",
      },
      category: {
        image: "",
        name: "",
        desc: "",
      },
      story: {
        coverImage: "",
        name: "",
        desc: "",
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
    appendTo($header, _header);

    let $profileSection = document.createElement("section");
    $profileSection.classList.add("profile");

    let $profileContainer = document.createElement("div");
    $profileContainer.classList.add("container");
    let _userInfo = new UserInfo({
      wallpaper: "https://source.unsplash.com/random",
      image: "https://source.unsplash.com/random/?girl",
      name: "Lorem ipsum dolor sit",
      email: "email@gmail.com",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae dignissimos similique sed accusantium quia sit laborum, sint veritatis soluta autem vero incidunt, repudiandae nihil doloremque? Mollitia officiis optio tempora?",
      rated: "5",
      read: "5",
      commented: "10",
    });

    let $storySection = document.createElement("div");
    $storySection.classList.add("section-wrapper");
    let $favoriteSection = document.createElement("section");
    $favoriteSection.classList.add("favorite");
    let $title = document.createElement("h2");
    $title.className = "favorite-title title";
    $title.innerHTML = "Your Favorites";

    let $favoriteList = document.createElement("ul");
    $favoriteList.classList.add("favorite-list");
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
    appendTo($favoriteList, _story1, _story2, _story3, _story4);
    $favoriteSection.append($title, $favoriteList);

    let $activitySection = document.createElement("section");
    $activitySection.classList.add("activity");
    let $activityTitle = document.createElement("h2");
    $activityTitle.className = "activity-title title";
    $activityTitle.innerHTML = "Recent Reading";

    let $activityTabs = document.createElement("ul");
    $activityTabs.classList.add("activity-tabs");
    $activityTabs.innerHTML = `
    <li class="activity-tab-item active">All</li>
    <li class="activity-tab-item">Family</li>
    <li class="activity-tab-item">Kid</li>
    <li class="activity-tab-item">Education</li>
    <li class="activity-tab-item">History</li>
    <li class="activity-tab-item">Motivation</li>
    <li class="activity-tab-item">World</li>
    `;

    let $activityList = document.createElement("ul");
    $activityList.classList.add("activity-list");
    let _act1 = new ReadStory({
      coverImage: "https://source.unsplash.com/random/?vietnam",
      length: "8:30",
      name: "Lorem Lorem Lorem",
      date: new Date().toLocaleDateString("vi-VI"),
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae dignissimos similique sed accusantium quia sit laborum, sint veritatis soluta autem vero incidunt, repudiandae nihil doloremque? Mollitia officiis optio tempora?",
      authorName: "Author",
      onclick: (event) => {
        console.log("Category: ", event.target.value);
      },
    });
    let _act2 = new ReadStory({
      coverImage: "https://source.unsplash.com/random/?vietnam",
      length: "8:30",
      name: "Lorem Lorem Lorem",
      date: new Date().toLocaleDateString("vi-VI"),
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae dignissimos similique sed accusantium quia sit laborum, sint veritatis soluta autem vero incidunt, repudiandae nihil doloremque? Mollitia officiis optio tempora?",
      authorName: "Author",
      onclick: (event) => {
        console.log("Category: ", event.target.value);
      },
    });
    let _act3 = new ReadStory({
      coverImage: "https://source.unsplash.com/random/?vietnam",
      length: "8:30",
      name: "Lorem Lorem Lorem",
      date: new Date().toLocaleDateString("vi-VI"),
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae dignissimos similique sed accusantium quia sit laborum, sint veritatis soluta autem vero incidunt, repudiandae nihil doloremque? Mollitia officiis optio tempora?",
      authorName: "Author",
      onclick: (event) => {
        console.log("Category: ", event.target.value);
      },
    });
    appendTo($activityList, _act1, _act2, _act3);
    $activitySection.append($activityTitle, $activityTabs, $activityList);

    $storySection.append($favoriteSection, $activitySection);
    $profileContainer.append($header, _userInfo.render(), $storySection);
    $profileSection.append($profileContainer);
    $container.append($profileSection);
    return $container;
  }
}
