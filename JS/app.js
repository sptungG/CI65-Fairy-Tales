import RegisterScreen from "./screens/RegisterScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import { appendTo } from "./models/utils.js";
import DashBoard from "./screens/DashBoard.js";

let $app = document.getElementById("app");
const register = new RegisterScreen();
const login = new LoginScreen();
// $app.append(login.render());
const dashboard = new DashBoard();
appendTo($app, dashboard);
