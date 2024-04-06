import { collection, addDoc, doc, getDocs, query, orderBy, limit, Query } from "firebase/firestore";
import { auth, db } from "./firebase";

const postsCollection = collection(db, "posts");

export async function createPost(title, content) {
	const docRef = await addDoc(postsCollection, {
		title: title,
		content: content,
		datePosted: new Date(),
		author: {
			name: auth.currentUser.displayName,
			id: auth.currentUser.uid,
		},
	});
}

export async function getPosts() {
	const q = query(postsCollection, orderBy("datePosted", "desc"), limit(10));
	const queryData = await getDocs(q);
	return queryData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	
	
}
