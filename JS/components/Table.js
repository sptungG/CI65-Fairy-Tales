import { getStoryById } from "../models/stories.js";
import { getImgByName } from "../models/utils.js";
import StoryScreen from "../screens/StoryScreen.js";
import BaseComponent from "./BaseComponent.js";

export default class Table extends BaseComponent {
  render() {
    // console.log(this.props);
    let $tr = document.createElement("tr");
    let $tdStory = document.createElement("td");
    $tdStory.innerHTML = `<div class="image-text"><img class="page" src="./DATA/${getImgByName(this.props.story.name)}/Pages/00.jpg"><span class="item-name">${
      this.props.story.name
    }</span></div>`;
    let $tdAuthor = document.createElement("td");
    $tdAuthor.innerHTML = `<span>${this.props.story.authorName}</span>`;
    let $tdDesc = document.createElement("td");
    $tdDesc.innerHTML = `<p class="item-desc">${this.props.story.desc}</p>`;
    let $tdCategory = document.createElement("td");
    let $categoryList = document.createElement("ul");
    $categoryList.classList.add("item-category-list");
    this.generateCategories(this.props.story.categories, $categoryList);
    $tdCategory.append($categoryList);
    let $tdLength = document.createElement("td");
    $tdLength.innerHTML = `<div class="item-audio"><div class="item-audio-length">${this.props.story.length}</div></div>`;
    let $tdPagesNum = document.createElement("td");
    $tdPagesNum.innerHTML = `<div class="item-pages-num">${this.props.story.pagesNum}</div>`;
    let $tdCreateAt = document.createElement("td");
    $tdCreateAt.innerHTML = `<div class="item-date">${this.props.story.createAt}</div>`;

    let $tdReaction = document.createElement("td");
    $tdReaction.innerHTML = `
    <div class="item-reaction">
      <div class="reaction-e item-rate"><i class="fas fa-star"></i><span></span>${this.props.story.avgRating}</div>
      <div class="reaction-e item-favorite"><i class="fas fa-heart"></i><span>${this.props.story.favoriteNum}</span></div>
      <div class="reaction-e item-view"><i class="fas fa-eye"></i><span>${this.props.story.viewsNum}</span></div>
      <div class="reaction-e item-comment"><i class="far fa-comment-dots"></i><span>${this.props.story.comments.length}</span></div>
    </div>
    `;
    let $tdAction = document.createElement("td");
    let $action = document.createElement("div");
    $action.classList.add("action");
    let $actionShow = document.createElement("button");
    $actionShow.classList.add("btn-show", "btn");
    $actionShow.id = "btn-show";
    $actionShow.innerHTML = `<i class="fab fa-readme"></i>`;
    $actionShow.addEventListener("click", () => {
      this.showStory(this.props.story);
    });
    let $actionDelete = document.createElement("td");
    $actionDelete.classList.add("btn-delete", "btn");
    $actionDelete.id = "btn-delete";
    $actionDelete.innerHTML = `<i class="far fa-trash-alt"></i>`;
    $action.append($actionShow, $actionDelete);
    $tdAction.append($action);
    $tr.append($tdStory, $tdAuthor, $tdDesc, $tdCategory, $tdLength, $tdPagesNum, $tdCreateAt, $tdReaction, $tdAction);
    return $tr;
  }
  generateCategories(categories, list) {
    categories.forEach((category) => {
      let $category = document.createElement("li");
      $category.classList.add("item-category-e");
      $category.innerHTML = `${category}`;
      list.appendChild($category);
    });
  }
  showStory(item) {
    router.navigate("/story");
    new StoryScreen({ id: item.id }).render();
  }
}
