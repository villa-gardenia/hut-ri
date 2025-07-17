"use client";

import { useEffect, useState } from "react";
import styles from "../donation/styles.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const basepath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function currencyFormat(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
}

export default function DonationDetail() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${basepath}/data/donation-detail.json`);
        const data = await res.json();
        setDonations(data);
      } catch (err) {
        console.error("Failed to fetch donation data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="bg-white text-black min-h-screen">
      <div className="bg-gray-200 p-5 flex flex-col justify-center text-center">
        <div>
          <img
            src={`${basepath}/assets/logo.jpg`}
            alt="logo-villa-gardenia"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "300px",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
      <div className="bg-gray-500 text-white p-5 flex flex-col justify-center relative z-10 text-center">
        <div className="text-xs text-bold">
          Laporan Donasi untuk Kegiatan HUT RI ke-80 di Villa Gardenia
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg text-xs">
            <thead>
              <tr className="bg-gray-200 text-left text-gray-600">
                <th className="px-4 py-2 text-center">No</th>
                <th className="px-4 py-2">Donasi</th>
                <th className="px-4 py-2">Nominal</th>
                <th className="px-4 py-2 text-right">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((d, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2">
                    {d.kategori ? (
                      <span className="font-semibold pr-2 text-gray-600">
                        {d.kategori}
                      </span>
                    ) : (
                      ""
                    )}
                    {d.blok && d.blok.length > 0 && d.kategori === "WARGA"
                      ? "BLOK " + d.blok.charAt(0).toUpperCase()
                      : d.blok}
                  </td>
                  <td className="px-4 py-2">{currencyFormat(d.nominal)}</td>
                  <td className="px-4 py-2 text-right">
                    {new Date(d.date).toLocaleDateString("id-ID", {
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
