"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function removeEmojis(text) {
	return text.replace(/[^\p{L}\p{N}\p{P}\p{Z}\s]/gu, "");
}

export default function CommiteeSection({ basepath }) {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(`${basepath}/data/committee.json`)
			.then((res) => res.json())
			.then(setData);
	}, []);

	if (!data) return <p>Loading...</p>;

	return (
		<section id="panitia" className="min-h-screen py-20 px-4 bg-white">
			<div className="container mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="section-title"
				>
					{removeEmojis(data.title)}
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
					className="section-text"
				>
					{removeEmojis(data.description)}
				</motion.p>

				{data.teams.map((team, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: i * 0.1 }}
						className="section-text"
					>
						<h3 className="section-subtitle section-subtitle-black mb-2">
							{removeEmojis(team.name)}
						</h3>
						<div className="space-y-4">
							{team.roles.map((role, j) => (
								<div key={j} className="p-1">
									<h4 className="section-subtitle">
										{removeEmojis(role.title)}
									</h4>
									<p className="text-gray-700 mb-1">{role.names.join(", ")}</p>
								</div>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
