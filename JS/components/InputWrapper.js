import BaseComponent from "./BaseComponent.js";

export default class InputWrapper extends BaseComponent {
  render() {
    // console.log(this.props);
    let $container = document.createElement("div");
    $container.classList.add("form-group");

    let $input = document.createElement("input");
    $input.classList.add("form-input");
    $input.placeholder = this.props.placeholder;
    $input.type = this.props.type;
    $input.value = this.props.value;
    $input.onchange = this.props.onchange;

    let $error = document.createElement("div");
    $error.classList.add("form-error");
    if (!this.props.error) {
      $error.style.display = "none";
    } else {
      $error.style.display = "block";
      $error.textContent = this.props.error;
      console.log(this.props.error);
    }

    $container.append($input, $error);
    return $container;
  }
}
