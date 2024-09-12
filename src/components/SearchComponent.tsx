"use client";

import React, { useState } from "react";
import Image from "next/image";

interface SearchComponentProps {
	placeholder?: string;
	onSearch: (query: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
	placeholder = "Search...",
	onSearch,
}) => {
	const [query, setQuery] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSearch(query);
	};

	return (
		<form onSubmit={handleSubmit} className="relative w-full">
			<div className="relative">
				<div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
					<Image
						src={"/search.svg"}
						height={14}
						width={14}
						alt="search"
					/>
				</div>
				<input
					type="text"
					className="block w-full pl-12 pr-3 py-2 rounded-md leading-5 bg-[#F5F3F7] text-[#8898AA] placeholder-[#8898AA] focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500 text-xs text-ellipsis h-8"
					placeholder={placeholder}
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>
		</form>
	);
};

export default SearchComponent;
