import RegisterScreen from "./screens/RegisterScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import DashBoard from "./screens/DashBoard.js";
import Profile from "./screens/Profile.js";
import { appendTo } from "./models/utils.js";

let $app = document.getElementById("app");
const register = new RegisterScreen();
const login = new LoginScreen();
const dashboard = new DashBoard();
const profile = new Profile();

// appendTo($app, login);
// appendTo($app, register);
// appendTo($app, dashboard);
// appendTo($app, profile);
