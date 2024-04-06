import React from "react";
import Image from "next/image";
import commSchool from "@/../public/commSchool.png";
import Link from "next/link";

const Header = () => {
	return (
		<header className="flex justify-center py-4 w-auto">
			<div className="flex flex-row justify-between items-center w-2/3">
				<Image src={commSchool} alt="logo" width={75} height={75} />
				<nav>
					<ul className="flex flex-row gap-10">
					<li>
							<Link href={'/'}>Home</Link>
						</li>
						<li>
							<Link href={'/profile'}>Your Blogs</Link>
						</li>
						<li>
							<Link href={'/upload'}>Upload Blogs</Link>
						</li>
					</ul>
				</nav>
				<div>
					<div>
						<input
							type="text"
							placeholder="search"
							className="p-4 py-2 border-gray-200 border-2 rounded-lg"
						/>
					</div>
					<img src="PFP" alt="" />
				</div>
			</div>
		</header>
	);
};

export default Header;
