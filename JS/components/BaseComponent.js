export default class BaseComponent {
  props;
  state;

  $element;
  constructor(props) {
    this.props = props;
  }

  /**
   * @returns {HTMLElement}
   */
  render() {}

  afterRender() {}

  setState(newState) {
    this.state = newState;
    this.refresh();
  }

  /**
   * Thay đổi giao diện phù hợp với trạng thái hiện tại
   */
  refresh() {
    let $element = this.render();

    if (this.$element) {
      this.$element.replaceWith($element);
    }
    this.$element = $element;
    this.afterRender();
    return this.$element;
  }
}
