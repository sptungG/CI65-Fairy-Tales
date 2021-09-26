import { register } from "./models/user.js";
import { appendTo } from "./models/utils.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import DashBoard from "./screens/DashBoard.js";
import Profile from "./screens/Profile.js";
import StoryScreen from "./screens/StoryScreen.js";

let $app = document.getElementById("app");

let router = new Navigo(null, true, "#");

router.on("/login", function () {
    $app.innerHTML = "";
    appendTo($app, new LoginScreen());
  }).resolve();

router.on("/register", function () {
    $app.innerHTML = "";
    appendTo($app, new RegisterScreen());
  }).resolve();

router.on("/dashboard", function () {
    $app.innerHTML = "";
    appendTo($app, new DashBoard());
  })
  .resolve();
router.on("/profile", function () {
  $app.innerHTML = "";
  appendTo($app, new Profile());
});
router.on("/story", function () {
  $app.innerHTML = "";
  appendTo($app, new StoryScreen());
});
window.router = router;
