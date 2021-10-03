import { authStateChanged, register } from "./models/user.js";
import { appendTo } from "./models/utils.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import DashBoard from "./screens/DashBoard.js";
import Profile from "./screens/Profile.js";
import StoryScreen from "./screens/StoryScreen.js";
import AdminScreen from "./screens/AdminScreen.js";

let $app = document.getElementById("app");
let $dashboard = document.getElementById("dashboard");
let $profile = document.getElementById("profile");
let $player = document.getElementById("player");

let router = new Navigo(null, true, "#");

router.on("/dashboard", function () {
  $player.innerHTML = "";
  $profile.innerHTML = "";
  $dashboard.innerHTML = "";
  new DashBoard().render();
}).resolve();
router.on("/profile", function () {
  $player.innerHTML = "";
  $profile.innerHTML = "";
  $dashboard.innerHTML = "";
  // new Profile({
  //   id: auth.currentUser.uid,
  // }).render();
}).resolve();
router.on("/story", function () {
  $dashboard.innerHTML = "";
  $player.innerHTML = "";
  $profile.innerHTML = "";
  // new StoryScreen().render();
}).resolve();
router
  .on("/adminDashboard", function () {
    $dashboard.innerHTML = "";
    $player.innerHTML = "";
    $profile.innerHTML = "";
    new AdminScreen().render();
  })
  .resolve();
window.router = router;
