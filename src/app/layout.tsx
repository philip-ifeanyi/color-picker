import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	variable: "--font-kanit",
});

export const metadata: Metadata = {
	title: "Color Picker",
	description: "Lots of colors... weeee",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${kanit.className} bg-[#FBE5FF]`}>{children}</body>
		</html>
	);
}
