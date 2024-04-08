import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export const uploadImage = async (image) => {
    const imageRef = ref(storage, `blogImages/${Date.now().valueOf().toString()}`);
    const uploadResult = await uploadBytes(imageRef, image);
    return getDownloadURL(uploadResult.ref);
}
