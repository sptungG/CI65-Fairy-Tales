import BaseComponent from "../components/BaseComponent.js";
import InputWrapper from "../components/InputWrapper.js";
import {appendTo, modalClose } from "../models/utils.js";
import { auth, db, storage } from "../firebase.js";
export default class UpdateForm extends BaseComponent {
  // truyền dữ liệu thông qua props
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        bio: "",
        image: "",
      },
      messageError: {
        name: "",
        bio: "",
        image: "",
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
    let $container = document.querySelector("#modalProfile");

    let _name = new InputWrapper({
      id: "user-name",
      placeholder: "Enter your new name...",
      label: "Name",
      type: "text",
      autocomplete: "on",
      error: this.state.messageError.name,
      value: this.state.data.name,
      onblur: (event) => {
        this.handleInputChange("name", event.target.value);
      },
    });
    let _bio = new InputWrapper({
      id: "user-bio",
      label: "Bio",
      placeholder: "Enter your new bio...",
      type: "text",
      autocomplete: "on",
      error: this.state.messageError.bio,
      value: this.state.data.bio,
      onblur: (event) => {
        this.handleInputChange("bio", event.target.value);
      },
    });
    let _image = new InputWrapper({
      id: "user-image",
      label: "Avatar",
      placeholder: "Enter your new avatar link...",
      type: "text",
      autocomplete: "on",
      error: this.state.messageError.image,
      value: this.state.data.image,
      onblur: (event) => {
        this.handleInputChange("image", event.target.value);
      },
    });
    // let _wallpaper = new InputWrapper({
    //   id: "user-wallpaper",
    //   label: "Cover",
    //   placeholder: "Enter your new cover link...",
    //   type: "text",
    //   autocomplete: "on",
    //   error: this.state.messageError.wallpaper,
    //   value: this.state.data.wallpaper,
    //   onblur: (event) => {
    //     this.handleInputChange("wallpaper", event.target.value);
    //   },
    // });

    let $wrap1 = document.createElement("div");
    $wrap1.classList.add("form-wrap");
    let $img = document.createElement("img");
    $img.src = "./IMG/img-cat.jpg";
    $img.classList.add("form-img");
    let $caption = document.createElement("h1");
    $caption.innerHTML = "Find all types of Fairy tale story here.";
    $caption.classList.add("form-caption", "caption");
    $wrap1.append($caption, $img);

    let $title = document.createElement("h2");
    $title.innerHTML = "Update Profile";
    $title.classList.add("form-title");
    let $btn = document.createElement("button");
    $btn.innerHTML = "Update";
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
      await db.collection("users").doc(auth.currentUser.uid).update({
        name: this.state.data.name,
        bio: this.state.data.bio,
        image: this.state.data.image,
      });
      alert(`Update Successfully ${this.state.data.name}`);
      $container.innerHTML = "";
      window.location.reload();
      return;
    };
    appendTo($form, _name, _image, _bio);

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
