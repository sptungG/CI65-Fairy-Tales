import BaseComponent from "./BaseComponent.js";

export default class Header extends BaseComponent {
  render() {
    let $header = document.createElement("header");
    $header.classList.add("header");
    let $container = document.createElement("div");
    $container.className = "container";
    $container.innerHTML = `
    <div class="header-top">
      <a href="index.html" class="header-logo-link"><img src="./IMG/icons/book.svg" alt="" class="header-logo" /><span>FairyStory</span></a>
      <div class="header-top-right">
        <div class="header-filter-wrapper">
          <input autocomplete="off" type="text" name="search" placeholder="Type your Fairy Tale..." />
          <button class="header-search"><i class="fas fa-search"></i></button>
        </div>
        <div class="header-avatar dropdown" id="lightdropdown">
          <div class="dropdown-select">
            <a class="header-user">
              <img src="${this.props.user.image}" alt="" />
            </a>
            <span class="header-user-name">${this.props.user.name}</span>
            <i class="fa fa-angle-down dropdown-caret"></i>
          </div>
          <ul class="dropdown-list">
            <li class="dropdown-item" data-value="user-profile"><span>Profile</span><i class="far fa-address-card dropdown-item-icon"></i></li>
            <li class="dropdown-item" data-value="mode"><span>Dark mode</span><i class="far fa-moon dropdown-item-icon"></i></li>
            <li class="dropdown-item" data-value="logout"><span>Logout</span><i class="fas fa-sign-out-alt dropdown-item-icon"></i></li>
          </ul>
        </div>
      </div>
    </div>
    `;
    $header.append($container);
    this.createListener();
    return $header;
  }
  createListener() {
    window.addEventListener("load", function () {
      const dropdownItems = document.querySelectorAll("#lightdropdown .dropdown-item");
      const dropdownSelect = document.querySelector("#lightdropdown .dropdown-select");
      const dropdownSelectText = document.querySelector("#lightdropdown .dropdown-selected");
      const dropdownList = document.querySelector("#lightdropdown .dropdown-list");
      const dropdownCaret = document.querySelector("#lightdropdown .dropdown-caret");

      dropdownSelect.addEventListener("click", function () {
        dropdownList.classList.toggle("show");
        dropdownCaret.classList.toggle("fa-angle-up");
      });

      function handleSelectDropdown(e) {
        const { value } = e.target.dataset;
        dropdownSelectText.textContent = value;
        dropdownList.classList.remove("show");
        dropdownCaret.classList.remove("fa-angle-up");
      }

      dropdownItems.forEach((el) => el.addEventListener("click", handleSelectDropdown));
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