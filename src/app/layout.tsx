import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const epilogue = Epilogue({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "Stephanie's Design Porfolio",
	description: "A deep dive into an exceptional designer's profile",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${epilogue.variable}`}>
				{children}
				<ToastContainer position="top-right" />
			</body>
		</html>
	);
}
