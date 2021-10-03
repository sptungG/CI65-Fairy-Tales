import BaseComponent from "../components/BaseComponent.js";
import Comment from "../components/Comments.js";
import Detail from "../components/StoryDetail.js";
import StoryPlay from "../components/StoryPlay.js";
import { appendTo } from "../models/utils.js";
import StoryInGrid from "../components/StoryInGrid.js";
import { getStoryById } from "../models/stories.js";

export default class StoryScreen extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = "";
  }
  render() {
    db.collection("stories")
      .doc(this.props.id)
      .onSnapshot((doc) => {
        console.log(doc.data());
        let $dashboard = document.querySelector("#dashboard");
        let $profile = document.querySelector("#profile");
        let $container = document.querySelector("#player");
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
        // let story1 = await getStoryById(this.props.id);
        let story1 = doc.data();
        let _storyPlay = new StoryPlay({
          story: story1,
        });
        let _storyDetail = new Detail({
          id: this.props.id,
          story: story1,
        });
        let _storyComments = new Comment({
          id: this.props.id,
          story: story1,
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
            snapshot.docs.forEach((doc) => {
              let story = {
                id: doc.id,
                ...doc.data(),
              };
              let _story = new StoryInGrid({ story: story });
              appendTo($relatedList, _story);
            });
          });
        $detailRight.append($detailRightTitle, $relatedList);
        $detailSides.append($detailRight);
        $detailContainer.append($detailSides);
        $detailSection.append($detailContainer);
        $dashboard.innerHTML = "";
        $profile.innerHTML = "";
        $container.innerHTML = "";
        $container.append($detailSection);
        return $container;
      });
  }
}
