import BaseComponent from "../components/BaseComponent.js";
import Comment from "../components/Comments.js";
import Detail from "../components/StoryDetail.js";
import Header from "../components/Header.js";
import StoryPlay from "../components/StoryPlay.js";
import * as data from "../data.js";
import { appendTo,getMedia } from "../models/utils.js";
import Stories from "../components/Stories.js";

export default class StoryScreen extends BaseComponent {
  constructor(props) {
    super(props);
  }
  render() {
    getMedia(data.stories);
    let $container = document.createElement("div");
    $container.classList.add("wrapper");
    let _header = new Header({
      user: data.user,
      stories: data.stories,
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
      story: data.stories[2],
    });
    let _storyDetail = new Detail({
      story: data.stories[2],
    });
    let _storyComments = new Comment({
      story: data.stories[2],
    });

    appendTo($detailLeft, _storyDetail, _storyComments);

    let $detailRight = document.createElement("div");
    $detailRight.classList.add("detail-right");
    let $detailRightTitle = document.createElement("h3");
    $detailRightTitle.classList.add("title", "relate-title");
    $detailRightTitle.innerHTML = `Related Stories`;
    $detailRight.append($detailRightTitle);
    let _relatedList = new Stories({
      stories: data.stories,
    });
    appendTo($detailRight, _relatedList);

    $detailSides.append($detailLeft, $detailRight);
    appendTo($detailContainer, _storyPlay);
    $detailContainer.append($detailSides);
    $detailSection.append($detailContainer);
    appendTo($container, _header);
    $container.append($detailSection);
    return $container;
  }
}
