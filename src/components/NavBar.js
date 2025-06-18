// src/components/NavBar.js
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
	{ name: "Beranda", href: "/" },
	{ name: "Tentang", href: "/#tentang" },
	{ name: "Panitia", href: "/#panitia" },
	{ name: "Perayaan", href: "/#perayaan" },
	{ name: "Kontak", href: "/#kontak" },
];

export default function NavBar({ basepath }) {
	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", stiffness: 60 }}
			className="navbar font-poppins"
		>
			<div className="nav-container">
				{/* Menu */}
				<nav>
					<ul className="nav-link">
						{navItems.map((item) => (
							<motion.li
								key={item.name}
								whileHover={{ color: "#e63946" }}
								className="group"
							>
								<Link
									href={`${basepath}${item.href}`}
									className="nav-link-item"
								>
									{item.name}
								</Link>
							</motion.li>
						))}
					</ul>
				</nav>
			</div>
		</motion.header>
	);
}
