# Dashboard Visualisasi Donasi Villa Gardenia

Dashboard interaktif untuk memvisualisasikan data donasi warga Villa Gardenia dalam bentuk peta dan statistik.

## 🌟 Fitur

### Visualisasi Peta
- **Peta Interaktif**: Menampilkan setiap rumah di Villa Gardenia dengan warna berdasarkan jumlah donasi
- **Popup Detail**: Klik rumah untuk melihat informasi lengkap (blok, alamat, kategori, total donasi)
- **Kode Warna**:
  - 🟢 Hijau: > 3 Juta IDR
  - 🔵 Biru: 1-3 Juta IDR
  - 🟣 Ungu: 500K-1 Juta IDR
  - 🟠 Oranye: 200K-500K IDR
  - 🔴 Merah: < 200K IDR
  - ⚪ Abu-abu: Tidak ada data

### Filter Multi-Select
1. **Berdasarkan Jumlah**: Filter berdasarkan range donasi
2. **Berdasarkan Kategori**:
   - Warga
   - Sponsor & Warga
3. **Berdasarkan Jenis Pembayaran**:
   - Tunai (Cash)
   - Non-Tunai (Transfer/Non-Cash)
   - ℹ️ Beberapa rumah berdonasi dengan kedua cara

### Statistik Real-time
- **Total Donasi**: Jumlah keseluruhan donasi
- **Kontributor**: Jumlah yang berdonasi
- **Total Rumah**: Jumlah properti di peta
- **Total Warga**: 178 warga
- **Tingkat Partisipasi**: Persentase warga yang berdonasi
- **Rata-rata & Median Donasi**
- **Donasi Tertinggi & Terendah**

Setiap statistik dilengkapi dengan tooltip (hover icon **ℹ️**) yang menjelaskan cara perhitungan dan efek filter.

## 🚀 Cara Menggunakan

### Membuka Dashboard
1. Buka file `donation-visualization.html` di browser modern (Chrome, Firefox, Edge)
2. Atau akses melalui web server lokal/hosting

### Menggunakan Filter
1. **Klik** pada item di bagian Filter untuk mengaktifkan
2. **Multi-select**: Klik beberapa filter sekaligus untuk kombinasi
3. **Reset**: Klik tombol **✕** merah di kanan atas Filter untuk reset semua
4. Peta dan statistik akan update otomatis

### Tips Penggunaan
- Hover mouse pada rumah di peta untuk highlight
- Klik rumah untuk detail lengkap
- Hover icon **ℹ️** pada statistik untuk penjelasan
- Filter dapat dikombinasikan (contoh: "> 3M" + "Tunai" + "Warga")

## 📁 Struktur File

```
data/
├── donation-visualization.html    # Dashboard utama (standalone file)
├── villa-gardenia.geojson        # Data peta (koordinat & properties)
└── README.md                      # Dokumentasi ini
```

## 📊 Format Data

### CSV Data (Embedded dalam HTML)
```csv
BLOK,NBR,CASH,VALUE,KATEGORI
A,A-10,300178,300178,WARGA
J,J-2,150178,150178,WARGA
J,J-2,,500000,SPONSOR&WARGA
```

**Kolom:**
- `BLOK`: Kode blok (A, B, C, dst.)
- `NBR`: Nomor rumah (A-10, B-3, dst.)
- `CASH`: Jumlah donasi tunai (kosong jika non-tunai)
- `VALUE`: Total nilai donasi
- `KATEGORI`: WARGA atau SPONSOR&WARGA

**Catatan**: Beberapa rumah memiliki multiple entry (cash + non-cash)

### GeoJSON Format
```json
{
  "type": "Feature",
  "properties": {
    "NBR": "A-10",
    "BLOK": "A",
    "ALAMAT": "Jl. Example No. 10"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [...]
  }
}
```

## 🔧 Teknologi

- **HTML5 + CSS3**: UI & styling
- **JavaScript (Vanilla)**: Logic & interaktivity
- **Leaflet.js**: Library peta interaktif
- **OpenStreetMap**: Tile provider untuk peta dasar

## 📝 Cara Update Data

### Update Data Donasi
1. Edit bagian `csvData` di dalam `<script>` tag
2. Format: `BLOK,NBR,CASH,VALUE,KATEGORI`
3. Simpan dan refresh browser

### Update Peta
1. Edit file `villa-gardenia.geojson`
2. Pastikan properties `NBR`, `BLOK`, `ALAMAT` sesuai
3. Simpan dan refresh browser

### Update Total Warga
1. Cari `const TOTAL_RESIDENTS = 178;`
2. Ubah nilai sesuai kebutuhan
3. Partisipasi rate akan otomatis update

## 🎨 Kustomisasi

### Mengubah Warna Range
Edit fungsi `getColor()`:
```javascript
function getColor(value) {
  if (value > 3000000) return "#10b981"; // Hijau
  if (value > 1000000) return "#3b82f6"; // Biru
  // dst...
}
```

### Mengubah Range Donasi
Edit `distributionRanges` dan `legend-item`:
```javascript
{
  label: "> 5M",
  min: 5000000,
  max: Infinity,
  color: "#10b981"
}
```

## 🐛 Troubleshooting

### Peta tidak muncul
- Pastikan koneksi internet aktif (untuk load Leaflet & OSM tiles)
- Check console browser untuk error
- Pastikan file `villa-gardenia.geojson` ada di folder yang sama

### Data tidak sesuai
- Periksa format CSV (koma sebagai separator)
- Pastikan NBR di CSV sama dengan NBR di GeoJSON
- Check console untuk parsing errors

### Filter tidak bekerja
- Clear browser cache
- Hard refresh (Ctrl+F5 / Cmd+Shift+R)
- Check JavaScript errors di console

## 📜 License

Project ini dibuat untuk Villa Gardenia.

## 🤝 Contributing

Untuk menambah fitur atau memperbaiki bug:
1. Fork repository
2. Buat branch fitur baru
3. Commit perubahan
4. Push dan buat Pull Request

## 📧 Contact

Untuk pertanyaan atau support, hubungi administrator Villa Gardenia.

---

**Last Updated**: 2025-10-10
**Version**: 2.0.0
**Generated with**: Claude Code
