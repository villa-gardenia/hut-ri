"use client";

import { useEffect, useState } from "react";

function currencyFormat(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
}

export default function Donation({ basepath }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${basepath}/data/donation.json`)
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="donation">
      <h2 className="total-donations">
        {data?.sum ? currencyFormat(data?.sum) : "Rp 0"}
      </h2>
      <h3 className="text-center">Dari total Donatur: {data?.count ? (data.count - 1) : 0}</h3>
    </div>
  );
}
