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
