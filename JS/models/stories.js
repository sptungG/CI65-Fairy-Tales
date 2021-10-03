import { getDataFromDoc, getDataFromDocs, getImgByName } from "./utils.js";
import { auth, db, storage } from "../firebase.js";
// export async function getPageImage(storyName, index) {
//   let pageUrl = await storage.ref(`${getImgByName(storyName)}/Pages`).child(`${("0" + index).slice(-2)}.jpg`).getDownloadURL();
//   return pageUrl;
// }

// export async function getPageAudio(storyName, index) {
//   let pageUrl = await storage.ref(`${getImgByName(storyName)}/Audios`).child(`${("0" + index).slice(-2)}.jpg`).getDownloadURL();
//   return pageUrl;
// }

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
  try {
  let filterStories = stories;
  if (category != "all") {
    filterStories = stories.filter((story) => {
        return story.categories.join(",").toLowerCase().split(",").indexOf(category) != -1;
      });
      return filterStories;
    }
    return filterStories;
  } catch (error) {
    console.error(error.message);
  }
}
