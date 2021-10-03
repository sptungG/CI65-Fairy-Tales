import { removeVietnameseTones, getImgByName } from "../models/utils.js";
import StoryScreen from "./StoryScreen.js";
import BaseComponent from "../components/BaseComponent.js";
import * as data from "../data.js";
import Profile from "./Profile.js";
import DashBoard from "./DashBoard.js";
import { getAllStories } from "../models/stories.js";
import { getUserById } from "../models/user.js";
import AdminScreen from "./AdminScreen.js";
export default class Header extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render() {
    let $header = document.querySelector("#header");
    let $container = document.createElement("div");
    $container.classList.add("container");
    let $headerTop = document.createElement("div");
    $headerTop.classList.add("header-top");
    let $headerLogo = document.createElement("a");
    $headerLogo.classList.add("header-logo-link");
    $headerLogo.innerHTML = `<img src="./IMG/icons/book.svg" alt="" class="header-logo" /><span>FairyStory</span>`;
    $headerLogo.addEventListener("click", async (e) => {
      router.navigate("/dashboard");
      new DashBoard().render();
    });

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

    $headerSearch.addEventListener("input", async (e) => {
      let stories = await getAllStories();
      $headerSearchBox.classList.add("show");
      this.generateSearchItems(stories, $headerSearchBox);
      this.generateSearchItems(storiesSearched(e.target.value, stories), $headerSearchBox);
      $headerSearchBox.insertAdjacentHTML(
        "afterbegin",
        `<span class = "header-search-result"><strong>${storiesSearched(e.target.value, stories).length}</strong> stories matched with you.</span>`
      );
    });
    $headerSearchBtn.addEventListener("click", async () => {
      let stories = await getAllStories();
      $headerSearchBox.classList.toggle("show");
      $headerFilterWrapper.classList.toggle("focus");
      $headerSearch.focus();
      this.generateSearchItems(stories, $headerSearchBox);
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
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        let userr = await getUserById(auth.currentUser.uid);
        // console.log(user);
        $headerLoginWrapper.style.display = "none";
        $headerAvt.style.display = "flex";
        let $dropdownSelect = document.createElement("div");
        $dropdownSelect.classList.add("dropdown-select");
        $dropdownSelect.innerHTML = `
        <a class="header-user">
        <img src="${userr.image ? userr.image : "./DATA/Users/user.png"}" alt="" />
        </a>
        <span class="header-user-name">${userr.name ? userr.name : "Admin"}</span>
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

        let $dropdownOption0 = this.dropdownOption("admin-dashboard", "Admin", "fas fa-user-cog", handleSelectDropdown);
        let $dropdownOption1 = this.dropdownOption("user-profile", "Profile", "far fa-address-card", handleSelectDropdown);
        let $dropdownOption2 = this.dropdownOption("dark-mode", "Dark mode", "far fa-moon", handleSelectDropdown);
        let $dropdownOption3 = this.dropdownOption("logout", "Logout", "fas fa-sign-out-alt", handleSelectDropdown);
        $dropdownOption0.addEventListener("click", (e) => {
          router.navigate("/adminDashboard");
          new AdminScreen().render();
        });
        $dropdownOption1.addEventListener("click", () => {
          router.navigate("/profile");
          new Profile({
            id: auth.currentUser.uid,
          }).render();
        });
        $dropdownOption3.addEventListener("click", (e) => {
          auth.signOut();
          window.location.href = "../index.html";
        });
        $dropdownList.append($dropdownOption1, $dropdownOption2, $dropdownOption3);
        // Avt Listener
        $dropdownSelect.addEventListener("click", async () => {
          $dropdownList.classList.toggle("show");
          $dropdownCaret.classList.toggle("fa-angle-up");
          let user = await getUserById(auth.currentUser.uid);
          if (user.role === "admin") {
            $dropdownList.append($dropdownOption0, $dropdownOption1, $dropdownOption2, $dropdownOption3);
          }
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
      try {
        let $searchBoxItem = document.createElement("li");
        $searchBoxItem.classList.add("header-search-item");
        $searchBoxItem.dataset.id = story.id;
        $searchBoxItem.innerHTML = `
          <div class="activity-item-image">
              <img src="./DATA/${getImgByName(story.name)}/Pages/00.jpg" alt="" />
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
          this.handleOnclick(story);
        });
        list.appendChild($searchBoxItem);
      } catch (error) {
        console.log(error.message);
      }
    });
  }
  async handleOnclick(item) {
    router.navigate("/story");
    let $dashboard = document.getElementById("dashboard");
    let $profile = document.getElementById("profile");
    let $player = document.getElementById("player");
    $player.innerHTML = "";
    $profile.innerHTML = "";
    $dashboard.innerHTML = "";
    // console.log(item);
    new StoryScreen({ id: item.id }).render();
  }
}
// //Get the button
// const mybutton = document.getElementById("toTopBtn");
// window.onscroll = function () {
//   scrollFunction();
// };

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
