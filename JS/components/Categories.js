import BaseComponent from "./BaseComponent.js";

export default class Categories extends BaseComponent {
  render() {
    let $categoryList = document.createElement("ul");
    $categoryList.className = "category-list";
    this.generateCategories(this.props.categories, $categoryList);
    return $categoryList;
  }
  generateCategories(categories, list) {
    categories.forEach((category) => {
      let $categoryItem = document.createElement("li");
      $categoryItem.classList.add("category-item");
      $categoryItem.innerHTML = `
      <img src=${category.image} alt="" />
      <div class="category-item-content">
        <h3>${category.name}</h3>
        <p>${category.desc}</p>
      </div>
      `;
      list.appendChild($categoryItem);
    });
  }
}
