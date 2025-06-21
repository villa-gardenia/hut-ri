# 🇮🇩 Website HUT RI ke-80

![Workflow](https://github.com/villa-gardenia/hut-ri/actions/workflows/deploy.yml/badge.svg) ![Languages](https://img.shields.io/github/languages/count/villa-gardenia/hut-ri) ![Last Commit](https://img.shields.io/github/last-commit/villa-gardenia/hut-ri/main) 

## Warga Villa Gardenia, Bangunjiwo, Bantul, Yogyakarta

Website ini dibuat sebagai bagian dari perayaan **Hari Ulang Tahun Republik Indonesia ke-80** oleh warga **Villa Gardenia**, Bangunjiwo, Bantul, Yogyakarta.

Dibangun dengan:
- [Next.js](https://nextjs.org/) untuk framework React
- [Tailwind CSS](https://tailwindcss.com/) untuk styling responsif
- [Framer Motion](https://www.framer.com/motion/)  untuk animasi parallax
- [Docker Compose](https://docs.docker.com/compose/)  untuk development
- [Markdown](https://www.markdownguide.org/) untuk dokumentasi dan struktur data
- [Python](https://www.python.org/) untuk konversi Markdown ke JSON
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
│   └── README.md                 ← Susunan panitia dan tugasnya

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

## 🛠️ Konversi Markdown ke JSON Struktur Panitia

Repo ini menyertakan script untuk mengubah file Markdown berisi struktur panitia acara menjadi file JSON terstruktur yang bisa dipakai untuk frontend dinamis (misalnya di Next.js).
📄 Format Markdown

Markdown harus mengikuti struktur:
```markdown
## Nama Tim

### Nama Posisi – Nama Anggota (Contoh: Nama Anggota 1 & Nama Anggota 2)

Deskripsi tugas dan tanggung jawab posisi ini.
```

Cara menggunakan:
1. Pastikan Anda sudah menginstall python dan pip.
2. Update Markdown di `80/README.md` sesuai format di atas.
3. Jalankan perintah berikut:
```bash
./update.sh
```
> Script ini akan membaca file `80/README.md`, mengonversinya menjadi JSON, dan menyimpannya di `src/data/committee.json`.
4. Hasil JSON akan terlihat seperti ini:
```json
{
  "teams": [
    {
      "name": "Tim Program & Operasional",
      "roles": [
        {
          "title": "Koordinator Acara (Program Director)",
          "names": ["Fahrul Wredha Kumara", "Ega Praja Rimata"],
          "description": "Bertanggung jawab menyusun alur dan susunan acara dari awal hingga akhir."
        },
        ...
      ]
    },
    ...
  ]
}
```
5. Commit dan push perubahan ke repository untuk memperbarui data di frontend.


## 🛠 Teknologi yang Digunakan

| Teknologi | Deskripsi |
|-----------|-----------|
| Next.js | Framework React untuk SSR dan Static Generation |
| Tailwind CSS | Styling responsif dan cepat |
| Framer Motion | Animasi parallax dan interaksi |
| Docker Compose | Development environment yang konsisten |
| GitHub Pages | Deployment gratis dan mudah |
| Markdown | Format dokumentasi yang mudah dibaca |
| Python | Script konversi Markdown ke JSON |

## 🙌 Terima Kasih 

Website ini dirancang sebagai apresiasi atas semangat kemerdekaan dan gotong royong warga Villa Gardenia  dalam menyambut Hari Ulang Tahun Republik Indonesia ke-80. 

🇮🇩 Merdeka!
🇮🇩 Dirgahayu Negeriku! 
