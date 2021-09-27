let router = new Navigo(null, true, "#");
// export async function register(name, email, password) {
//   try {
//     let response = await auth.createUserWithEmailAndPassword(email, password);

//     await auth.currentUser.updateProfile({
//       displayName: name,
//     });

//     // await auth.currentUser.sendEmailVerification();

//     await auth.signOut();

//     alert("Sign up successfully.");
//   } catch (error) {
//     alert(error.message);
//   }
// }

import { getDataFromDoc, getDataFromDocs } from "./utils.js";

export async function register(name, email, password) {
  await auth.createUserWithEmailAndPassword(email, password);
  await auth.currentUser.updateProfile({
    displayName: name,
  });

  //Luu document voi id la uid cua user
  let docId = auth.currentUser.uid;

  //set = add || update
  await db.collection("users").doc(docId).set({
    name: name,
    wallpaper: "https://source.unsplash.com/random/?vietnam,nature",
    image: "../DATA/Users/user.png",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae dignissimos similique sed accusantium quia sit laborum, sint veritatis soluta autem vero incidunt, repudiandae nihil doloremque? Mollitia officiis optio tempora?",
    storiesRated: [],
    storiesRead: [],
    storiesCommented: [],
  });
}

export async function login(email, password) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    console.log("Sign in successfully");
  } catch (error) {
    alert(error.message);
  }
}

export async function logout() {
  await auth.signOut();
}

export function authStateChanged(callback) {
  // chạy function khi trạng thái của người dùng thay đổi: đăng kí, đăng nhập, đăng xuất
  auth.onAuthStateChanged((user) => {
    console.log(user);
    if (user != null && user.emailVerified) {
      router.navigate("/dashboard");
      callback(user);
    } else {
      router.navigate("/login");
    }
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
