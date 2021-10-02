import { getStoryById } from "../models/stories.js";
import BaseComponent from "./BaseComponent.js";

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
                userName: doc.data().name,
                userImage: doc.data().image,
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
        doc.data().comments.forEach((comment) => {
          let $comment = document.createElement("li");
          $comment.classList.add("comment-main-level");
          $comment.innerHTML = `
        <div class="comment-avatar"><img src="${comment.userImage ? comment.userImage : "./DATA/Users/user.png"}" alt="" /></div>
        <div class="comment-box">
          <div class="comment-head">
            <h6 class="comment-name by-author"><a href="#">${comment.userName}</a></h6>
            <span class="comment-date">${comment.date}</span>
          </div>
          <div class="comment-content">${comment.text}</div>
        </div>
        `;
          $commentList.appendChild($comment);
        });
      });
    $commentsWrapper.append($commentTitle, $commentForm, $commentList);

    return $commentsWrapper;
  }
}
