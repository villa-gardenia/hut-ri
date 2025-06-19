"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CommiteeSection from "../components/Commitee";
import NavBar from "../components/NavBar";

const basepath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function HomePage() {
	useEffect(() => {
		// Countdown logic
		const targetDate = new Date("2025-08-17T00:00:00").getTime();

		const countdownInterval = setInterval(() => {
			const now = new Date().getTime();
			const timeRemaining = targetDate - now;

			// Calculate days remaining
			const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

			// Display the countdown in the DOM
			document.getElementById("days").textContent = String(days);

			// Stop the countdown when the target date is reached
			if (timeRemaining < 0) {
				clearInterval(countdownInterval);
				document.getElementById("countdown").innerHTML =
					"<span class='text-white-500'>SELAMAT HARI KEMERDEKAAN!</span>";
			}
		}, 1000);

		// Cleanup interval on component unmount
		return () => clearInterval(countdownInterval);
	}, []);

	return (
		<main className="w-full">
			<NavBar />
			{/* Hero Section */}
			<section className="h-screen relative overflow-hidden flex items-center justify-center">
				<motion.div initial={{ y: 0 }} className="absolute inset-0">
					<Image
						src={`${basepath}/assets/bg-hero.jpg`}
						alt="HUT RI ke-80"
						fill
						className="object-cover"
						priority
					/>
					<div className="hero-overlay" />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="relative z-10 text-center text-white px-4"
				>
					<Image
						src={`${basepath}/assets/logo.jpg`}
						alt="logo-villa-gardenia"
						priority
						className="mx-auto rounded-full hero-logo"
						width={400}
						height={400}
					/>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1 }}
						id="countdown"
						className="mt-8 text-2xl md:text-3xl font-bold text-white-500"
					>
						<span id="days"></span> Hari Menuju Kemerdekaan
						<br /> Republik Indonesia Ke-80
					</motion.div>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.5 }}
						id="countdown"
						className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
					>
						Merdeka dan Maju Bersama di Bumi Pertiwi
					</motion.p>
					<motion.a
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 2.5 }}
						href="#tentang"
						className="btn-primary mt-8"
					>
						Mulai Jelajah
					</motion.a>
				</motion.div>
			</section>
			{/* Tentang Section */}
			<section id="tentang" className="min-h-screen py-20 px-4 bg-gray-100">
				<div className="container mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="section-title"
					>
						Sejarah Kemerdekaan
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="section-text"
					>
						Pada tanggal 17 Agustus 1945, Soekarno-Hatta memproklamasikan
						kemerdekaan Indonesia. Setelah sekian lama dijajah oleh bangsa
						asing, akhirnya Indonesia berdiri sebagai negara merdeka.
					</motion.p>
				</div>
			</section>
			{/* Panitia Section */}
			<CommiteeSection basepath={basepath} />
			{/* Perayaan Section */}
			<section id="perayaan" className="min-h-screen py-20 px-4">
				<div className="container mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="section-title"
					>
						Perayaan Hari Ini
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="section-text"
					>
						Di seluruh penjuru nusantara, masyarakat memperingati HUT RI dengan
						upacara bendera, pawai, hingga berbagai perlombaan tradisional
						seperti panjat pinang dan tarik tambang.
					</motion.p>
				</div>
			</section>
			{/* Kontak Section */}
			<section id="kontak" className="min-h-screen py-20 px-4 bg-gray-100">
				<div className="container mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="section-title"
					>
						Hubungi Kami
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="section-text"
					>
						Ingin ikut serta dalam perayaan atau memiliki pertanyaan? Silakan
						hubungi kami melalui email atau media sosial resmi.
					</motion.p>
				</div>
			</section>
		</main>
	);
}
