"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const getImageSrc = (basepath, name) => {
  const nameLower = name
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
  return `${basepath}/assets/youth/${nameLower}.jpg`;
};

export default function YouthSection({ basepath }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${basepath}/data/youth.json`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching youth data:", error));
  }, []);

  return (
    <div className="container mx-auto mt-12">
      {/* Section Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-subtitle text-center section-subtitle section-subtitle-black mb-2"
      >
        Pemuda-Pemudi Villa Gardenia
      </motion.h3>

      {/* Intro Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="section-text text-center max-w-3xl mx-auto mt-6"
      >
        Di balik perayaan HUT RI ke-80 di Villa Gardenia, terdapat kontribusi
        luar biasa dari para pemuda-pemudi yang penuh semangat dan ide segar.
        Mereka menjadi motor penggerak di balik berbagai aspek acara.
      </motion.p>

      {/* Member Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16"
      >
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl px-4">
          {data.map((person, index) => (
            <div
              key={index}
              className="bg-white shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl duration-300 border border-gray-100 w-[300px]"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={getImageSrc(basepath, person.name)}
                  alt={person.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <a
                  href={`https://www.instagram.com/ ${person.ig}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700"
                >
                  <h3 className="section-subtitle">{person.name}</h3>
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Closing Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="section-text text-center max-w-3xl mx-auto mt-12 text-gray-700"
      >
        Dengan semangat gotong royong dan jiwa patriotik, mereka tidak hanya
        membantu penyelenggaraan acara, tetapi juga menjadi contoh bagi generasi
        muda dalam berkontribusi aktif untuk kemajuan bangsa Indonesia.
      </motion.p>
    </div>
  );
}
