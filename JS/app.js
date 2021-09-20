// import RegisterScreen from "./screens/RegisterScreen.js";
// import LoginScreen from "./screens/LoginScreen.js";
import LandingPage from "./screens/LandingPage.js";
// import { appendTo } from "./models/utils.js";

// let $app = document.getElementById("app");
// const register = new RegisterScreen();
// const login = new LoginScreen();
// // $app.append(login.render());
// appendTo($app, login);

let $app = document.getElementById('app');
const landingPage = new LandingPage();
$app.append(landingPage.render());

