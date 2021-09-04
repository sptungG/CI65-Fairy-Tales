import BaseComponent from "../components/BaseComponent.js";
import InputWrapper from "../components/InputWrapper.js";
import { validateEmail } from "../utils.js";

export default class RegisterScreen extends BaseComponent {
  // truyền dữ liệu thông qua props
  constructor(props) {
    super(props);
    // lưu tất cả dữ liệu name, email, password qua state
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
    // console.log(fieldName, fieldValue);
    let tmpState = this.state;
    // lấy dữ liệu
    tmpState.data[fieldName] = fieldValue.trim();
    // kiểm tra dữ liệu
    // 1. nhập đến đâu kiểm tra dữ liệu đến đó
    // 2. nhập rồi bấm Register rồi mới kiểm tra *

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
    $img.src = "../.././IMG/img-bedroom.png";
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
    $p.innerHTML = "Not have account yet?";
    $p.style.color = "#6a727f";
    let $link = document.createElement("a");
    $link.classList.add("form-link");
    $link.href = "#";
    $link.innerHTML = "Login";
    // $link.onclick =
    $p.append($link);

    let $form = document.createElement("form");
    $form.classList.add("form-fill");
    $form.append($title, _name.render(), _email.render(), _password.render(), _confirmPassword.render(), $btn, $p);
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
    // error.name = "";
    // error.email = "";
    // error.password = "";
    // error.confirmPassword = "";

    if (data.name === "") {
      error.name = "Invalid Name";
    }
    if (data.email === "" || !validateEmail(data.email)) {
      error.email = "Invalid Email";
    }
    if (data.password === "") {
      error.password = "Invalid Password";
    }
    if (data.confirmPassword === "") {
      error.confirmPassword = "Invalid Confirm Password";
    }
    if (data.password != "" && data.confirmPassword != "" && data.password != data.confirmPassword) {
      error.confirmPassword = "Confirmation Password is not correct";
    }
    this.setState(this.state);
  };
}
