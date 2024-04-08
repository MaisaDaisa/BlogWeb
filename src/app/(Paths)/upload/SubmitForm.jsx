"use client";
import { createPost } from "@/lib/postManagement";

import { TextField } from "@mui/material";
import ImageCropper from "../../Components/ImageCropper/ImageCropper";
import { useEffect, useState } from "react";
import { Alert } from "@mui/material";
import { uploadImage } from "@/lib/firebaseStorage";

function submitForm() {
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [titleCounter, setTitleCounter] = useState(0);
  const [contentCounter, setContentCounter] = useState(0);

  useEffect(() => {
    if (image) {
      setErrorMessage("Image Cropped successfully");
      setSeverity("success");
      setDisplayError(true);
      setTimeout(() => {
        setDisplayError(false);
        console.log(image);
      }, 3000);
    }
  }, [image]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!image) {
      setSeverity("error");
      setErrorMessage("Please Crop an image");
      setDisplayError(true);
      return;
    }

    const titleInput = document.getElementById("title-input");
    const contentInput = document.getElementById("content-input");

    const title = titleInput.value.trim().substring(0, 30); // Limit title to 30 characters
    const content = contentInput.value.trim().substring(0, 170); // Limit content to 170 characters

    if (!title) {
      setSeverity("error");
      setErrorMessage("Please enter a title");
      setDisplayError(true);
      return;
    }
    if (!content) {
      setSeverity("error");
      setErrorMessage("Please enter content");
      setDisplayError(true);
      return;
    }

    const imageURL = await uploadImage(image);
    await createPost(title, content, imageURL);
    alert("Post Created!");
  }

  return (
    <form className="w-full rounded-xl h-full flex flex-col justify-center items-center gap-4">
      <div className="flex flex-row gap-10 w-full justify-center items-center">
        <div className="flex flex-col items-start gap-4 w-1/3">
          <h1>Create Post</h1>
		  <div className="flex flex-row items-center gap-2 w-full">
          <TextField
            id="title-input"
            label="Title"
            variant="outlined"
            inputProps={{ maxLength: 30 }} 
			onChange={(e) => {setTitleCounter(e.target.value.length)}}
			className="w-full"
          />
		  <p className="w-16">{titleCounter}/30</p>
		  </div>
		  <div className="flex flex-row items-center gap-2 w-full">
          <TextField
            id="content-input"
            label="Content"
            multiline
            rows={5}
            variant="outlined"
            inputProps={{ maxLength: 170 }}
			onChange={(e) => {setContentCounter(e.target.value.length)}}
			className="w-full"
          />
		   <p className="w-16">{contentCounter}/170</p>
		  </div>
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="p-4 self-center mt-10 w-1/3 py-2 bg-slate-800 rounded-3xl text-green-600"
          >
            Submit
          </button>
          {
            <Alert
              severity={severity}
              className={`mt-5 ${displayError ? "" : "invisible"} self-center`}
            >
              {errorMessage}
            </Alert>
          }
        </div>
        <div className="flex flex-col justify-center gap-3 items-center">
          <ImageCropper updateParentImage={setImage} />
        </div>
      </div>
    </form>
  );
}

export default submitForm;
