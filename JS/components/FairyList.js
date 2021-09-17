import fairy from "../data/fairy.js";
import { appendTo } from "../models/utils.js";
import BaseComponent from "./BaseComponent.js";
import Story from "./Story.js";


export default class FairyList extends BaseComponent {
  render() {
    let $container = document.createElement("div");
    $container.className = "container";

    let $descriptionDetail = document.createElement("div");
    $descriptionDetail.className = "description-detail";

    let $description = document.createElement("div");
    $description.className = "description";

    let $descriptionTitle = document.createElement('div');
    $descriptionTitle.className = "description-title";
    $descriptionTitle.innerHTML = "Chuông gió kẹo ngọt";

    let $rateDetail = document.createElement('div');
    $rateDetail.className = 'rate-detail';

    let $descriptionView = document.createElement('div');
    $descriptionView.className = "description-view";
    $descriptionView.innerHTML = "111,344 lượt xem";

    let $heartDetail = document.createElement('div');
    $heartDetail.className = "heart-detail";

    let $heart = document.createElement('div');
    $heart.className = "far fa-heart";
    
    let $dateDetail = document.createElement('div');
    $dateDetail.className = 'date-detail';
    $dateDetail.innerHTML = 'Ngày đăng: 17/9/2021';

    $heartDetail.append($heart,$dateDetail);
    $rateDetail.append($descriptionView,$heartDetail);

    let $descriptionAll = document.createElement('div');
    $descriptionAll.className = 'description-all';

    let $descriptionAuthor = document.createElement('div');
    $descriptionAuthor.className = "description-author";

    let $descriptionAuthorImg = document.createElement('div');
    $descriptionAuthorImg.className = "description-author-img";

    let $imgAuthor = document.createElement('img');
    $imgAuthor.className = "img-author-detail";
    $imgAuthor.src = "https://source.unsplash.com/random/?girl";
    $descriptionAuthorImg.append($imgAuthor);


    let $descriptionAuthorName = document.createElement('div');
    $descriptionAuthorName.className = "description-author-name";
    $descriptionAuthorName.innerHTML = "Tân Việt";



    $descriptionAuthor.append($descriptionAuthorImg,$descriptionAuthorName);

    let $descriptionMain = document.createElement("div");
    $descriptionMain.className = "description-main";
    $descriptionMain.innerHTML = "Để học tốt Ngữ văn lớp 9, loạt bài Soạn văn lớp Thuộc tính overflow được hỗ trợ trong đa Nếu chiều cao phần nội dung lớn hơn chiều cao phần tử thì nội dung sẽ bị tràn ra ngoài. Đây là giá trị mặc định của thuộc tính overflow-y số các trình duyệt. 9 Học kì 1  & Học kì 2 hay nhất, ngắn gọn nhưng đầy đủ nội dung cần thiết được biên soạn bám sát các câu hỏi trong SGK Ngữ văn lớp 9 Tập 1 và Tập 2 giúp học sinh dễ dàng soạn văn 9.";

    $descriptionAll.append($descriptionAuthor,$descriptionMain)

    $description.append($descriptionTitle,$rateDetail,$descriptionAll);

    let $listTitle = document.createElement('div');
    $listTitle.className = "list-title";



    let $list = document.createElement("div");
    $list.className = "list-group";

    for (let item of fairy) {
      let $item = document.createElement('div');
      $item.className = "item-detail";
      let _item = new Story({
        length: "8:30",
        coverImage: item.img,
        name: item.title,
        view: "100",
        date: new Date().toLocaleDateString("vi-VI"),
        rating: "4.5",
        authorImage: "https://source.unsplash.com/random/?girl",
        authorName: item.author,
        onclick: (event) => {
          console.log("Category: ", event.target.value);
        },
      });
      _item.className = 'item-detail-in'
      appendTo($item,_item)
      $list.append($item)
      // let $item = document.createElement("img");
      // let $item2 = document.createElement("div");
      // $item.src = item.img;
      // $item2.innerHTML = item.title;
      // $item.className = "list-img-item";
      // $item2.className = "list-group-item";
      // let $totalItem = document.createElement("div");
      // $totalItem.className = "totalIteam";
      // $totalItem.append($item, $item2);
      // $list.append($totalItem);
    }

    $listTitle.append($list)

    $descriptionDetail.append($description, $listTitle);

    $container.append($descriptionDetail);

    return $container;
  }
}
