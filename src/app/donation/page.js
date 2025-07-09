"use client";

import { useEffect, useState, useMemo } from "react";
import styles from "./styles.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const basepath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const targetAmount = 48772500; // Target dana total

function currencyFormat(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
}

function today() {
  const date = new Date();
  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function Donation() {
  const [data, setData] = useState({
    sum: 0,
    count: 0,
  });
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    fetch(`${basepath}/data/donation.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        if (res.sum) {
          const calculatedPercent = Math.min(
            (res.sum / targetAmount) * 100,
            100,
          );
          setPercent(calculatedPercent);
        } else {
          setPercent(0);
        }
      })
      .catch((err) => console.error("Error fetching donation data:", err));
  }, []);

  useEffect(() => {
    const targetDate = new Date("2025-08-17T00:00:00").getTime();
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      setDaysRemaining(days);

      if (timeRemaining < 0) {
        setDaysRemaining(0);
      }
    }, 1000);
    return () => clearInterval(countdownInterval);
  }, []);

  const formattedSum = currencyFormat(data.sum);
  const formattedRemaining = currencyFormat(targetAmount - data.sum);

  const progressBarStyle = useMemo(() => {
    return {
      width: `${percent}%`,
      backgroundColor: percent >= 100 ? "green" : "orange",
      height: "20px",
      borderRadius: "10px",
    };
  }, [percent]);

  return (
    <main className="bg-white text-black min-h-screen">
      {/* Header */}
      <header className="pt-5 pl-5 pr-5 mb-0 flex justify-between items-center">
        <div>
          <img
            src={`${basepath}/assets/logo-hut-ri-80-unoficial.png`}
            alt="Logo HUT RI 80 Unoficial"
            className="h-20"
            height={600}
          />
        </div>
        <div>
          <img
            src={`${basepath}/assets/logo.jpg`}
            alt="logo-villa-gardenia"
            height={600}
          />
        </div>
      </header>

      {/* Content */}
      <section className="container-donation mx-auto p-4">
        {/* Left Judul, Right Photo */}
        <div className="flex h-48 relative overflow-hidden">
          {/* Left */}
          <div className="w-1/2 bg-red-600 text-white p-5 flex flex-col justify-center relative z-10">
            <h1 className="text-xl font-bold">HUT RI ke-80</h1>
            <h2 className="text-md font-bold mb-1">Tahun 2025</h2>
            <div className="border-b-2 border-white w-16 mb-2"></div>
            <div className="text-xs">
              Paguyuban Warga Perum Villa Gardenia
              <br />
              Gedong, Bangunjiwo, Kasihan, Bantul
            </div>
          </div>

          {/* Right */}
          <div className="w-1/2 relative">
            <div
              className="absolute inset-0 bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: `url(${basepath}/assets/community.jpg)`,
              }}
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
        </div>

        <div className="bg-white shadow-md p-4 text-center border-b border-gray">
          {/* Left: Update Dana Masuk Text, Right: Today Date*/}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Update Dana Masuk</h2>
            <p className="text-lg">{today()}</p>
          </div>
        </div>
        {/* Progress Dana */}
        <div className="bg-white shadow-md p-4 pb-0 border-b border-gray">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm">Persentase pencapaian</p>
            <p className="text-sm font-bold text-red-600">
              {percent.toFixed(2)}%
            </p>
          </div>
          <div className="mb-6 mt-4 w-full bg-gray-200 rounded-full overflow-hidden">
            <div style={progressBarStyle} className="rounded-full"></div>
          </div>
        </div>

        <div className="bg-white shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm">Uang yang sudah masuk</p>
            <p className="text-sm font-bold text-red-600">{formattedSum}</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm">Jumlah donatur</p>
            <p className="text-sm font-bold text-red-600">
              {data?.count ? data.count - 1 : 0} Donatur
            </p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm">Kekurangan dana</p>
            <p className="text-sm font-bold text-red-600">
              {formattedRemaining}
            </p>
          </div>
          {/* URL ke https://villa-gardenia.github.io/hut-ri */}
          {/* add line */}
        </div>
        <div className="bg-red-600 shadow-md p-4 text-center">
          {/* Left: Update Dana Masuk Text, Right: Today Date*/}
          <h2 className="text-xl text-white">
            <span className="font-bold">{daysRemaining} Hari</span> Lagi Menuju
            Kemerdekaan
          </h2>
        </div>

        <div className="text-xs bg-white shadow-md p-4 text-center border-t border-gray">
          Info Lebih Lengkap:{" "}
          <a
            href="https://villa-gardenia.github.io/hut-ri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 ml-1 hover:underline font-bold"
          >
            https://bitly.com/hutri80vg
          </a>
        </div>
      </section>
    </main>
  );
}
