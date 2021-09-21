import BaseComponent from "../components/BaseComponent.js";
import Header from "../components/Header.js";
import Categories from "../components/Categories.js";
import Stories from "../components/Stories.js";
import * as data from "../data.js";
import { appendTo } from "../models/utils.js";

export default class DashBoard extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
    };
  }
  render() {
    
  }
}
