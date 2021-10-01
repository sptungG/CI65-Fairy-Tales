import BaseComponent from "../components/BaseComponent.js";
import InputWrapper from "../components/InputWrapper.js";
import { register } from "../models/user.js";
import { validateEmail, appendTo, modalClose } from "../models/utils.js";

export default class RegisterScreen extends BaseComponent {
  // truyền dữ liệu thông qua props
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      messageError: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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
    }
    if (fieldName == "email" && filedValue) {
      if (!validateEmail(filedValue)) {
        tmpState.messageError[fieldName] = "Invalid email";
        tmpState.data[fieldName] = filedValue.trim();
      } else {
        tmpState.data[fieldName] = filedValue.trim();
      }
    }
    if (fieldName == "password") {
      if (filedValue.trim().length < 6) {
        tmpState.messageError[fieldName] = "Password should be minimum 6 characters.";
      }
    }
    if (fieldName == "confirmPassword") {
      if (filedValue != this.state.data.password) {
        tmpState.messageError[fieldName] = "Password not matched.";
      }
    }

    tmpState.data[fieldName] = filedValue.trim();

    this.setState(tmpState);
  };

  // ==========================  ==========================
  render() {
    let $container = document.querySelector("#modalRegister");

    let _name = new InputWrapper({
      placeholder: "Your name",
      type: "text",
      error: this.state.messageError.name,
      value: this.state.data.name,
      onblur: (event) => {
        this.handleInputChange("name", event.target.value);
      },
    });
    let _email = new InputWrapper({
      placeholder: "Email",
      type: "email",
      error: this.state.messageError.email,
      value: this.state.data.email,
      onblur: (event) => {
        this.handleInputChange("email", event.target.value);
      },
    });
    let _password = new InputWrapper({
      placeholder: "Password",
      type: "password",
      error: this.state.messageError.password,
      value: this.state.data.password,
      onblur: (event) => {
        this.handleInputChange("password", event.target.value);
      },
    });
    let _confirmPassword = new InputWrapper({
      placeholder: "Confirm Password",
      type: "password",
      error: this.state.messageError.confirmPassword,
      value: this.state.data.confirmPassword,
      onblur: (event) => {
        this.handleInputChange("confirmPassword", event.target.value);
      },
    });

    let $wrap1 = document.createElement("div");
    $wrap1.classList.add("form-wrap");
    let $img = document.createElement("img");
    $img.src = "./IMG/img-bedroom.png";
    $img.classList.add("form-img");
    let $caption = document.createElement("h1");
    $caption.innerHTML = "Find all types of Fairy tale story here.";
    $caption.classList.add("form-caption", "caption");
    $wrap1.append($caption, $img);

    let $title = document.createElement("h2");
    $title.innerHTML = "Create an account";
    $title.classList.add("form-title");
    let $btn = document.createElement("button");
    $btn.innerHTML = "Register";
    $btn.classList.add("form-btn", "btn", "btn-primary");

    let $modalLogin = document.querySelector("#modalLogin");
    let $p = document.createElement("p");
    $p.innerHTML = "Already have account? ";
    let $link = document.createElement("a");
    $link.classList.add("form-link");
    $link.href = "#";
    $link.innerHTML = "Login";
    $link.addEventListener("click", (event) => {
      event.preventDefault();
      $modalLogin.style.display = "block";
      $container.style.display = "none";
    });
    $p.append($link);

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
    appendTo($form, _name, _email, _password, _confirmPassword);
    $form.append($btn, $p, $title);
    $form.onsubmit = async (event) => {
      event.preventDefault();
      await register(this.state.data.name, this.state.data.email, this.state.data.password);
      let tmpState = this.state;
      tmpState = {
        data: {
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
        messageError: {
          name: "",
          email: "",
          password: "",
          confirmpassword: "",
        },
      };
      this.setState(tmpState);

      return;
    };

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
