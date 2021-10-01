import { removeVietnameseTones, getMedia, getImgByName } from "../models/utils.js";
import BaseComponent from "../components/BaseComponent.js";
import * as data from "../data.js";
import Profile from "./Profile.js";
import DashBoard from "./DashBoard.js";
export default class Header extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      stories: data.stories,
    };
  }

  render() {
    let $header = document.querySelector(".header");
    let $container = document.createElement("div");
    $container.classList.add("container");
    let $headerTop = document.createElement("div");
    $headerTop.classList.add("header-top");
    let $headerLogo = document.createElement("a");
    $headerLogo.classList.add("header-logo-link");
    $headerLogo.addEventListener("click", (e) => {
      e.preventDefault();
      router.navigate("/dashboard");
      new DashBoard().render();
    });
    $headerLogo.innerHTML = `<img src="./IMG/icons/book.svg" alt="" class="header-logo" /><span>FairyStory</span>`;

    let $headerTopRight = document.createElement("div");
    $headerTopRight.classList.add("header-top-right");
    let $headerFilterWrapper = document.createElement("div");
    $headerFilterWrapper.classList.add("header-filter-wrapper");
    let $headerSearch = document.createElement("input");
    $headerSearch.classList.add("header-search-input");
    $headerSearch.placeholder = "Type your Fairy Tale...";
    $headerSearch.type = "text";
    $headerSearch.setAttribute("autocomplete", "off");
    $headerSearch.name = "search";
    let $headerSearchBox = document.createElement("ul");
    $headerSearchBox.classList.add("header-search-box");
    let $headerSearchBtn = document.createElement("button");
    $headerSearchBtn.classList.add("header-search");
    $headerSearchBtn.innerHTML = `<i class="fas fa-search"></i>`;

    db.collection("stories").onSnapshot((snapshot) => {
      let stories = [];
      snapshot.docs.forEach((doc) => {
        stories.push({
          id: doc.id,
          ...doc.data(),
          createAt: new Date().toLocaleDateString("vi-VI"),
        });
      });
      $headerSearch.addEventListener("input", (e) => {
        $headerSearchBox.classList.add("show");
        this.generateSearchItems(stories, $headerSearchBox);
        this.generateSearchItems(storiesSearched(e.target.value, stories), $headerSearchBox);
        $headerSearchBox.insertAdjacentHTML(
          "afterbegin",
          `<span class = "header-search-result"><strong>${storiesSearched(e.target.value, stories).length}</strong> stories matched with you.</span>`
        );
      });
      $headerSearchBtn.addEventListener("click", () => {
        $headerSearchBox.classList.toggle("show");
        $headerFilterWrapper.classList.toggle("focus");
        $headerSearch.focus();
        this.generateSearchItems(stories, $headerSearchBox);
      });
    });
    // Search
    function storiesSearched(value, stories) {
      // let storiesFilter = JSON.parse(JSON.stringify(stories));
      let searchString = value;
      let storiesFilter = stories.filter((story) => {
        return removeVietnameseTones(story.name).toLowerCase().includes(removeVietnameseTones(searchString).toLowerCase());
      });
      if (storiesFilter.length > 0) {
        return storiesFilter;
      }
    }

    $headerFilterWrapper.append($headerSearch, $headerSearchBtn, $headerSearchBox);

    // Login
    let $headerLoginWrapper = document.createElement("div");
    $headerLoginWrapper.classList.add("header-login-wrapper");
    let $headerLoginBtn = document.createElement("button");
    $headerLoginBtn.classList.add("btn-login", "btn");
    $headerLoginBtn.innerHTML = "Login";
    let $headerRegisterBtn = document.createElement("button");
    $headerRegisterBtn.classList.add("btn-register", "btn");
    $headerRegisterBtn.innerHTML = "Register";
    let $modalLogin = document.querySelector("#modalLogin");
    let $modalRegister = document.querySelector("#modalRegister");
    $headerLoginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      $modalLogin.style.display = "block";
      $modalRegister.style.display = "none";
    });
    $headerRegisterBtn.addEventListener("click", (e) => {
      e.preventDefault();
      $modalRegister.style.display = "block";
      $modalLogin.style.display = "none";
    });
    $headerLoginWrapper.append($headerLoginBtn, $headerRegisterBtn);

    // Avatar
    let $headerAvt = document.createElement("div");
    $headerAvt.classList.add("header-avatar", "dropdown");
    $headerAvt.style.display = "none";
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        $headerLoginWrapper.style.display = "none";
        $headerAvt.style.display = "flex";

        let $dropdownSelect = document.createElement("div");
        $dropdownSelect.classList.add("dropdown-select");
        $dropdownSelect.innerHTML = `
        <a class="header-user">
        <img src="${user.image == undefined ? "../DATA/Users/user.png" : user.image}" alt="" />
        </a>
        <span class="header-user-name">${user.displayName}</span>
        `;
        let $dropdownCaret = document.createElement("i");
        $dropdownCaret.classList.add("fa", "fa-angle-down", "dropdown-caret");
        $dropdownSelect.append($dropdownCaret);
        let $dropdownList = document.createElement("ul");
        $dropdownList.classList.add("dropdown-list");
        function handleSelectDropdown() {
          $dropdownList.classList.remove("show");
          $dropdownCaret.classList.remove("fa-angle-up");
        }
        let $dropdownOption1 = this.dropdownOption("user-profile", "Profile", "far fa-address-card", handleSelectDropdown);
        let $dropdownOption2 = this.dropdownOption("dark-mode", "Dark mode", "far fa-moon", handleSelectDropdown);
        let $dropdownOption3 = this.dropdownOption("logout", "Logout", "fas fa-sign-out-alt", handleSelectDropdown);
        $dropdownOption1.addEventListener("click", () => {
          new Profile({
            id: user.uid,
          }).render();
          // router.navigate("/profile");
        });
        $dropdownOption3.addEventListener("click", (e) => {
          auth.signOut();
          window.location.href = "../index.html";
        });
        $dropdownList.append($dropdownOption1, $dropdownOption2, $dropdownOption3);
        // Avt Listener
        $dropdownSelect.addEventListener("click", function () {
          $dropdownList.classList.toggle("show");
          $dropdownCaret.classList.toggle("fa-angle-up");
        });
        $headerAvt.append($dropdownSelect, $dropdownList);
        $headerLoginWrapper.style.display = "none";
      } else {
        $headerAvt.style.display = "none";
        $headerLoginWrapper.style.display = "flex";
      }
    });

    $headerTopRight.append($headerFilterWrapper, $headerAvt, $headerLoginWrapper);
    $headerTop.append($headerLogo, $headerTopRight);
    $container.append($headerTop);
    $header.append($container);
    return $header;
  }
  dropdownOption(dataValue, content, icon, handleSelectDropdown) {
    let $dropdownOption = document.createElement("li");
    $dropdownOption.classList.add("dropdown-item");
    $dropdownOption.dataset.value = `${dataValue}`;
    $dropdownOption.innerHTML = `<span>${content}</span><i class="${icon} dropdown-item-icon"></i>`;
    $dropdownOption.addEventListener("click", handleSelectDropdown);
    return $dropdownOption;
  }
  generateSearchItems(stories, list) {
    if (list.hasChildNodes()) {
      list.innerHTML = "";
      return;
    }
    stories.forEach((story) => {
      let $searchBoxItem = document.createElement("li");
      $searchBoxItem.classList.add("header-search-item");
      $searchBoxItem.dataset.id = story.id;
      $searchBoxItem.innerHTML = `
        <div class="activity-item-image">
            <img src="../DATA/${getImgByName(story.name)}/Pages/00.jpg" alt="" />
            <span class="activity-item-time">${story.length}</span>
          </div>
          <div class="activity-item-info">
            <h3 class="title activity-item-title">${story.name}</h3>
            <div class="activity-item-author">${story.authorName}</div>
            <div class="activity-item-act">
              <div class="activity-item-date"><i class="far fa-clock"></i><span class="time-num">${story.createAt}</span></div>
            </div>
        </div>
        `;
      $searchBoxItem.addEventListener("click", () => {
        console.log("Go to: ", story);
      });
      list.appendChild($searchBoxItem);
    });
  }
}
// //Get the button
// const mybutton = document.getElementById("toTopBtn");
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
