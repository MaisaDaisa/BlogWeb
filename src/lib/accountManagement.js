import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateCurrentUser, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { saveToken } from "./dealWithToken";



export async function createAccount(email, password, username) {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                saveToken(userCredential._tokenResponse);
                return updateProfile(auth.currentUser, {
                    displayName: username
                });
            })
            .then(() => {
                resolve();
            })
            .catch((error) => {
                reject(error);
            });
    });
}



export async function Login(email, password) {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                saveToken(userCredential._tokenResponse);
                resolve();
            })
            .catch((error) => {
                reject(error);
            });
    });
}




