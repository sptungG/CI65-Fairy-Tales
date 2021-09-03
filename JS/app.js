import RegisterScreen from "./screens/RegisterScreen.js";
import LoginScreen from "./screens/LoginScreen.js";

let $app = document.getElementById("app");
const register = new RegisterScreen();
const login = new LoginScreen();
$app.append(login.render());
