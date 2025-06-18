import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
});

export const metadata = {
	title: "HUT RI ke-80",
	description: "Website Resmi Perayaan Hari Kemerdekaan",
};

export default function RootLayout({ children }) {
	return (
		<html lang="id">
			<body
				className={`${poppins.className} min-h-screen flex flex-col bg-white text-black`}
			>
				{children}
			</body>
		</html>
	);
}
