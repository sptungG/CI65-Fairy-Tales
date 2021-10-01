import { getStoryById } from "../models/stories.js";
import { getImgByName, play, pause } from "../models/utils.js";
import BaseComponent from "./BaseComponent.js";

export default class StoryPlay extends BaseComponent {
  render() {
    let $container = document.createElement("div");
    $container.classList.add("story-show-wrapper");

    let $wrapper = document.createElement("div");
    $wrapper.classList.add("story-show");
    // Story Pages
    // <div id="pages" class="pages">
    // </div>
    let $pageList = document.createElement("div");
    $pageList.id = "pages";
    $pageList.classList.add("pages");
    let $flipAudio = document.createElement("audio");
    // <audio id="flipping-sound" src="../audio/page-flip.mp3"></audio>
    $flipAudio.id = "flipping-sound";
    $flipAudio.src = "./DATA/turn_page.mp3";
    $wrapper.append($pageList, $flipAudio);
    // Story Player

    let $playerWrapper = document.createElement("div");
    $playerWrapper.classList.add("tool-bar-wrapper");
    let $playerItems = document.createElement("div");
    $playerItems.classList.add("tool-bar-items");
    let $playBtn = document.createElement("button");
    $playBtn.id = "play-btn";
    $playBtn.innerHTML = `<i class="fas fa-play"></i>`;

    let $volumeBtn = document.createElement("button");
    $volumeBtn.id = "volume-btn";
    let $volumeIcon = document.createElement("i");
    $volumeIcon.classList.add("fas", "fa-volume-up");
    // <input type="range" id="slider" step="0.5" value="5" min="1" max="100"/>
    let $volumeSlider = document.createElement("input");
    $volumeSlider.id = "volume-slider";
    $volumeSlider.type = "range";
    $volumeSlider.step = 0.5;
    $volumeSlider.value = 2;
    $volumeSlider.min = 1;
    $volumeSlider.max = 100;
    $volumeBtn.append($volumeIcon, $volumeSlider);
    $playerItems.append($playBtn, $volumeBtn);
    //     <div class="audio-container">
    //         <div class="progress-container">
    //             <div class="progress"></div>
    //         </div>
    //     </div>
    let $audioContainer = document.createElement("div");
    $audioContainer.classList.add("audio-container");
    let $progressContainer = document.createElement("div");
    $progressContainer.classList.add("progress-container");
    let $progress = document.createElement("div");
    $progress.classList.add("progress");
    $progressContainer.append($progress);
    $audioContainer.append($progressContainer);

    let $audio = document.createElement("audio");
    $audio.id = "audio";
    $audio.autoplay = true;

    let $toolBarItems = document.createElement("div");
    $toolBarItems.id = "tool-bar-items";
    let $timestamp = document.createElement("div");
    $timestamp.id = "timestamp";
    $toolBarItems.append($timestamp);

    //play/pause Btn
    $playBtn.addEventListener("click", () => {
      let isPlaying = $audioContainer.classList.contains("play");

      if (isPlaying) {
        pause($audioContainer, $audio, $playBtn);
      } else {
        play($audioContainer, $audio, $playBtn);
      }
    });
    $audio.addEventListener("timeupdate", (e) => {
      //updateProgress
      let { duration, currentTime } = e.srcElement;
      let progressPercent = (currentTime / duration) * 100;
      $progress.style.width = `${progressPercent}%`;
      let durationStr = duration < 10 ? `0:0${Math.round(duration)}` : `0:${Math.round(duration)}`;
      let currentTimeStr = currentTime < 10 ? `0:0${Math.round(currentTime)}` : `0:${Math.round(currentTime)}`;
      $timestamp.innerHTML = `${currentTimeStr}/${durationStr}`;
    });
    $progressContainer.addEventListener("click", (e) => {
      //setProgress
      let width = e.target.clientWidth;
      let clickX = e.offsetX;
      let duration = $audio.duration;
      $audio.currentTime = (clickX / width) * duration;
    });
    //Volumn adjustment
    $volumeIcon.addEventListener("click", () => {
      const isMute = $audioContainer.classList.contains("mute");
      if (isMute) {
        //unMuteAudio();
        $audioContainer.classList.remove("mute");
        $volumeIcon.classList.remove("fa-volume-mute");
        $volumeIcon.classList.add("fa-volume-up");

        let currentAudio = document.getElementById("audio");
        currentAudio.muted = false;
      } else {
        //muteAudio();
        $audioContainer.classList.add("mute");
        $volumeIcon.classList.remove("fa-volume-up");
        $volumeIcon.classList.add("fa-volume-mute");

        let currentAudio = document.getElementById("audio");
        currentAudio.muted = true;
      }
    });
    $volumeSlider.addEventListener("change", function (e) {
      $audio.volume = e.currentTarget.value / 100;
    });
    $playerWrapper.append($playerItems, $audioContainer, $audio, $toolBarItems);
    $container.append($wrapper, $playerWrapper);
    // let story = getStoryById(this.props.id);
    // console.log(this.props);
    let story = this.props.story;
    for (let i = 0; i < story.pagesNum; i++) {
      $pageList.innerHTML += `<img class="page" src="./DATA/${getImgByName(story.name)}/Pages/${("0" + i).slice(-2)}.jpg">`;
    }
    //play the first page
    setTimeout(() => {
      $audio.src = `./DATA/${getImgByName(story.name)}/Audios/00.mp3`;
      play($audioContainer, $audio, $playBtn);
      $audio.onended = function () {
        pause($audioContainer, $audio, $playBtn);
      };
    }, 1000);

    //flip pages
    let pages = [...$pageList.childNodes];

    for (let i = 0; i < story.pagesNum; i++) {
      let page = pages[i];
      if (i % 2 === 0) {
        page.style.zIndex = story.pagesNum - i;
      }
    }
    for (let i = 0; i < pages.length; i++) {
      pages[i].pageNum = i + 1;
      pages[i].onclick = function () {
        //Flipping book sound effect
        $flipAudio.play();
        $audio.pause();

        let audioFiles = [];
        // console.log(audioFiles);
        if (this.pageNum % 2 === 0) {
          if (this.pageNum == 2) {
            audioFiles.push(`./DATA/${getImgByName(story.name)}/Audios/00.mp3`);
          } else {
            audioFiles.push(`./DATA/${getImgByName(story.name)}/Audios/${("0" + (this.pageNum - Math.floor(this.pageNum / 2) - 1)).slice(-2)}.mp3`);
          }
          this.classList.remove("flipped");
          this.previousElementSibling.classList.remove("flipped");
        } else {
          audioFiles.push(`./DATA/${getImgByName(story.name)}/Audios/${("0" + (this.pageNum - Math.floor(this.pageNum / 2))).slice(-2)}.mp3`);
          this.classList.add("flipped");
          this.nextElementSibling.classList.add("flipped");
        }

        setTimeout(() => {
          //play
          let i = 0;
          // once the player ends, play the next one
          $audio.onended = function () {
            i++;
            if (i >= audioFiles.length) {
              // end
              pause($audioContainer, $audio, $playBtn);
              return;
            }
            $audio.src = audioFiles[i];
            play($audioContainer, $audio, $playBtn);
          };

          $audio.src = audioFiles[i];
          play($audioContainer, $audio, $playBtn);
        }, 1000);
      };
    }
    return $container;
  }
}
