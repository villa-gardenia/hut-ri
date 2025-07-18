// src/components/NavBar.js
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NavBar() {
	const navItems = [
		{ name: "Beranda", href: "" },
		{ name: "Tentang", href: "/#tentang" },
		{ name: "Panitia", href: "/#panitia" },
		{ name: "Event", href: "/#event" },
		{ name: "Donasi", href: "/#donasi" },
		{ name: "Sponsor", href: "/#sponsor" },
		{ name: "Kontak", href: "/#kontak" },
	];

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
								<Link href={`/${item.href}`} className="nav-link-item">
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
