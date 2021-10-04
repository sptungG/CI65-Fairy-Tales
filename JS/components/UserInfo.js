import BaseComponent from "./BaseComponent.js";
import { auth, db, storage } from "../firebase.js";
export default class UserInfo extends BaseComponent {
  render() {
    // console.log(this.props);
    let $profileInfo = document.createElement("div");
    $profileInfo.classList.add("profile-info");

    let $profileImgWrapper = document.createElement("div");
    $profileImgWrapper.classList.add("profile-image");
    let $profileWallpaper = document.createElement("div");
    $profileWallpaper.classList.add("profile-wallpaper");
    $profileWallpaper.innerHTML = `<img src="${this.props.user.wallpaper}" alt="" />`;
    let $profileAvt = document.createElement("div");
    $profileAvt.classList.add("profile-avt");
    $profileAvt.innerHTML = `<img src="${this.props.user.image ? this.props.user.image : "./DATA/Users/user.png"}" alt="" />`;
    let $profileEdit = document.createElement("div");
    $profileEdit.classList.add("profile-edit");
    $profileEdit.innerHTML = `<i class="profile-edit-icon fas fa-edit"></i>`;
    $profileAvt.append($profileEdit);
    if (auth.currentUser) {
      $profileAvt.onclick = (e) => {
        $profileEdit.classList.toggle("active");
      };
      let $modalProfile = document.querySelector("#modalProfile");
      $profileEdit.onclick = (e) => {
        $modalProfile.style.display = "block";
      };
    }
    $profileImgWrapper.append($profileWallpaper, $profileAvt);
    let $profileContent = document.createElement("div");
    $profileContent.classList.add("profile-content");

    $profileContent.innerHTML = `
      <div class="profile-name title">${this.props.user.name}</div>
      <div class="profile-email">${this.props.user.email}</div>
      <div class="profile-role"><i class="fas fa-user-tag"></i><span>${this.props.user.role ? this.props.user.role : "User"}</span></div>
      <div class="profile-bio">${this.props.user.bio}</div>
      <div class="profile-total">
        <div class="profile-favor"><i class="far fa-star"></i><span class="favor-num">${this.props.user.storiesRated.length}</span></div>
        <div class="profile-read"><i class="fab fa-readme"></i><span class="read-num">${this.props.user.storiesRead.length}</span></div>
        <div class="profile-comment"><i class="far fa-comment-dots"></i><span class="comment-num">${this.props.user.storiesCommented.length}</span></div>
      </div>
    `;
    $profileInfo.append($profileImgWrapper, $profileContent);
    return $profileInfo;
  }
}
