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
			document.getElementById("days-paragraph").textContent = String(days);

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
						Semangat Kemerdekaan
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="section-text"
					>
						Dalam rangka memperingati{" "}
						<span className="text-red-500">
							Hari Ulang Kemerdekaan Republik Indonesia
						</span>
						, Paguyuban Villa Gardenia kembali menunjukkan semangat kebangsaan
						dengan meriahkan HUT RI sejak tahun 2023 lalu. Berbagai kegiatan
						seperti lomba tradisional, hingga pementasan seni telah sukses
						menciptakan rasa kebersamaan dan kekompakan antar warga. Semarak
						kemerdekaan tidak hanya menjadi ajang hiburan, tetapi juga sarana
						memupuk rasa cinta tanah air di tengah lingkungan perumahan kami.
					</motion.p>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="section-text mt-2"
					>
						Menjelang HUT RI tahun ini yang tinggal{" "}
						<span id="days-paragraph" className="text-red-500"></span> hari
						lagi, kami berkomitmen untuk menggelar perayaan yang lebih meriah
						dan berkesan. Untuk mewujudkan hal tersebut, kami mengajak seluruh
						warga Villa Gardenia dan donatur lainnya untuk turut serta dalam
						bentuk dukungan dan donasi. Dengan gotong royong dan semangat
						persatuan, kami yakin bahwa perayaan
						<span className="text-red-500"> HUT RI ke-80</span> di Villa
						Gardenia akan menjadi momen yang tak terlupakan dan memperkuat
						ikatan bermasyarakat. Mari bersama kita tunjukkan semangat 45 yang
						masih menyala!
					</motion.p>
				</div>
			</section>
			{/* Panitia Section */}
			<CommiteeSection basepath={basepath} />
			{/* Perayaan Section */}
			<section id="perayaan" className="min-h-screen py-20 px-4 bg-gray-100">
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
						Comming Soon
					</motion.p>
				</div>
			</section>
			{/* Kontak Section */}
			<section id="kontak" className="min-h-screen py-20 px-4">
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
						hubungi kami melalui Panitia Humas Paguyuban (M.Taqi Arda, Bu Diana)
						atau langsung mention ke Panitia di WhatsApp Group Paguyuban.
					</motion.p>
				</div>
			</section>
		</main>
	);
}
