import BaseComponent from "./BaseComponent.js";

export default class FairyScreen extends BaseComponent {
  render() {
    let $container = document.createElement("div");
    $container.className = "containerFairy";
    let $screen = document.createElement("div");
    $screen.className = "screen-detail";
    $container.append($screen);
    return $container;
  }
}
