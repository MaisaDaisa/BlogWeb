import {
	collection,
	addDoc,
	doc,
	getDocs,
	getDoc,
	query,
	orderBy,
	limit,
	where,
	deleteDoc,
	updateDoc,
} from "firebase/firestore";
import { auth, db } from "./firebase";

const postsCollection = collection(db, "posts");
const likesCollection = collection(db, "likes");

export async function createPost(title, content, imageUrl) {
	if (!auth.currentUser) return;
	if (!title || !content || !imageUrl) return;
	if (title.length > 30 || content.length > 170) {
		alert("Title or content too long");
		return;
	}

	const docRef = await addDoc(postsCollection, {
		title: title,
		content: content,
		imageUrl: imageUrl,
		datePosted: new Date(),
		totalLikes: 0,
		author: {
			name: auth.currentUser.displayName,
			id: auth.currentUser.uid,
			profileImg: auth.currentUser.photoURL,
		},
	});
}

export async function getPosts() {
  try {
    const q = query(postsCollection, orderBy("datePosted", "desc"), limit(10));
    const queryData = await getDocs(q);
    return queryData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return an empty array if there's an error
  }
}

export async function getUserPosts() {
	try {
	  const q = query(
		postsCollection,
		where("author.id", "==", auth.currentUser.uid),
		orderBy("datePosted", "desc")
	  );
	  const queryData = await getDocs(q);
	  return queryData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	} catch (error) {
	  console.error("Error fetching user posts:", error);
	  return [];
	}
  }

export async function deletePost(postId) {
	if (!auth.currentUser) return;
	if (!postId) return;

	const postRef = doc(postsCollection, postId);
	const postSnap = await getDoc(postRef);
	const postData = postSnap.data();

	if (postData.author.id === auth.currentUser.uid) {
		await deleteDoc(postRef);
	}
}



export async function likeFunc(postId, isLiked) {
	if (!auth.currentUser) return;
	if (!postId) return;
  
	const postRef = doc(postsCollection, postId);
	const postSnap = await getDoc(postRef);
	const postData = postSnap.data();
	const totalLikes = postData.totalLikes || 0;
  
	if (!isLiked) {
	  await addDoc(likesCollection, {
		UserId: auth.currentUser.uid,
		likedPost: postId,
	  });
	  await updateDoc(postRef, { totalLikes: totalLikes + 1 });
	} else {
	  const queryRef = query(
		likesCollection,
		where("UserId", "==", auth.currentUser.uid),
		where("likedPost", "==", postId)
	  );
	  const querySnapshot = await getDocs(queryRef);
	  if (!querySnapshot.empty) {
		const docId = querySnapshot.docs[0].id;
		await deleteDoc(doc(likesCollection, docId));
		await updateDoc(postRef, { totalLikes: totalLikes - 1 });
	  }
	}
  }

export async function checkLiked(postId) {
	if (!auth.currentUser) return false;
  
	const queryRef = query(
	  likesCollection,
	  where("likedPost", '==', postId), where("UserId", '==', auth.currentUser.uid)
	);
	
	const querySnapshot = await getDocs(queryRef);
	return !querySnapshot.empty;
  }