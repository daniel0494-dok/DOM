Tactical Anime Hoodie - E-Commerce Product Detail Page

Proyek ini adalah halaman detail produk (Product Detail Page) interaktif berbasis web yang dibangun menggunakan pendekatan Data-Driven DOM Manipulation dengan JavaScript murni (Vanilla JS) dan Tailwind CSS.

🚀 Fitur Utama

1. Dynamic Content Rendering

- Seluruh informasi produk (nama, deskripsi, harga, dan galeri foto) dirender secara dinamis dari satu sumber data terpusat (productData object), memisahkan logika data dari kerangka HTML.

- Format mata uang otomatis menggunakan toLocaleString() untuk konversi tipe data angka (number) menjadi format mata uang yang rapi (USD).

2. Interactive Image Gallery

- Pembuatan elemen thumbnail secara dinamis dari array gambar.

- Pengguna dapat mengklik thumbnail mana pun untuk mengganti tampilan gambar utama (main image) secara real-time.

3. Quantity Selector dengan Validasi

- Kontrol tombol tambah (+) dan kurang (-) yang interaktif.

- Dilengkapi dengan validasi pengaman agar jumlah pesanan tidak bisa turun di bawah batas minimal (tidak bernilai negatif/minus).

4. Dynamic Size Selection

- Pengelolaan status tombol ukuran (S, M, L, XL) menggunakan manipulasi kelas CSS (active dan disabled).

- Otomatis memindahkan status aktif saat ukuran yang tersedia diklik, serta memblokir interaksi pada ukuran yang stoknya kosong (disabled).

5. Responsive Navigation

- Menu navigasi responsif yang mendukung tampilan desktop maupun perangkat mobile dengan fitur toggle menu.

🛠️ Teknologi yang Digunakan

- HTML5: Struktur kerangka halaman yang bersih dan semantik.

- Tailwind CSS & Custom CSS: Styling responsif dan pengelolaan status tombol (active / disabled).

- Vanilla JavaScript (ES6+): Manipulasi DOM, event handling (querySelectorAll, forEach, addEventListener), dan manajemen data produk.

📂 Struktur Proyek

├── src/

│   ├── index.html      # Kerangka utama halaman detail produk

│   ├── script.js       # Logika data produk, rendering DOM, dan interaktivitas

│   ├── output.css      # File CSS hasil kompilasi Tailwind & custom style

│   └── asset/          # Direktori aset gambar produk

└── README.md           # Dokumentasi proyek


💻 Cara Menjalankan Proyek

1. Pastikan seluruh file berada dalam struktur direktori yang sesuai.

2. Buka proyek menggunakan Visual Studio Code.

3. Jalankan src/index.html menggunakan ekstensi Live Server (atau buka langsung melalui browser modern).

4. Interaksi galeri gambar, tombol quantity, dan pemilihan ukuran siap digunakan.
