# Portofolio — Ikhwan Romadon

Website portofolio dibangun dengan React + Vite + Tailwind CSS v4, GSAP, dan Framer Motion —
mengikuti gaya visual & tipografi dari base "Acelino v3" (Syne, Space Grotesk, Plus Jakarta Sans,
Space Mono), tapi hanya 4 section: **Home, About, Journey, Contact**. Bagian CV/Sertifikat dan
Portfolio Archive sudah dihapus.

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Build untuk production

```bash
npm run build
```

Hasilnya ada di folder `dist/`, siap deploy ke Vercel.

## Yang perlu kamu edit

1. **Foto**
   - `public/images/profile.jpg` → foto di section Home
   - `public/images/about.jpg` → foto di section About
   - Kalau belum diisi, otomatis fallback jadi inisial "IR".

2. **Contact**
   Edit `src/components/contact/contact.jsx`:
   - `email` → email kamu
   - `socialLinks` → link GitHub/Instagram/WhatsApp kamu
   - `FORMSPREE_ENDPOINT` → daftar gratis di https://formspree.io biar form "Send Message"
     benar-benar mengirim email ke kamu (tinggal ganti URL endpoint-nya)

   Edit juga `src/components/footer/footer.jsx` untuk social link di footer.

3. **About & Journey**
   - `src/components/about/about.jsx` → bio, lokasi, highlight
   - `src/components/journey/journey.jsx` → array `journeyData`, tambah/ubah milestone sesuai
     perjalanan kamu

4. **Skills**
   `src/components/skills/skills.jsx` → array `techStack`, tambah tools lain yang kamu kuasai.

## Struktur

```
src/
  components/
    navbar/navbar.jsx        -> nav sticky, muncul saat scroll ke atas
    main/main-content.jsx    -> section Home (hero)
    about/about.jsx          -> section About
    skills/skills.jsx        -> marquee tech stack
    journey/journey.jsx      -> accordion timeline Journey
    contact/contact.jsx      -> section Contact + form
    footer/footer.jsx
    animations/SplitLineReveal.jsx  -> animasi teks per-baris (GSAP)
    scroll/SmoothScroll.jsx  -> smooth scroll (Lenis)
  pages/index.jsx            -> menyusun semua section + efek pin GSAP
  App.jsx
  index.css                  -> font & token warna (sama seperti base Acelino)
  main.jsx
```
