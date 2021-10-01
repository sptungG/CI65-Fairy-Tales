import { register } from "./models/user.js";
import { appendTo } from "./models/utils.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import DashBoard from "./screens/DashBoard.js";
import Profile from "./screens/Profile.js";
import StoryScreen from "./screens/StoryScreen.js";

let $app = document.getElementById("app");
let $dashboard = document.getElementById("dashboard");

let router = new Navigo(null, true, "#");

router.on("/dashboard", function () {
  $dashboard.innerHTML = "";
  new DashBoard().render();
});
router.on("/profile", function () {
  $dashboard.innerHTML = "";
  new Profile().render();
});
router.on("/story", function () {
  $app.innerHTML = "";
  new StoryScreen().render();
});
window.router = router;
