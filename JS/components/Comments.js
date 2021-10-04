import { getStoryById } from "../models/stories.js";
import { getUserById } from "../models/user.js";
import Profile from "../screens/Profile.js";
import BaseComponent from "./BaseComponent.js";
import { auth, db, storage } from "../firebase.js";
export default class Comments extends BaseComponent {
  render() {
    let $commentsWrapper = document.createElement("div");
    $commentsWrapper.classList.add("comment-wrapper");
    let $commentTitle = document.createElement("h3");
    $commentTitle.classList.add("title", "comment-form-title");
    $commentTitle.innerHTML = `Comments`;
    let $commentForm = document.createElement("div");
    $commentForm.classList.add("comment-form");
    let $commentIcon = document.createElement("div");
    $commentIcon.classList.add("comment-form-icon", "fas", "fa-comment-dots");
    let $commentInput = document.createElement("input");
    $commentInput.classList.add("comment-form-input");
    $commentInput.placeholder = "Enter your comment ...";
    $commentInput.type = "text";
    let $commentSendBtn = document.createElement("button");
    $commentSendBtn.classList.add("comment-form-button");
    $commentSendBtn.innerHTML = `<i class="fas fa-paper-plane"></i> Send`;
    $commentSendBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      if (auth.currentUser) {
        if ($commentInput.value.trim()) {
          let userRef = await db.collection("users").doc(auth.currentUser.uid);
          let storyRef = await db.collection("stories").doc(this.props.id);
          userRef.get().then((doc) => {
            storyRef.update({
              comments: firebase.firestore.FieldValue.arrayUnion({
                userId: auth.currentUser.uid,
                date: new Date().toLocaleDateString("vi-VI"),
                text: $commentInput.value.trim(),
              }),
            });
          });
          userRef.update({
            storiesCommented: firebase.firestore.FieldValue.arrayUnion(`${this.props.id}`),
          });
        }
      } else {
        alert("Đăng nhập đi rồi mới bình luận được!");
      }
    });
    $commentForm.append($commentIcon, $commentInput, $commentSendBtn);
    let $commentList = document.createElement("ul");
    $commentList.classList.add("comment-list");
    $commentList.id = "comment-list";
    db.collection("stories")
      .doc(this.props.id)
      .onSnapshot((doc) => {
        $commentList.innerHTML = "";
        doc.data().comments.forEach(async (comment) => {
          let user = await getUserById(comment.userId);
          // console.log(user);
          let $comment = document.createElement("li");
          $comment.classList.add("comment-main-level");
          let $commentAvt = document.createElement("div");
          $commentAvt.classList.add("comment-avatar");
          $commentAvt.innerHTML = `<img src="${user.image}" alt="" />`;
          let $commentBox = document.createElement("div");
          $commentBox.classList.add("comment-box");
          let $commentHead = document.createElement("div");
          $commentHead.classList.add("comment-head");
          let $commentName = document.createElement("h6");
          $commentName.title = `See ${user.name} profile`
          $commentName.classList.add("comment-name", "by-author");
          $commentName.innerHTML = `<a href="#">${user.name}</a><span>${user.role ? user.role : ""}</span>`;
          let $commentDate = document.createElement("span");
          $commentDate.classList.add("comment-date");
          $commentDate.innerHTML = `${comment.date}`;
          let $commentContent = document.createElement("div");
          $commentContent.classList.add("comment-content");
          $commentContent.innerHTML = `${comment.text}`;
          $commentHead.append($commentName, $commentDate);
          $commentBox.append($commentHead, $commentContent);
          $comment.append($commentAvt, $commentBox);

          $commentName.addEventListener("click", () => {
            router.navigate("/profile");
            new Profile({
              id: comment.userId,
            }).render();
          });

          $commentList.appendChild($comment);
        });
      });
    $commentsWrapper.append($commentTitle, $commentForm, $commentList);

    return $commentsWrapper;
  }
}
