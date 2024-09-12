"use client";

import Image from "next/image";
import CustomButton from "./Button";
import React from "react";

interface CardProps {
	color: string;
	imageSrc: string;
	details: string;
	code: number;
}

const ColorCard: React.FC<CardProps> = ({ color, imageSrc, details, code }) => {
	const handleClick = () => {
		console.log("Button Clicked");
	};

	return (
		<div className="rounded-2xl bg-white w-fit">
			<Image
				src={imageSrc}
				alt={color}
				height={130}
				width={370}
				className="rounded-2xl"
			/>
			<div className="p-5 text-[#4F5E6E]">
				<div className="flex items-center justify-between border-b border-b-[#550066] pb-[10px] mb-[10px]">
					<div>
						<h3 className="font-bold text-[14px] text-black leading-5 pb-2">
							Color {color}
						</h3>
						<p className="font-semibold text-[8px]">{details}</p>
					</div>
					<CustomButton onClick={handleClick} variant="secondary" size="small">
						View Color
					</CustomButton>
				</div>
				<div className="space-y-3">
					<div className="flex items-center gap-2 text-[#550066] text-[10px] underline font-semibold">
						<Image src={"/address.svg"} alt={color} height={14} width={14} />
						<p>Read about color {color.toLowerCase()}</p>
					</div>
					<div className="flex items-center gap-2 text-[10px] font-semibold">
						<Image src={"/map.svg"} alt={color} height={14} width={14} />
						<p>
							This is {color.toLowerCase()} {code}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ColorCard;
