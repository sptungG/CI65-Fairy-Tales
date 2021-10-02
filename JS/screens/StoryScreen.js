import BaseComponent from "../components/BaseComponent.js";
import Comment from "../components/Comments.js";
import Detail from "../components/StoryDetail.js";
import StoryPlay from "../components/StoryPlay.js";
import { appendTo } from "../models/utils.js";
import StoryInGrid from "../components/StoryInGrid.js";

export default class StoryScreen extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = "";
  }
  render() {
    db.collection("stories")
      .doc(this.props.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
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
            id: doc.id,
            story: doc.data(),
          });
          let _storyComments = new Comment({
            id: doc.id,
            story: doc.data(),
          });
          appendTo($detailLeft, _storyDetail, _storyComments);
          
          appendTo($detailContainer, _storyPlay);
          $detailSides.append($detailLeft);
          
          
          let $detailRight = document.createElement("div");
          $detailRight.classList.add("detail-right");
          let $detailRightTitle = document.createElement("h3");
          $detailRightTitle.classList.add("title", "relate-title");
          $detailRightTitle.innerHTML = `Related Stories`;
          let $relatedList = document.createElement("ul");
          $relatedList.className = "story-list";
          $relatedList.innerHTML = "";
          db.collection("stories")
            .limit(4)
            .orderBy("viewsNum", "desc")
            .onSnapshot((snapshot) => {
              let stories = [];
              snapshot.docs.forEach((doc) => {
                stories.push({
                  id: doc.id,
                  ...doc.data(),
                });
              });
              stories.forEach((story) => {
                let _story = new StoryInGrid({ story: story });
                appendTo($relatedList, _story);
              });
            });
          $detailRight.append($detailRightTitle, $relatedList);
          $detailSides.append($detailRight);
          $detailContainer.append($detailSides);
          $detailSection.append($detailContainer);
          $container.innerHTML = "";
          $container.append($detailSection);
          return $container;
        }
      });
  }
}
