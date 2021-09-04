import BaseComponent from "../components/BaseComponent.js";
import InputWrapper from "../components/InputWrapper.js";
import { register } from "../models/user.js";
import { validateEmail, appendTo } from "../models/utils.js";

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
      error: {
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
  handleInputChange = (fieldName, fieldValue) => {
    let tmpState = this.state;
    tmpState.data[fieldName] = fieldValue.trim();
    this.setState(tmpState);
    console.log(this.state);
  };

  // ==========================  ==========================
  render() {
    let $container = document.createElement("div");
    $container.classList.add("container");

    let _name = new InputWrapper({
      placeholder: "Your name",
      type: "text",
      error: this.state.error.name,
      value: this.state.data.name,
      onchange: (event) => {
        this.handleInputChange("name", event.target.value);
      },
      favorites: ["a", "b", "c"],
    });
    let _email = new InputWrapper({
      placeholder: "Email",
      type: "email",
      error: this.state.error.email,
      value: this.state.data.email,
      onchange: (event) => {
        this.handleInputChange("email", event.target.value);
      },
    });
    let _password = new InputWrapper({
      placeholder: "Password",
      type: "password",
      error: this.state.error.password,
      value: this.state.data.password,
      onchange: (event) => {
        this.handleInputChange("password", event.target.value);
      },
    });
    let _confirmPassword = new InputWrapper({
      placeholder: "Confirm Password",
      type: "password",
      error: this.state.error.confirmPassword,
      value: this.state.data.confirmPassword,
      onchange: (event) => {
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

    let $p = document.createElement("p");
    $p.innerHTML = "Not have account yet? ";
    let $link = document.createElement("a");
    $link.classList.add("form-link");
    $link.href = "#";
    $link.innerHTML = "Login";
    // $link.onclick =
    $p.append($link);

    let $form = document.createElement("form");
    $form.classList.add("form-fill");
    appendTo($form, _name, _email, _password, _confirmPassword);
    $form.append($btn, $p, $title);
    $form.onsubmit = this.handleRegister;

    let $wrap = document.createElement("div");
    $wrap.classList.add("form");
    $wrap.append($wrap1, $form);
    let $modal = document.createElement("div");
    $modal.classList.add("modal");
    $modal.append($wrap);

    $container.append($modal);
    return $container;
  }
  // ==========================  ==========================
  handleRegister = (event) => {
    event.preventDefault();

    let data = this.state.data;
    let error = this.state.error;

    let isPassed = true;
    if (data.name === "") {
      isPassed = false;
      error.name = "Invalid Name";
    }
    if (data.email === "" || !validateEmail(data.email)) {
      isPassed = false;
      error.email = "Invalid Email";
    }
    if (data.password === "") {
      isPassed = false;
      error.password = "Invalid Password";
    }
    if (data.confirmPassword === "") {
      isPassed = false;
      error.confirmPassword = "Invalid Confirm Password";
    }
    if (data.password != "" && data.confirmPassword != "" && data.password != data.confirmPassword) {
      isPassed = false;
      error.confirmPassword = "Confirmation Password is not correct";
    }

    if (isPassed) {
      console.log("Sign up Successfully");
      register(data.name, data.email, data.password);
      return;
    }
    let tmpState = this.state;
    tmpState.error = error;
    this.setState(tmpState);
  };
}
