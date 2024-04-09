"use client";
import React, { useState } from "react";
import defaultProfile from "../../../../public/defaultProfile.jpg";
import Image from "next/image";
import { MenuList, MenuItem } from "@mui/material/";
import { logout } from "@/lib/accountManagement";
import { useRouter } from "next/navigation";

const ProfilePicture = () => {
	const [profileImage, setProfileImage] = useState(defaultProfile);
	const [profileName, setProfileName] = useState("User");
	const [showMenu, setShowMenu] = useState(false);

  const navigation = useRouter();

	const handleLogout = () => {
		try {
			logout();
      navigation.push("/login");
		} catch (error) {
			console.log("error logging out");
		}
	};

	return (
		<div className="flex flex-col items-center gap-2 relative">
			<Image
				src={profileImage}
				width={50}
				height={50}
				alt="ProfileImage"
				className="rounded-full cursor-pointer"
				onClick={() => setShowMenu(!showMenu)}
			/>
			<MenuList
				className={`absolute top-16 bg-white shadow-lg rounded-lg ${showMenu ? "" : "hidden"}`}>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem onClick={handleLogout}>Logout</MenuItem>
			</MenuList>
		</div>
	);
};

export default ProfilePicture;
