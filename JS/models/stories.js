// export async function createConversation(data) {
//   data.messages = [];

//   let currentEmail = auth.currentUser.email;

//   if (!data.members.includes(currentEmail)) { // nếu chưa tồn tại email => push email của người dùng hiện tại
//       data.members.push(currentEmail);
//   }
//   // groupName, members, messages
//   // console.log(data);
//   // thêm 1 document vào collection conversations:
//   await db.collection('conversations').add(data);
//   console.log('Create conversation successfully');
// }
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

