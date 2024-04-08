import React from "react";

import { getPosts } from "@/lib/postManagement";
import PostDisplay1 from "@/app/Components/PostDisplay1";

const HomePage = async () => {
	const posts = await getPosts();
	return (
		<div className="flex flex-row gap-10 items-center justify-center">
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
				<p>No posts found</p>
			)}
		</div>
	);
};

export default HomePage;
