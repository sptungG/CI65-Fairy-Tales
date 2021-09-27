export async function register(name, email, password) {
  /*
    Xử lí bất đồng bộ: chuyển đoạn code chạy bất đồng bộ (song song) => về đồng bộ (tuần tự)
    3 cách:
    * callback: cũ, callback hell.
    ** promise: hiện nay
    *** async/ await: phát triển từ promise, code mạch lạc hơn.
    Chỗ nào có promise (dạng giống promise) => dùng await; function nào có await => khai báo function phải có async
   */

  try {
    let response = await auth.createUserWithEmailAndPassword(email, password); // xảy ra hiện tượng bất đồng bộ
    // trạng thái người dùng thay đổi
    await auth.currentUser.updateProfile({
      displayName: name,
    });

    await auth.currentUser.sendEmailVerification();

    await auth.signOut();

    alert("Sign up successfully. You must verify your email before continue");
  } catch (error) {
    alert(error.message);
  }
}

export async function login(email, password) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    console.log("Sign in successfully");
  } catch (error) {
    alert(error.message);
  }
}

export async function getCurrentUser() {}

export function updateUser() {}

export function logout() {}

export function authStateChanged(callback) {
  // chạy function khi trạng thái của người dùng thay đổi: đăng kí, đăng nhập, đăng xuất
  auth.onAuthStateChanged((user) => {
    console.log(user);
    if (user != null && user.emailVerified) {
      router.navigate("/dashboard");
    } else {
      router.navigate("/login");
    }
  });
}
