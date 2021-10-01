import BaseComponent from "../components/BaseComponent.js";
import Comment from "../components/Comments.js";
import Detail from "../components/StoryDetail.js";
import StoryPlay from "../components/StoryPlay.js";
import * as data from "../data.js";
import { appendTo, getMedia } from "../models/utils.js";
import StoryInGrid from "../components/StoryInGrid.js";
import { getAllStories } from "../models/stories.js";

export default class StoryScreen extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      // stories: data.stories,
      // user: data.user,
    };
  }
  render() {
    db.collection("stories")
      .doc(this.props.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let $container = document.querySelector("#dashboard");
          $container.classList.add("wrapper");

          let $detailSection = document.createElement("section");
          $detailSection.classList.add("detail");

          let $detailContainer = document.createElement("div");
          $detailContainer.classList.add("container");

          let $detailSides = document.createElement("div");
          $detailSides.classList.add("detail-container");
          let $detailLeft = document.createElement("div");
          $detailLeft.classList.add("detail-left");
          // StoryPlay
          // Detail
          // Comment
          let _storyPlay = new StoryPlay({
            story: doc.data(),
          });
          let _storyDetail = new Detail({
            story: doc.data(),
          });
          // let _storyComments = new Comment({
          //   story: doc.data(),
          // });
          // appendTo($detailLeft, _storyDetail, _storyComments);

          appendTo($detailContainer, _storyPlay);
          // appendTo($detailLeft, _storyPlay);
          appendTo($detailLeft, _storyDetail);
          $detailSides.append($detailLeft);

          // let $detailRight = document.createElement("div");
          // $detailRight.classList.add("detail-right");
          // let $detailRightTitle = document.createElement("h3");
          // $detailRightTitle.classList.add("title", "relate-title");
          // $detailRightTitle.innerHTML = `Related Stories`;
          // let $relatedList = document.createElement("ul");
          // $relatedList.className = "story-list";
          // let stories = getAllStories();
          // console.log(stories);
          // stories.forEach((story) => {
          //   let _story = new StoryInGrid({ story: story });
          //   appendTo($relatedList, _story);
          // });
          // $detailRight.append($detailRightTitle, $relatedList);
          $detailSides.append($detailRight);
          $detailContainer.append($detailSides);
          $detailSection.append($detailContainer);
          $container.innerHTML = "";
          $container.append($detailSection);
          return $container;
        }
      });
    // db.collection("stories")
    //   .get()
    //   .then((querySnapshot) => {
    //     let stories = [];
    //     querySnapshot.docs.forEach((doc) => {
    //       stories.push({
    //         id: doc.id,
    //         ...doc.data(),
    //         createAt: new Date().toLocaleDateString("vi-VI"),
    //         pages: [],
    //         audios: [],
    //         viewsNum: 0,
    //         avgRating: 0,
    //         usersRating: [],
    //       });
    //     });
    //     getMedia(stories);

    //   });
  }
}
