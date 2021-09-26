import { removeVietnameseTones } from "../models/utils.js";
import BaseComponent from "./BaseComponent.js";
export default class Header extends BaseComponent {
  constructor(props){
    super(props);
  }
  
  render() {
    let $header = document.createElement("header");
    $header.classList.add("header");
    let $container = document.createElement("div");
    $container.classList.add("container");
    let $headerTop = document.createElement("div");
    $headerTop.classList.add("header-top");
    let $headerLogo = document.createElement("a");
    $headerLogo.classList.add("header-logo-link");
    $headerLogo.href = "index.html";
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
    $headerSearch.addEventListener("input", (e) => {
      $headerSearchBox.classList.add("show");
      this.generateSearchItems(this.props.stories, $headerSearchBox);
      this.generateSearchItems(storiesSearched(e.target.value, this.props.stories), $headerSearchBox);
      $headerSearchBox.insertAdjacentHTML(
        "afterbegin",
        `<span class = "header-search-result"><strong>${storiesSearched(e.target.value, this.props.stories).length}</strong> stories matched with you.</span>`
      );
    });
    $headerSearchBtn.addEventListener("click", () => {
      $headerSearchBox.classList.toggle("show");
      $headerFilterWrapper.classList.toggle("focus");
      $headerSearch.focus();
      this.generateSearchItems(this.props.stories, $headerSearchBox);
    });
    $headerFilterWrapper.append($headerSearch, $headerSearchBtn, $headerSearchBox);

    let $headerAvt = document.createElement("div");
    $headerAvt.classList.add("header-avatar", "dropdown");
    let $dropdownSelect = document.createElement("div");
    $dropdownSelect.classList.add("dropdown-select");
    $dropdownSelect.innerHTML = `
    <a class="header-user">
    <img src="${this.props.user.image}" alt="" />
    </a>
    <span class="header-user-name">${this.props.user.name}</span>
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
    $dropdownList.append($dropdownOption1, $dropdownOption2, $dropdownOption3);

    // Avt Listener
    $dropdownSelect.addEventListener("click", function () {
      $dropdownList.classList.toggle("show");
      $dropdownCaret.classList.toggle("fa-angle-up");
    });

    $headerAvt.append($dropdownSelect, $dropdownList);
    $headerTopRight.append($headerFilterWrapper, $headerAvt);
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
            <img src="${story.pages[0].image}" alt="" />
            <span class="activity-item-time">${story.length}</span>
          </div>
          <div class="activity-item-info">
            <h3 class="title activity-item-title">${story.name}</h3>
            <div class="activity-item-author">${story.author.name}</div>
            <div class="activity-item-act">
              <div class="activity-item-date"><i class="far fa-clock"></i><span class="time-num">${story.date}</span></div>
            </div>
        </div>
        `;
      $searchBoxItem.addEventListener("click", () => {
        console.log("Go to: ", story);
      });
      list.appendChild($searchBoxItem);
    });
  }
  handleInputChange() {}
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
