'use client';
import React, { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import defaultProfile from "../../../../public/defaultProfile.jpg";
import Image from "next/image";

const ProfilePicture = () => {
  const [profileImage, setProfileImage] = useState(defaultProfile);
  const [profileName, setProfileName] = useState("User");


  return (
    <>
      <Image
        src={profileImage}
        width={50}
        height={50}
        alt="ProfileImage"
        className="rounded-full"
      />
    </>
  );
};

export default ProfilePicture;
