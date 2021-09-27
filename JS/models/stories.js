import { getDataFromDoc, getDataFromDocs } from "./utils.js";

export async function getAllComics() {
  let response = await db.collection("stories").get();
  let data = getDataFromDocs(response.docs);
  return data;
}

export async function getComicByTitle(title) {
  let response = await db.collection("stories").doc(title).get();
  return getDataFromDoc(response);
}

export function generateCategories(categoryList, list) {
  categoryList.forEach((category) => {
    let $categoryItem = document.createElement("li");
    $categoryItem.classList.add("category-item");
    $categoryItem.dataset.value = category.name.toLowerCase();
    $categoryItem.innerHTML = `
    <div class="category-item-image">
      <img src="../IMG/categories/${category.name.toLowerCase()}.png" alt="" />
    </div>
    <div class="category-item-content">
      <h3>${category.name}</h3>
      <p>${category.desc}</p>
    </div>
    `;
    list.appendChild($categoryItem);
  });
}
export function filterStory(category, stories) {
  let filterStories = stories;
  if (category != "all") {
    filterStories = stories.filter((story) => {
      return story.categories.join(",").toLowerCase().split(",").indexOf(category) != -1;
    });
    console.log("Filter: ", category, filterStories);
    return filterStories;
  }
  console.log("Filter: ", category, filterStories);
  return filterStories;
}
