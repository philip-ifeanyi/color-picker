"use client";

import Header from "@/components/Header";
import ColorCard from "@/components/ColorCard";
import Swiper from "@/components/Swiper";
import Image from "next/image";
import { colors } from "@/libs/data";

export default function Home() {
	const cards = colors.map((color, index) => (
		<ColorCard
			key={index}
			color={color.color}
			code={color.code}
			imageSrc={color.imageSrc}
			details={color.details}
		/>
	));

	return (
		<main className="p-[30px] h-dvh md:p-10 lg:p-8">
			<Header />
			<div className="relative w-full h-1/2 md:h-[60%] lg:h-3/5 2xl:h-3/5 mt-6 flex items-center justify-center">
				<Image src={"/seek.svg"} alt="seek" width={80} height={80} />
				<Image
					src={"/location.svg"}
					alt="location"
					width={60}
					height={60}
					className="absolute right-0 bottom-0"
				/>
			</div>
			<div className="relative mt-6">
				<h2 className="text-black font-bold absolute -top-12 left-0 text-xl">
					My Color List
				</h2>
				<Swiper cards={cards} />
			</div>
		</main>
	);
}
