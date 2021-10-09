import BaseComponent from "../components/BaseComponent.js";
import InputWrapper from "../components/InputWrapper.js";
import { getUserById, login } from "../models/user.js";
import { validateEmail, appendTo, modalClose } from "../models/utils.js";
import { auth, db, storage } from "../firebase.js";
export default class AddForm extends BaseComponent {
  // truyền dữ liệu thông qua props
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        categories: "",
        authorName: "",
        authorImg: "",
        length: "",
        pagesNum: "",
        desc: "",
      },
      messageError: {
        name: "",
        categories: "",
        authorName: "",
        authorImg: "",
        length: "",
        pagesNum: "",
        desc: "",
      },
    };
  }

  /**
   * Xử lý sự kiện onchange của input
   */
  handleInputChange = (fieldName, filedValue) => {
    let tmpState = this.state;
    if (filedValue.trim() == "") {
      tmpState.messageError[fieldName] = `Invalid ${fieldName}`;
    } else {
      tmpState.messageError[fieldName] = "";
      tmpState.data[fieldName] = filedValue.trim();
    }

    this.setState(tmpState);
  };

  // ==========================  ==========================
  render() {
    let $container = document.querySelector("#modalAddStory");

    let _nameStory = new InputWrapper({
      id: "story-name",
      placeholder: "Enter story name...",
      label: "Story Name",
      type: "text",
      autocomplete: "on",
      error: this.state.messageError.name,
      value: this.state.data.name,
      onblur: (event) => {
        this.handleInputChange("name", event.target.value);
      },
    });
    let _categories = new InputWrapper({
      id: "story-categories",
      label: "Categories (Kid,Family,Education,History,Motivation,World)",
      placeholder: "Enter categories separated by (,)",
      type: "text",
      autocomplete: "on",
      error: this.state.messageError.categories,
      value: this.state.data.categories,
      onblur: (event) => {
        this.handleInputChange("categories", event.target.value);
      },
    });
    let _authorName = new InputWrapper({
      id: "author-name",
      label: "Author",
      placeholder: "Enter author name...",
      type: "text",
      autocomplete: "on",
      error: this.state.messageError.authorName,
      value: this.state.data.authorName,
      onblur: (event) => {
        this.handleInputChange("authorName", event.target.value);
      },
    });
    let _authorImg = new InputWrapper({
      id: "author-img",
      label: "Author image",
      placeholder: "Enter author image link...",
      type: "text",
      autocomplete: "on",
      error: this.state.messageError.authorImg,
      value: this.state.data.authorImg,
      onblur: (event) => {
        this.handleInputChange("authorImg", event.target.value);
      },
    });
    let _timeLength = new InputWrapper({
      id: "time-length",
      label: "Total Time length",
      placeholder: "Enter total time length of audios...",
      type: "text",
      autocomplete: "on",
      error: this.state.messageError.length,
      value: this.state.data.length,
      onblur: (event) => {
        this.handleInputChange("length", event.target.value);
      },
    });
    let _pagesNum = new InputWrapper({
      id: "pages-num",
      label: "Total Pages",
      placeholder: "Enter total number of page...",
      type: "number",
      autocomplete: "on",
      error: this.state.messageError.pagesNum,
      value: parseInt(this.state.data.pagesNum),
      onblur: (event) => {
        this.handleInputChange("pagesNum", event.target.value);
      },
    });
    let _desc = new InputWrapper({
      id: "desc",
      label: "Describe",
      placeholder: "Enter Story Describe...",
      type: "text",
      autocomplete: "on",
      error: this.state.messageError.desc,
      value: this.state.data.desc,
      onblur: (event) => {
        this.handleInputChange("desc", event.target.value);
      },
    });

    let $wrap1 = document.createElement("div");
    $wrap1.classList.add("form-wrap");
    let $img = document.createElement("img");
    $img.src = "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/icons%2Fimg-summer.jpg?alt=media&token=81b3ae39-eb26-43f0-8c1a-605098902f1c";
    $img.classList.add("form-img");
    let $caption = document.createElement("h1");
    $caption.innerHTML = "Find all types of Fairy tale story here.";
    $caption.classList.add("form-caption", "caption");
    $wrap1.append($caption, $img);

    let $title = document.createElement("h2");
    $title.innerHTML = "Create Story";
    $title.classList.add("form-title");
    let $btn = document.createElement("button");
    $btn.innerHTML = "Add Story";
    $btn.classList.add("form-btn", "btn", "btn-primary");

    let isPassed = true;

    for (const key in this.state.data) {
      if (!this.state.data[key]) {
        isPassed = false;
      }
    }

    for (const key in this.state.messageError) {
      if (this.state.messageError[key]) {
        isPassed = false;
      }
    }
    let $form = document.createElement("form");
    $form.classList.add("form-fill");
    if (isPassed) {
      $btn.disabled = false;
    } else {
      $btn.disabled = true;
      $btn.classList.remove("btn-primary");
      $btn.classList.add("btn-lock");
      $btn.style.cursor = "default";
    }
    $form.onsubmit = async (event) => {
      event.preventDefault();
      await db.collection("stories").add({
        name: this.state.data.name,
        authorName: this.state.data.authorName,
        authorImg: this.state.data.authorImg,
        categories: this.state.data.categories.split(","),
        length: this.state.data.length,
        pagesNum: parseInt(this.state.data.pagesNum),
        createAt: new Date().toLocaleDateString("vi-VI"),
        desc: this.state.data.desc,
        viewsNum: 0,
        avgRating: 0,
        favoriteNum: 0,
        comments: [],
        usersRating: [],
      });
      alert(`Added Successfully ${this.state.data.name}`);
      $container.innerHTML = "";
      window.location.reload();
      return;
    };
    appendTo($form, _nameStory, _authorName, _authorImg, _categories, _timeLength, _pagesNum, _desc);

    $form.append($btn, $title);

    let $wrap = document.createElement("div");
    $wrap.classList.add("form");
    let $btnClose = document.createElement("i");
    $btnClose.classList.add("far", "fa-times-circle", "modal-close");
    modalClose($container);
    $wrap.append($wrap1, $form, $btnClose);
    let $modal = document.createElement("div");
    $modal.classList.add("modal");
    $modal.append($wrap);

    $container.innerHTML = "";
    $container.append($modal);
    return $container;
  }
}
