"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CommiteeSection from "../components/Commitee";
import NavBar from "../components/NavBar";

const basepath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function HomePage() {
	return (
		<main className="w-full">
			<NavBar basepath={basepath} />
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
					<h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide">
						Selamat Hari Ulang Tahun <br /> Republik Indonesia Ke-80
					</h1>
					<p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
						Merdeka dan Maju Bersama di Bumi Pertiwi
					</p>
					<a href="#tentang" className="btn-primary mt-8">
						Mulai Jelajah
					</a>
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
			<CommiteeSection />
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
