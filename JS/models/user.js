import DashBoard from "../screens/DashBoard.js";
import { getDataFromDoc, getDataFromDocs } from "./utils.js";

let router = new Navigo(null, true, "#");

export async function register(name, email, password) {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    await auth.currentUser.updateProfile({
      displayName: name,
    });

    //Luu document voi id la uid cua user
    let docId = auth.currentUser.uid;

    //set = add || update
    await db
      .collection("users")
      .doc(docId)
      .set(
        {
          name: name,
          email: email,
          password: password,
          wallpaper: "https://source.unsplash.com/random/?vietnam,nature",
          image: "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/user.png?alt=media&token=990e1356-808c-4fd3-ba10-4b9b37482091",
          bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae dignissimos similique sed accusantium quia sit laborum, sint veritatis soluta autem vero incidunt, repudiandae nihil doloremque? Mollitia officiis optio tempora?",
          storiesFavorite: [],
          storiesRead: [],
          storiesCommented: [],
          storiesRated: [],
          createAt: new Date().toLocaleDateString("vi-VI"),
        },
        { merge: true }
      );
    await auth.signOut();
    let $register = document.querySelector("#modalRegister");
    $register.style.display = "none";
    let $login = document.querySelector("#modalLogin");
    $login.style.display = "block";
    alert("Dang ki thanh cong");
  } catch (error) {
    alert("Dang ky khong thanh cong", error.message);
  }
}

export async function login(email, password) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    console.log("Sign in successfully");
    let $login = document.querySelector("#modalLogin");
    $login.style.display = "none";
    router.navigate("/dashboard");
    new DashBoard().render();
  } catch (error) {
    alert(error.message);
  }
}

export async function logout() {
  await auth.signOut();
}
export function authStateChanged(callback) {
  //dang ki, dang nhap, dang xuat
  firebase.auth().onAuthStateChanged((user) => {
    callback(user);
  });
}

export async function getAllUsers() {
  let response = await db.collection("users").get();
  let data = getDataFromDocs(response.docs);
  return data;
}

export function listenAllUsers(callback) {
  db.collection("users").onSnapshot((response) => {
    callback(getDataFromDocs(response.docs));
  });
}
export async function getUserById(id) {
  let response = await db.collection("users").doc(id).get();
  return getDataFromDoc(response);
}
export async function updateUser(id, data) {
  await db.collection("users").doc(id).update(data);
}

export async function updateCurrentUser(data) {
  let currentUser = auth.currentUser;
  await updateUser(currentUser.uid, data);
}

export function listenCurrentUser(callback) {
  let currentUser = auth.currentUser;
  db.collection("users")
    .doc(currentUser.uid)
    .onSnapshot((response) => {
      callback(getDataFromDoc(response));
    });
}
