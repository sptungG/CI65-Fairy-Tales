export default class BaseComponent {
  props;
  state;
  constructor(props) {
    this.props = props;
  }

  /**
   * @returns {HTMLElement}
   */
  render() {}

  setState(newState) {
    this.state = newState;
    this.render();
  }
}
