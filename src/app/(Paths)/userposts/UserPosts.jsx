import React from "react";

import { getUserPosts } from "@/lib/postManagement";
import PostDisplay1 from "@/app/Components/PostDisplay1";

const 	UserPosts = async () => {
	const posts = await getUserPosts();
	console.log(posts);
	return (
		<div className="flex flex-row justify-center w-full mt-20">
		<div className="flex flex-row flex-wrap gap-10 items-center justify-start w-3/4">
			{posts.length > 0 ? (
				posts.map((post, index) => {
					const timestampDatePosted = post.datePosted
						? post.datePosted.seconds * 1000
						: 0;
					return (
						<PostDisplay1
							key={index}
							title={post.title}
							content={post.content}
							imageUrl={post.imageUrl}
							postId={post.id}
							likesProp={post.totalLikes}
							profileName={post.author.name}
							profileImage={post.author.profileImg}
							datePosted={timestampDatePosted}
						/>
					);
				})
			) : (
				<p className="justify-items-center self-center">No posts found</p>
			)}
		</div>
		</div>
	);
};

export default UserPosts;
