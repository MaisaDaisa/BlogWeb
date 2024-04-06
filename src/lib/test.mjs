import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

async function getPosts() {
    const postsCollection = collection(db, "posts");
    const snapshot = await getDocs(postsCollection);
    console.log(snapshot);
}