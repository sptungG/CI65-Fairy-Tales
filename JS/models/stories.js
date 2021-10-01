import { getDataFromDoc, getDataFromDocs } from "./utils.js";

export async function getAllStories() {
  let response = await db.collection("stories").get();
  let data = getDataFromDocs(response.docs);
  return data;
}

export async function getStoryById(id) {
  let response = await db.collection("stories").doc(id).get();
  return getDataFromDoc(response);
}

export function filterStory(category, stories) {
  let filterStories = stories;
  if (category != "all") {
    filterStories = stories.filter((story) => {
      return story.categories.join(",").toLowerCase().split(",").indexOf(category) != -1;
    });
    return filterStories;
  }
  return filterStories;
}
