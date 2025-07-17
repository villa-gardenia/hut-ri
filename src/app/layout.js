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

const basepath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function RootLayout({ children }) {
	return (
		<html lang="id">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="theme-color" content="#ffffff" />
				<link rel="icon" href={`${basepath}/assets/favicon.ico`} />
				<meta name="description" content={metadata.description} />
				<meta
					name="keywords"
					content="HUT RI, Kemerdekaan, Indonesia, 80 Tahun"
				/>
				<meta name="author" content="HUT RI ke-80 Team" />
			</head>
			<body
				className={`${poppins.className} min-h-screen flex flex-col bg-white text-black`}
			>
				{children}
			</body>
		</html>
	);
}
