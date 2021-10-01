import BaseComponent from "./BaseComponent.js";

export default class Comments extends BaseComponent {
  render() {
    let $commentsWrapper = document.createElement("div");
    $commentsWrapper.classList.add("comment-wrapper");
    let $commentTitle = document.createElement("h3");
    $commentTitle.classList.add("title", "comment-form-title");
    $commentTitle.innerHTML = `Comments (${this.props.story.comments.length})`;
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
    $commentForm.append($commentIcon, $commentInput, $commentSendBtn);
    let $commentList = document.createElement("ul");
    $commentList.classList.add("comment-list");
    $commentList.id = "comment-list";
    this.generateComments(this.props.story.comments, $commentList);
    $commentsWrapper.append($commentTitle, $commentForm, $commentList);

    return $commentsWrapper;
  }
  generateComments(commentsList, list) {
    commentsList.forEach((comment) => {
      let $comment = document.createElement("li");
      $comment.classList.add("comment-main-level");
      $comment.innerHTML = `
      <div class="comment-avatar"><img src="${comment.user.image ? comment.user.image : "../DATA/Users/user.png"}" alt="" /></div>
      <div class="comment-box">
        <div class="comment-head">
          <h6 class="comment-name by-author"><a href="#">${comment.user.name ? comment.user.name : "User"}</a></h6>
          <span class="comment-date">${comment.date ? comment.date : new Date().toLocaleDateString("vi-VI")}</span>
        </div>
        <div class="comment-content">${comment.text ? comment.text : "Lorem ipsum dolor sit amet consectetur adipisicing elit."}</div>
      </div>
      `;
      list.appendChild($comment);
    });
  }
}
