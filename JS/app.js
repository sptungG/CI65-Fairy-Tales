import "./router.js"
import RegisterScreen from "./screens/RegisterScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import DashBoard from "./screens/DashBoard.js";
import Profile from "./screens/Profile.js";
import { appendTo } from "./models/utils.js";
import StoryScreen from "./screens/StoryScreen.js";
import Header from "./screens/Header.js";
// import { authStateChanged } from "./models/user.js";

let $app = document.getElementById("app");
let header = new Header().render()
let register = new RegisterScreen().render();
let login = new LoginScreen().render();
let dashboard = new DashBoard().render();
// let profile = new Profile().render();
// let story = new StoryScreen().render();
// window.onload = function() {
//     authStateChanged();
// }
// appendTo($app, login);
// appendTo($app, register);
// appendTo($app, dashboard);
// appendTo($app, profile);
// appendTo($app, story);
