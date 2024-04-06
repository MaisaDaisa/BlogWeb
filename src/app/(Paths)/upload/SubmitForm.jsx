'use client'
import {createPost} from '@/lib/blogManagement'

const submitForm = () => {

    async function handleSubmit(e) {
        e.preventDefault();
        const title = document.getElementById('title-input').value;
        const content = document.getElementById('content-input').value;
        await createPost(title, content);
        alert("Post Created!");
    }

	return (
		<form className="w-1/3 bg-slate-300 rounded-xl p-4 flex flex-col justify-center items-center gap-2">
			<h1>Create Post</h1>
			<div className="flex flex-col w-5/6">
				<label>Title:</label>
				<input type="text" placeholder="Title..." id='title-input'/>
			</div>
			<div className="flex flex-col w-5/6">
				<label>Content:</label>
				<textarea placeholder="Content..." id='content-input'></textarea>
			</div>
			<button
				type="submit"
				onClick={(e) => handleSubmit(e)}
				className="p-4 py-2 bg-slate-800 rounded-3xl text-green-600 w-1/4">
				Submit
			</button>
		</form>
	);
};

export default submitForm;
