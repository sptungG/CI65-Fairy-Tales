import BaseComponent from "./BaseComponent.js";

export default class Categories extends BaseComponent {
  render() {
    let $categoryList = document.createElement("ul");
    $categoryList.className = "category-list";
    this.generateCategories(this.props.categories, $categoryList);
    return $categoryList;
  }
  generateCategories(categoryList, list) {
    categoryList.forEach((category) => {
      let $categoryItem = document.createElement("li");
      $categoryItem.classList.add("category-item");
      $categoryItem.dataset.value = category.name.toLowerCase();
      $categoryItem.innerHTML = `
      <div class="category-item-image">
        <img src=${category.image} alt="" />
      </div>
      <div class="category-item-content">
        <h3>${category.name}</h3>
        <p>${category.desc}</p>
      </div>
      `;
      list.appendChild($categoryItem);
    });
  }
  filterStory(category, stories) {
    if (category != "All") {
      let filterStories = stories.filter((story) => {
        return story.categories.join(",").toLowerCase().split(",").indexOf(category) != -1;
      });
      console.log(filterStories);
      return filterStories;
    }
  }
}
