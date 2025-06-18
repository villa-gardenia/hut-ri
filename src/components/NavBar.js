import Link from "next/link";
import { motion } from "framer-motion";

// Daftar menu navigasi
const navItems = [
	{ name: "Beranda", href: "/" },
	{ name: "Sejarah", href: "/#sejarah" },
	{ name: "Perayaan", href: "/#perayaan" },
	{ name: "Budaya", href: "/#budaya" },
	{ name: "Kemerdekaan Kini", href: "/#kemerdekaan-kini" },
	{ name: "Kontak", href: "/#kontak" },
];

// Framer Motion Variants untuk animasi
const navContainerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const navItemVariants = {
	hidden: { y: -20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 100,
		},
	},
};

export default function Navbar() {
	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
		>
			<nav className="container mx-auto px-4 py-4 flex justify-between items-center">
				<motion.h1
					className="text-xl font-bold text-red-600"
					whileHover={{ scale: 1.1 }}
				>
					HUT RI 80
				</motion.h1>

				<motion.ul
					className="flex gap-6"
					variants={navContainerVariants}
					initial="hidden"
					animate="visible"
				>
					{navItems.map((item) => (
						<motion.li
							key={item.name}
							variants={navItemVariants}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href={item.href}
								className="text-gray-800 hover:text-red-600 transition-colors duration-300"
							>
								{item.name}
							</Link>
						</motion.li>
					))}
				</motion.ul>
			</nav>
		</motion.header>
	);
}
