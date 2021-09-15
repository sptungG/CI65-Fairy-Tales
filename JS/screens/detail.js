import BaseComponent from "../components/BaseComponent.js";
import FairyList from "../components/FairyList.js";
import fairyScreen from "../components/FairyScreen.js/index.js";
import { appendTo } from "../models/utils.js";

export default class detail extends BaseComponent {
  render() {
    let $img = document.createElement("div");
    $img.className = "containerDetail";
    $img.classList.add("form-img");
    let _fairyList = new FairyList({});

    let $h1 = document.createElement("h1");
    $h1.className = "h1-detail";
    $h1.innerHTML = "Bé Nên Xem";
    let _screen = new fairyScreen({});
    appendTo($img, _screen, _fairyList);

    return $img;
  }
}
