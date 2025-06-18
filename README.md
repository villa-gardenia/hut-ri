# 🇮🇩 Website HUT RI ke-80
## Warga Villa Gardenia, Bangunjiwo, Bantul, Yogyakarta

Website ini dibuat sebagai bagian dari perayaan **Hari Ulang Tahun Republik Indonesia ke-80** oleh warga **Villa Gardenia**, Bangunjiwo, Bantul, Yogyakarta.

Dibangun dengan:
- [Next.js](https://nextjs.org/) untuk framework React
- [Tailwind CSS](https://tailwindcss.com/) untuk styling responsif
- [Framer Motion](https://www.framer.com/motion/)  untuk animasi parallax
- [Docker Compose](https://docs.docker.com/compose/)  untuk development
- [GitHub Pages](https://pages.github.com/)  deployment yang mudah untuk website

---

## 📁 Struktur Proyek

```bash
.
├── README.md                     ← (Anda di sini)
├── docker-compose.yml            ← Jalankan website dengan Docker
├── Dockerfile                    ← Untuk build image Docker
├── src/                          ← Source code website (Next.js)
│   ├── app/                      ← Isi halaman utama
│   ├── components/               ← Komponen UI reusables
│   ├── public/                   ← Assets statis (gambar, favicon, dll)
│   └── ...
├── 80/                           ← Dokumen internal panitia HUT RI ke-80
│   ├── notulensi/                ← Notulensi rapat dan diskusi
│   └── susunan-panitia.md        ← Susunan panitia dan tugasnya

```

---

## 🚀 Cara Menjalankan Website

Website menggunakan **Next.js + Docker Compose** untuk development lokal.

### 1. Jalankan Aplikasi

```bash
docker-compose up -d --build
```

> ⚠️ Kenapa harus --build? Karena ini memastikan bahwa container Docker dibangun ulang jika ada perubahan pada kode atau dependensi (npm install, dll).

Akses website: 

- 👉 Dev: http://localhost:3000
- 👉 Production: https://villa-gardenia.github.io/hut-ri   

### 2. Hentikan Aplikasi

```bash
docker-compose down
```

Perintah ini akan menghentikan dan menghapus semua container yang dibuat oleh `docker-compose up`.

### 3. Hapus Semua Container

```bash
docker-compose down --rmi all
```

Perintah ini akan menghentikan dan menghapus semua container, serta menghapus semua image yang dibuat oleh `docker-compose up`.

## 📂 Konten Internal Panitia 

Seluruh dokumen terkait penyelenggaraan HUT RI ke-80 oleh warga Villa Gardenia  tersedia dalam folder: 

- [80/README.md](/80) → Daftar nama dan divisi panitia HUT RI ke-80
- [80/notulensi/](/80/notulensi) → Catatan hasil rapat dan koordinasi
     
> 📝 Dokumen-dokumen ini hanya untuk keperluan internal dan tidak termasuk dalam website production.

## 🛠 Teknologi yang Digunakan

| Teknologi | Deskripsi |
|-----------|-----------|
| Next.js | Framework React untuk SSR dan Static Generation |
| Tailwind CSS | Styling responsif dan cepat |
| Framer Motion | Animasi parallax dan interaksi |
| Docker Compose | Development environment yang konsisten |
| GitHub Pages | Deployment gratis dan mudah |

## 🙌 Terima Kasih 

Website ini dirancang sebagai apresiasi atas semangat kemerdekaan dan gotong royong warga Villa Gardenia  dalam menyambut Hari Ulang Tahun Republik Indonesia ke-80. 

🇮🇩 Merdeka!
🇮🇩 Dirgahayu Negeriku! 
