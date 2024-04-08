"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { checkLiked } from "@/lib/postManagement";
import { likeFunc } from "@/lib/postManagement";
import defaultProfile from "../../../public/defaultProfile.jpg";
import { formatSecondsToDate } from "@/lib/Utility/time";

const PostDisplay1 = ({
	title,
	content,
	imageUrl,
	postId,
	likesProp,
	profileName,
	profileImage,
	datePosted,
}) => {
	const [likes, setLikes] = React.useState(likesProp || 0);
	const [isLiked, setIsLiked] = React.useState(false);

	const handleLike = async () => {
		likeFunc(postId, isLiked);
		setIsLiked(!isLiked);
		setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
	};

	useEffect(() => {
		checkLiked(postId).then((res) => {
			setIsLiked(res);
		});
	}, []);

	return (
		<div className="flex flex-col items-center gap-2 p-3 border-2 w-1/4 h-[550px] border-primary-green rounded-lg">
			<div className="flex items-center gap-2 self-start">
				<Image src={profileImage ? profileImage : defaultProfile } width={30} height={30} alt="ProfileImage" className="rounded-full" />
				<div className="flex flex-col">
					<p className="text-sm font-semibold">{profileName}</p>
					<p className="text-xs">{formatSecondsToDate(datePosted)}</p>
				</div>
			</div>
			<div className="flex self-start flex-col justify-between">
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-semibold break-all">{title}</h1>
					<p className="text-sm break-all">{content}</p>
				</div>
			</div>
			<div className="flex flex-col h-full justify-end">
				<Image
					src={imageUrl}
					loading="lazy"
					width={300}
					height={300}
					alt="PostImage"
				/>
				<div className="h-8 self-end flex flex-row items-center gap-2">
					<FontAwesomeIcon
						icon={faHeart}
						size="lg"
						style={{ color: isLiked === true ? "#ff432e" : "#000" }}
						className="cursor-pointer"
						onClick={handleLike}
					/>
					<p>{likes}</p>
				</div>
			</div>
		</div>
	);
};

export default PostDisplay1;
