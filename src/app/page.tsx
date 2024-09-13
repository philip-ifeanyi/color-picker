"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import ColorList from "@/components/ColorList";
import ModalDrawer from "@/components/Modal";
import CustomRadio from "@/components/CustomRadio";
import Image from "next/image";
import { colors } from "@/libs/data";

export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(event.target.value);
	};

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<div className="flex flex-row-reverse h-screen overflow-hidden">
			<main className="flex-grow p-[30px] md:p-10 lg:p-8 overflow-auto">
				<div className="max-w-7xl mx-auto h-full flex flex-col">
					<Header openModal={openModal} />
					<div className="relative flex-grow flex items-center justify-center my-6">
						<Image src="/seek.svg" alt="seek" width={80} height={80} />
						<Image
							src="/location.svg"
							alt="location"
							width={60}
							height={60}
							className="absolute right-0 2xl:right-20 bottom-0"
						/>
					</div>
					<ColorList />
				</div>
			</main>

			<ModalDrawer isOpen={isModalOpen} onClose={closeModal}>
				<div className="space-y-3">
					{colors.map((color, index) => (
						<CustomRadio
							key={index}
							id={color.color.toLowerCase()}
							name="radioGroup"
							value={color.color.toLowerCase()}
							label={color.color}
							checked={selectedValue === color.color.toLowerCase()}
							onChange={handleChange}
						/>
					))}
				</div>
			</ModalDrawer>
		</div>
	);
}
