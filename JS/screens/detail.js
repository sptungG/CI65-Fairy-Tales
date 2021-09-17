import BaseComponent from "../components/BaseComponent.js";
import FairyList from "../components/FairyList.js";
import fairyScreen from "../components/FairyScreen.js";
import Header from "../components/Header.js";

import { appendTo } from "../models/utils.js";

export default class detail extends BaseComponent {
  render() {
    let $img = document.createElement("div");
    $img.className = "wrapper";

    let $header = document.createElement("header");
    $header.classList.add("header");
    let _header = new Header({
      image: "https://source.unsplash.com/random/?girl",
      name: "Tungggggggggggggggggg",
    });
    appendTo($header, _header);
  


    let _fairyList = new FairyList({});

    let _screen = new fairyScreen({});

    $img.append($header)
    appendTo($img, _screen, _fairyList);

    return $img;
  }
}
