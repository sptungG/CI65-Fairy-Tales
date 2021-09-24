import BaseComponent from "./BaseComponent.js";

export default class StoryPlay extends BaseComponent {
  render() {
    let $container = document.createElement("div");
    $container.classList.add("story-show", "slider");

    let $wrapper = document.createElement("div");
    $wrapper.classList.add("slider-wrapper");
    // Story Pages
    let $pageList = document.createElement("ul");
    $pageList.classList.add("story-page-list", "slider-main");
    this.generatePages(this.props.story.pages, $pageList);
    let $pagination = document.createElement("ul");
    $pagination.classList.add("slider-dots");
    this.generatePagination(this.props.story.pages, $pagination);

    let $btnPrev = document.createElement("button");
    $btnPrev.classList.add("slider-prev", "fas", "fa-chevron-left");
    let $btnNext = document.createElement("button");
    $btnNext.classList.add("slider-next", "fas", "fa-chevron-right");

    // Story Player
    let $playerWrapper = document.createElement("div");
    $playerWrapper.classList.add("player-wrapper");
    let $playBtn = document.createElement("button");
    $playBtn.classList.add("player-play", "fas", "fa-play");
    let $progressWrapper = document.createElement("div");
    $progressWrapper.classList.add("progress-wrapper");
    let $progress = document.createElement("div");
    $progress.classList.add("progress");
    let $progressRange = document.createElement("input");
    $progressRange.type = "range";
    $progressRange.id = "progress-bar";
    $progressRange.classList.add("bar");
    $progressRange.value = 0;
    $progressRange.setAttribute("min", "0");
    $progressRange.setAttribute("max", "");
    let $playerNumber = document.createElement("div");
    $playerNumber.classList.add("player-number");
    let $playerDuration = document.createElement("div");
    $playerDuration.classList.add("player-duration");
    $playerDuration.innerHTML = `${this.props.story.length}`;
    let $playerRemaining = document.createElement("div");
    $playerRemaining.classList.add("player-remaining");
    $playerRemaining.innerHTML = `0:00`;
    $playerNumber.append($playerDuration, $playerRemaining);
    $progress.append($progressRange);
    $progressWrapper.append($progress, $playerNumber);
    // $progressWrapper.innerHTML = `
    // <div class="progress">
    // <input type="range" id="progress-bar" min="0" max="" value="0" class="bar" />
    // <!-- <audio src="./files/holo.mp3" id="song"></audio> -->
    // </div>
    // <div class="player-number">
    //   <span class="player-duration">0:00</span>
    //   <span class="player-remaining">0:00</span>
    //   </div>
    // `;
    let $volumeBtn = document.createElement("button");
    $volumeBtn.classList.add("player-volume", "fas", "fa-volume-up");
    $playerWrapper.append($playBtn, $progressWrapper, $volumeBtn);
    $wrapper.append($pageList, $pagination);
    $container.append($wrapper, $btnNext, $btnPrev, $playerWrapper);
    this.createListener();
    return $container;
  }
  generatePages(pages, list) {
    pages.forEach((page) => {
      let $page = document.createElement("li");
      $page.classList.add("story-page-item", "slider-item");
      if(page.text) $page.innerHTML = `<p class="story-page-text slider-item-text">${page.text}</p><div class="story-page-image slider-item-image"><img src="${page.image}" alt=""/></div>`;
      else $page.innerHTML = `<div class="story-page-image slider-item-image"><img src="${page.image}" alt=""/></div>`;
      list.appendChild($page);
    });
  }
  generatePagination(pages, list) {
    for (const idx in pages) {
      let $dot = document.createElement("li");
      $dot.classList.add("slider-dot-item");
      $dot.dataset.index = idx;
      list.appendChild($dot);
    }
    return;
  }
  createListener() {
    window.addEventListener("load", function () {
      const sliderMain = document.querySelector(".slider-main");
      const sliderItems = document.querySelectorAll(".slider-item");
      const nextBtn = document.querySelector(".slider-next");
      const prevBtn = document.querySelector(".slider-prev");
      const dotItems = document.querySelectorAll(".slider-dot-item");
      const sliderItemWidth = sliderItems[0].offsetWidth;
      const slidesLength = sliderItems.length;
      let positionX = 0;
      let index = 0;
      nextBtn.addEventListener("click", function () {
        handleChangeSlide(1);
      });
      prevBtn.addEventListener("click", function () {
        handleChangeSlide(-1);
      });
      [...dotItems].forEach((item) =>
        item.addEventListener("click", function (e) {
          [...dotItems].forEach((el) => el.classList.remove("active"));
          e.target.classList.add("active");
          const slideIndex = parseInt(e.target.dataset.index);
          index = slideIndex;
          positionX = -1 * index * sliderItemWidth;
          sliderMain.style = `transform: translateX(${positionX}px)`;
        })
      );
      function handleChangeSlide(direction) {
        if (direction === 1) {
          if (index >= slidesLength - 1) {
            index = slidesLength - 1;
            return;
          }
          positionX = positionX - sliderItemWidth;
          sliderMain.style = `transform: translateX(${positionX}px)`;
          index++;
        } else if (direction === -1) {
          if (index <= 0) {
            index = 0;
            return;
          }
          positionX = positionX + sliderItemWidth;
          sliderMain.style = `transform: translateX(${positionX}px)`;
          index--;
        }
        [...dotItems].forEach((el) => el.classList.remove("active"));
        dotItems[index].classList.add("active");
      }
    });
  }
}
