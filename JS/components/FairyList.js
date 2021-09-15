import fairy from "../data/fairy.js";
import BaseComponent from "./BaseComponent.js";

export default class FairyList extends BaseComponent {
  render() {
    let $container = document.createElement("div");
    $container.className = "container";
    let $h1 = document.createElement("h1");
    $h1.className = "h1-detail";
    $h1.innerHTML = "Bé Nên Xem";
    let $list = document.createElement("div");
    $list.className = "list-group";

    for (let item of fairy) {
      let $item = document.createElement("img");
      let $item2 = document.createElement("div");
      $item.src = item.img;
      $item2.innerHTML = item.title;
      $item.className = "list-img-item";
      $item2.className = "list-group-item";
      let $totalItem = document.createElement("div");
      $totalItem.className = "totalIteam";
      $totalItem.append($item, $item2);
      $list.append($totalItem);
    }

    $container.append($h1, $list);

    return $container;
  }
}
