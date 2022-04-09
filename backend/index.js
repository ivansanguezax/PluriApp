// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword} from 'firebase'
uth// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQyMsxJZJW541BNiIO8RetAu0nEFlnnpg",
  authDomain: "pluriapp.firebaseapp.com",
  projectId: "pluriapp",
  storageBucket: "pluriapp.appspot.com",
  messagingSenderId: "719945723001",
  appId: "1:719945723001:web:cd7de5d870060c675438a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

//log in
const loginForm = document.querySelector('.login');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, loginForm.email.value, loginForm.password.value)
    .then((credential) =>{
        // console.log("User logged in: ", credential.user);
        window.location.href = "./user.html";
        loginForm.reset();
    })
    .catch((error) => {
        console.error(error.message);
});
});

//log out
const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
          window.location.href ="login.html";
            // console.log('logged out');
        })
        .catch((error) => console.error(error.message));
});

// subscribing to auth changes
const unsubAuth = onAuthStateChanged(auth, (user) => {
  console.log('user status changed: ', user)
})