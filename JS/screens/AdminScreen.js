import BaseComponent from "../components/BaseComponent.js";
import Table from "../components/Table.js";
import { auth, db, storage } from "../firebase.js";
export default class AdminScreen extends BaseComponent {
  render() {
    let $container = document.querySelector("#dashboard");
    let $profile = document.querySelector("#profile");
    let $player = document.querySelector("#player");
    $container.classList.add("wrapper");
    let $adminSection = document.createElement("section");
    $adminSection.classList.add("admin");
    let $sidebarMenu = document.createElement("div");
    $sidebarMenu.classList.add("sidebar-menu");
    let $sidebarItem1 = document.createElement("div");
    $sidebarItem1.classList.add("sidebar-item");
    $sidebarItem1.innerHTML = `<i class="fas fa-plus-circle sidebar-icon"></i><span class="sidebar-text">Add Story</span>`;
    let $sidebarItem2 = document.createElement("div");
    $sidebarItem2.classList.add("sidebar-item");
    $sidebarItem2.innerHTML = `<i class="fas fa-chart-line sidebar-icon"></i><span class="sidebar-text">Analytics</span>`;
    let $sidebarItem3 = document.createElement("div");
    $sidebarItem3.classList.add("sidebar-item");
    $sidebarItem3.innerHTML = `<i class="fas fa-users sidebar-icon"></i><span class="sidebar-text">Users</span>`;
    let $sidebarItem4 = document.createElement("div");
    $sidebarItem4.classList.add("sidebar-item");
    $sidebarItem4.innerHTML = `<i class="fas fa-book sidebar-icon"></i><span class="sidebar-text">Stories</span>`;
    $sidebarMenu.append($sidebarItem1, $sidebarItem2, $sidebarItem3, $sidebarItem4);

    let $adminLeft = document.createElement("div");
    $adminLeft.classList.add("admin-left");
    // <div class="admin-search">
    //   <input type="text" class="admin-search-input" placeholder="Type your Fairy Tale name here..." />
    //   <button class="admin-search-btn"><i class="fas fa-search"></i></button>
    // </div>;
    let $adminTableWrap = document.createElement("div");
    $adminTableWrap.classList.add("table");
    let $table = document.createElement("table");
    let $thead = document.createElement("thead");
    let $thStory = document.createElement("th");
    $thStory.innerHTML = `Story`;
    let $thAuthor = document.createElement("th");
    $thAuthor.innerHTML = `Author`;
    let $thDesc = document.createElement("th");
    $thDesc.innerHTML = `Desc`;
    let $thCategory = document.createElement("th");
    $thCategory.innerHTML = `Category`;
    let $thLength = document.createElement("th");
    $thLength.innerHTML = `Length`;
    let $thPagesNum = document.createElement("th");
    $thPagesNum.innerHTML = `PagesNum`;
    let $thCreateAt = document.createElement("th");
    $thCreateAt.innerHTML = `CreateAt`;
    let $thReaction = document.createElement("th");
    $thReaction.innerHTML = `Reactions`;
    let $thAction = document.createElement("th");
    $thAction.innerHTML = `Action`;
    $thead.append($thStory, $thAuthor, $thDesc, $thCategory, $thLength, $thPagesNum, $thCreateAt, $thReaction, $thAction);

    let $tbody = document.createElement("tbody");
    db.collection("stories").orderBy("avgRating", "desc").onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        let story1 = {
          id: doc.id,
          ...doc.data(),
        };
        let _tr = new Table({ story: story1 }).render();
        let $delete = _tr.querySelector("#btn-delete");
        $delete.onclick = async (e) => {
          await db.collection("stories").doc(doc.id).delete();
          let users = await db.collection("users").get();
          users.forEach((e) => {
            e.forEach((element) => {
              element.data().storiesRated.forEach((story) => {
                if (story.storyId == doc.id) {
                  element.ref.update({
                    storiesRated: firebase.firestore.FieldValue.arrayRemove({
                      storyId: story.storyId,
                      storyRated: story.storyRated,
                    }),
                  });
                }
              });
            });
            e.forEach((element) => {
              element.data().storiesFavorite.forEach((storyId) => {
                if (storyId == doc.id) {
                  element.ref.update({
                    storiesFavorite: firebase.firestore.FieldValue.arrayRemove(`${storyId}`),
                  });
                }
              });
            });
            e.forEach((element) => {
              element.data().storiesRead.forEach((storyId) => {
                if (storyId == doc.id) {
                  element.ref.update({
                    storiesRead: firebase.firestore.FieldValue.arrayRemove(`${storyId}`),
                  });
                }
              });
            });
            e.forEach((element) => {
              element.data().storiesCommented.forEach((storyId) => {
                if (storyId == doc.id) {
                  element.ref.update({
                    storiesCommented: firebase.firestore.FieldValue.arrayRemove(`${storyId}`),
                  });
                }
              });
            });
          });
          this.setState();
        };
        $tbody.append(_tr);
      });
      $table.append($thead, $tbody);
    });
    $adminTableWrap.append($table);
    $adminLeft.append($adminTableWrap);
    $adminSection.append($sidebarMenu, $adminLeft);
    $profile.innerHTML = "";
    $player.innerHTML = "";
    $container.innerHTML = "";
    $container.append($adminSection);
    return $container;
  }
}
