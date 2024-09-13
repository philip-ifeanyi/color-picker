"use client";

import React from "react";
import ResponsiveLogo from "./ResponsiveLogo";
import SearchComponent from "./SearchComponent";
import CustomButton from "./Button";
import Image from "next/image";

interface HeaderProps {
	openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
	const handleSearch = (query: string) => {
		console.log("Searching for:", query);
	};

	const handleClick = () => {
		console.log("Button Clicked");
	};

	return (
		<header className="space-y-2">
			<div className="bg-white w-full h-[60px] rounded-2xl flex items-center p-4 gap-4 md:w-2/3">
				<ResponsiveLogo
					mobileSrc="/Logo.svg"
					mobileHeight={32}
					mobileWidth={32}
					desktopSrc="/Logobig.svg"
					desktopHeight={42}
					desktopWidth={126}
					altText="logo"
				/>
				<SearchComponent
					onSearch={handleSearch}
					placeholder="SEARCH BUSINESS OR SERVICE"
				/>
			</div>
			<div className="space-x-1 flex">
				<CustomButton
					variant="primary"
					onClick={openModal}
					className="flex items-center justify-center gap-1"
				>
					<p>Sort By</p>
					<Image src={"/up.svg"} alt="up" width={14} height={14} />
				</CustomButton>
				<CustomButton
					variant="white"
					onClick={handleClick}
					className="flex items-center justify-center gap-1"
				>
					<p>Light</p>
				</CustomButton>
				<CustomButton
					variant="white"
					onClick={handleClick}
					className="flex items-center justify-center gap-1"
				>
					<p>Dark</p>
				</CustomButton>
			</div>
		</header>
	);
};

export default Header;
