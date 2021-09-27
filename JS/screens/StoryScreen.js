import BaseComponent from "../components/BaseComponent.js";
import Comment from "../components/Comments.js";
import Detail from "../components/StoryDetail.js";
import Header from "../components/Header.js";
import StoryPlay from "../components/StoryPlay.js";
import * as data from "../data.js";
import { appendTo, getMedia } from "../models/utils.js";
import StoryInGrid from "../components/StoryInGrid.js";

export default class StoryScreen extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      stories: data.stories,
      user: data.user,
    };
  }
  render() {
    getMedia(this.state.stories);
    let $container = document.createElement("div");
    $container.classList.add("wrapper");
    let _header = new Header({
      user: this.state.user,
      stories: this.state.stories,
    });

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
      story: this.state.stories[0],
    });
    let _storyDetail = new Detail({
      story: this.state.stories[0],
    });
    // let _storyComments = new Comment({
    //   story: this.state.stories[0],
    // });
    // appendTo($detailLeft, _storyDetail, _storyComments);
    appendTo($detailLeft, _storyPlay);
    appendTo($detailLeft, _storyDetail);

    let $detailRight = document.createElement("div");
    $detailRight.classList.add("detail-right");
    let $detailRightTitle = document.createElement("h3");
    $detailRightTitle.classList.add("title", "relate-title");
    $detailRightTitle.innerHTML = `Related Stories`;
    let $relatedList = document.createElement("ul");
    $relatedList.className = "story-list";
    this.state.stories.forEach((story) => {
      let _story = new StoryInGrid({ story: story });
      appendTo($relatedList, _story);
    });
    $detailRight.append($detailRightTitle, $relatedList);
    $detailSides.append($detailLeft, $detailRight);
    $detailContainer.append($detailSides);
    $detailSection.append($detailContainer);
    appendTo($container, _header);
    $container.append($detailSection);
    return $container;
  }
}
