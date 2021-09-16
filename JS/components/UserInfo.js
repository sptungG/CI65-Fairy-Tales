import BaseComponent from "./BaseComponent.js";

export default class UserInfo extends BaseComponent {
  render() {
    let $profileInfo = document.createElement("div");
    $profileInfo.classList.add("profile-info");
    $profileInfo.innerHTML = `
    <div class="profile-image">
      <div class="profile-wallpaper"><img src="${this.props.wallpaper}" alt="" /></div>
      <div class="profile-avt"><img src="${this.props.image}" alt="" /></div>
    </div>
    <div class="profile-content">
      <div class="profile-edit"><i class="fas fa-pen-square"></i></div>
      <div class="profile-name title">${this.props.name}</div>
      <div class="profile-email">${this.props.email}</div>
      <div class="profile-bio">${this.props.bio}</div>
      <div class="profile-total">
        <div class="profile-favor"><i class="far fa-heart"></i><span class="favor-num">${this.props.rated}</span></div>
        <div class="profile-read"><i class="fab fa-readme"></i><span class="read-num">${this.props.read}</span></div>
        <div class="profile-comment"><i class="far fa-comment-dots"></i><span class="comment-num">${this.props.commented}</span></div>
      </div>
    </div>
    `;
    return $profileInfo;
  }
}
