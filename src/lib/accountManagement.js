import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateCurrentUser, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { saveToken } from "./dealWithToken";



export async function createAccount(email, password, username) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, {
            displayName: username,
        });
        saveToken(userCredential._tokenResponse);
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle error
        console.error(errorMessage);
    }
}



export async function Login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            saveToken(userCredential._tokenResponse);
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}


