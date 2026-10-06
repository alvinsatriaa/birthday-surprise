BIRTHDAY SURPRISE WEBSITE
=========================

CARA PAKAI
----------
1. Buka file index.html untuk mencoba websitenya.
2. Untuk mengubah semua kata-kata/narasi, buka file content.js.
3. Ubah teks di dalam CONTENT. Jangan mengubah struktur nama property seperti opening, choices, restaurants, reveal, dan final.
4. Simpan content.js.
5. Refresh index.html.

YANG PALING SERING DIUBAH
-------------------------
- pageTitle      = judul browser
- opening.*      = teks halaman pembuka
- choices.*      = judul/instruksi pilihan dinner
- restaurants[]  = pilihan restoran
- reveal.*       = teks setelah restoran dipilih
- final.*        = pesan penutup

MENGGANTI NAMA RESTORAN
------------------------
Di restaurants, ubah bagian:
name: "Nama Restoran A"
menjadi nama restoran yang sebenarnya.

MENGGANTI DESKRIPSI
-------------------
Ubah title, description, label, hint, dan emoji sesuai kebutuhan.

PLACEHOLDER
-----------
{{restaurant}} otomatis diganti dengan nama restoran yang dipilih.

MENGGANTI FOTO
--------------
Versi ini sengaja dibuat tanpa aset eksternal sehingga bisa langsung dibuka secara offline.
Kalau nanti ingin foto restoran/foto kalian, struktur website bisa dikembangkan untuk memakai file gambar lokal.

CARA LAUNCH KE INTERNET
-----------------------
Pilihan termudah:
- Netlify: drag-and-drop folder ini ke Netlify Drop.
- GitHub Pages: upload index.html + content.js ke repository lalu aktifkan Pages.
- Vercel: upload/deploy folder ini sebagai static site.

Tidak memerlukan database atau backend.
