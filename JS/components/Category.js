import BaseComponent from "./BaseComponent.js";

export default class Category extends BaseComponent {
  render() {
    let $categoryItem = document.createElement("li");
    $categoryItem.classList.add("category-item");
    $categoryItem.innerHTML = `
    <img src=${this.props.image} alt="" />
    <div class="category-item-content">
      <h3>${this.props.name}</h3>
      <p>${this.props.desc}</p>
    </div>
    `;
    return $categoryItem;
  }
}
