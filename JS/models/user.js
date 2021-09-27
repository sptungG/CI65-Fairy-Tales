let router = new Navigo(null, true, "#");
export async function register(name, email, password) {
  try {
    let response = await auth.createUserWithEmailAndPassword(email, password);
    
    await auth.currentUser.updateProfile({
      displayName: name,
    });

    // await auth.currentUser.sendEmailVerification();

    await auth.signOut();

    alert("Sign up successfully.");
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
