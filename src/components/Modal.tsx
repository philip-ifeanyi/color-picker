"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ModalDrawerProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const ModalDrawer: React.FC<ModalDrawerProps> = ({
	isOpen,
	onClose,
	children,
}) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			{/* Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden -top-2"
					onClick={onClose}
				></div>
			)}

			<div
				className={`
          fixed z-50 bg-white shadow-lg transition-all duration-300 ease-in-out rounded-t-[2rem] lg:rounded-2xl px-4
          lg:left-5 2xl:left-10 lg:top-7 lg:bottom-0 lg:w-1/3 lg:max-w-[400px] lg:relative bottom-0 left-0 h-3/5 md:h-[45%] lg:h-[90%] 2xl:h-[95%] w-screen ${
						isOpen ? "translate-y-0" : "translate-y-full hidden"
					}
          ${isOpen ? "lg:translate-x-0" : "lg:-translate-x-full lg:hidden"}
        `}
			>
				<header className="relative py-6 px-4">
					<Image
						src="/close.svg"
						alt="close"
						width={40}
						height={40}
						className="absolute right-0 xl:right-4 top-5 hidden lg:block cursor-pointer"
						onClick={onClose}
					/>
					<div className="flex flex-col items-center justify-center gap-3">
						<Image
							src="/line.svg"
							alt="line"
							width={40}
							height={40}
							className="lg:hidden"
							onClick={onClose}
						/>
						<h3 className="text-[#0B0D0F] text-xl font-bold">Sort By</h3>
					</div>
				</header>
				<div className=" h-full overflow-y-scroll">{children}</div>
			</div>
		</>
	);
};

export default ModalDrawer;
