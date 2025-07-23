"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CommiteeSection from "../components/Commitee";
import NavBar from "../components/NavBar";
import Donation from "../components/Donation";
import YouthSection from "../components/Youth";
import Events from "../components/Events";

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
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1 }}
						id="countdown"
						className="mt-8 text-2xl md:text-3xl font-bold text-white-500"
					>
						<span id="days"></span> Hari Menuju HUT RI ke
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.5 }}
					>
						<Image
							src={`${basepath}/assets/hut-ri-80-logo-white.png`}
							alt="logo-villa-gardenia"
							priority
							className="mx-auto rounded-full hero-logo"
							width={400}
							height={400}
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 2 }}
					>
						<Image
							src={`${basepath}/assets/logo.jpg`}
							alt="logo-villa-gardenia"
							priority
							className="mx-auto rounded-full hero-logo"
							width={400}
							height={400}
						/>
					</motion.div>
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
			<section id="tentang" className="min-h-screen py-20 px-4 bg-white-100">
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
				{/* Youth Part */}
				<YouthSection basepath={basepath} />
			</section>
			{/* Commitee Section */}
			<CommiteeSection basepath={basepath} />
			{/* Events Section */}
			<Events basepath={basepath} />
			{/* Total Donasi Section */}
			<section id="donasi" className="min-h-screen py-20 px-4 bg-gray-100">
				<div className="container mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="section-title"
					>
						Total Donasi Hari Ini
					</motion.h2>
					<Donation basepath={basepath} />
					<div className="text-center p-3 mt-2 mb-2 text-sm">
						<a
							href="https://villa-gardenia.github.io/hut-ri/donation-detail"
							className="text-blue-400 bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors duration-300"
							target="_blank"
						>
							Lihat Detail Donasi ➡
						</a>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="section-text"
					>
						Dukung perayaan HUT RI ke-80 di Villa Gardenia dengan berdonasi
						melalui:
						<div className="donation-text">
							<br />
							<span className="text-bold text-red-500">
								Mandiri 1370023131812
							</span>
							<br />
							<span className="text-bold text-red-500">
								BRI 033501062740506
							</span>
							<br />
							<span className="text-bold text-red-500">BCA 1221282898</span>
							<br />
							a.n.{" "}
							<span className="text-red-500 mb-10">Helmy Nurcahyo Wibowo</span>
							<div className="p-5">
								Mohon sertakan kode unik{" "}
								<span className="text-red-500">178</span>
								<br /> di tiga digit terakhir nominal
								<br />
								Contoh: <span className="font-bold text-red-500">300.178</span>
							</div>
							Setelah transfer, harap konfirmasi langsung ke Finance Director
							(Helmy Wibowo),{" "}
							<div className="text-center p-3 mt-5 mb-10 text-sm">
								<a
									href="https://wa.me/6281239176009?text=Halo%20Pak%20Helmy,%20saya%20ingin%20konfirmasi%20donasi%20HUT-RI%20ke-80%20Villa%20Gardenia"
									className="font-bold bg-green-200 p-3 rounded-lg hover:bg-green-400 transition-colors duration-300"
									target="_blank"
								>
									📱Klik Untuk Konfirmasi via WhatsApp
								</a>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="section-text mt-4 text-red-500"
					>
						Donasi Anda sangat berarti untuk kesuksesan perayaan{" "}
						<b className="text-red-500">HUT RI ke-80 </b>
						di Villa Gardenia. Setiap kontribusi, besar atau kecil, akan
						membantu mewujudkan acara yang meriah dan berkesan bagi seluruh
						warga.
					</motion.div>
				</div>
			</section>
			{/* Sponsor Section */}
			<section id="sponsor" className="min-h-screen py-20 px-4 bg-white-100">
				<div className="container mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="section-title"
					>
						Sponsorship
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="section-text paragraph-with-line"
					>
						Kami membuka kesempatan bagi warga maupun pihak luar yang ingin
						berpartisipasi sebagai sponsor dalam perayaan ini. Dukungan Anda
						akan membantu menyukseskan acara HUT RI ke 80 di Villa Gardenia.
					</motion.p>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="section-text paragraph-with-line"
					>
						Untuk mengetahui detail paket sponsorship dan manfaat yang akan Anda
						dapatkan, silakan unduh proposal mitra atau dengan menghubungi kami
						melalui Kordinator Sponsorship (Arie Kustanto).
					</motion.p>
					<div className="text-center p-3 mt-5 mb-5 text-sm text-gray-600">
						<a
							href="https://drive.google.com/file/d/1HRl3EafVu7weW3dKiKOT-q0qXRkVKMb0/view?usp=sharing"
							className="text-blue-400 font-semibold bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors duration-300"
							target="_blank"
						>
							📑 Unduh Proposal Mitra
						</a>
					</div>
					{/* -OR- text on the middle with line */}
					<div className="text-center">- atau -</div>
					<div className="text-center p-3 mt-5 mb-10 text-sm text-gray-600">
						<a
							href="https://wa.me/628112643642?text=Halo%20Pak%20Arie,%20saya%20ingin%20bertanya%20tentang%20proposal%20mitra%20untuk%20HUT-RI%20ke-80%20Villa%20Gardenia"
							className="font-bold bg-green-200 p-3 rounded-lg hover:bg-green-400 transition-colors duration-300"
							target="_blank"
						>
							📱 Hubungi Pak Arie
						</a>
					</div>
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
						className="section-text paragraph-with-line"
					>
						Ingin ikut serta dalam perayaan atau memiliki pertanyaan? Silakan
						hubungi kami melalui Panitia Humas Paguyuban (Muhammad Taqi
						Ardabilli, Wardah Makmun) atau langsung mention ke Panitia di
						WhatsApp Group Paguyuban.
					</motion.p>

					<div className="text-center p-3 mt-10 mb-5 text-sm text-gray-600">
						<a
							href="https://wa.me/628112891946?text=Halo%20Pak%20Arda,%20saya%20ingin%20bertanya%20tentang%20info%20HUT-RI%20ke-80%20Villa%20Gardenia"
							className="font-bold bg-green-200 p-3 rounded-lg hover:bg-green-400 transition-colors duration-300"
							target="_blank"
						>
							📱 Hubungi Pak Arda
						</a>
					</div>
					{/* -OR- text on the middle with line */}
					<div className="text-center">- atau -</div>
					<div className="text-center p-3 mt-5 mb-10 text-sm text-gray-600">
						<a
							href="https://wa.me/6285642146214?text=Halo%20Bu%20Warda,%20saya%20ingin%20bertanya%20tentang%20info%20HUT-RI%20ke-80%20Villa%20Gardenia"
							className="font-bold bg-green-200 p-3 rounded-lg hover:bg-green-400 transition-colors duration-300"
							target="_blank"
						>
							📱 Hubungi Bu Wardah
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
