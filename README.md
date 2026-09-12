# Portofolio — Ikhwan Romadon

Website portofolio dibangun dengan React + Vite + Tailwind CSS v4, GSAP, dan Framer Motion.
Gaya visual editorial hitam-putih dengan tipografi kuat (Syne, Space Grotesk, Plus Jakarta Sans,
Space Mono), dilengkapi preloader, navigasi mobile, section Services & Projects, sampai
tombol scroll-to-top — supaya terasa lengkap dan profesional.

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

Hasilnya ada di folder `dist/`, siap deploy ke Vercel/Netlify.

## Yang perlu kamu edit

1. **Foto**
   - `public/images/profile.jpg` → foto di section Home
   - `public/images/about.jpg` → foto di section About
   - `public/images/projects/project-1.jpg`, dst → screenshot proyek (opsional)
   - Kalau belum diisi, otomatis fallback ke inisial/nomor.

2. **Contact**
   Edit `src/components/contact/contact.jsx`:
   - `email` → email kamu
   - `socialLinks` → link GitHub/Instagram/WhatsApp kamu
   - `FORMSPREE_ENDPOINT` → daftar gratis di https://formspree.io biar form "Send Message"
     benar-benar mengirim email ke kamu (tinggal ganti URL endpoint-nya)

   Edit juga `src/components/footer/footer.jsx` untuk social link di footer.

3. **About & Journey**
   - `src/components/about/about.jsx` → bio, lokasi, highlight
   - `src/components/journey/journey.jsx` → array `journeyData`, tambah/ubah milestone

4. **Skills**
   `src/components/skills/skills.jsx` → array `techStack`, tambah tools lain yang kamu kuasai.

5. **Services**
   `src/components/services/services.jsx` → array `services`, sesuaikan kemampuan kamu.

6. **Projects**
   `src/components/projects/projects.jsx` → array `projectsData`. Tiap item punya:
   - `title`, `description`, `tags`, `year`
   - `image` → path screenshot (boleh dikosongkan/dihapus filenya, ada fallback otomatis)
   - `liveUrl` → kosongkan `''` kalau belum ada demo online
   - `githubUrl` → link repo GitHub proyek tsb

7. **SEO / Meta**
   `index.html` → ganti URL di `canonical`, `og:url`, `og:image`, `twitter:image` dan
   `public/sitemap.xml` sesuai domain final kamu setelah deploy.

## Struktur

```
src/
  components/
    navbar/navbar.jsx          -> nav desktop (pill, muncul saat scroll ke atas) + menu mobile
    loading/loading.jsx        -> preloader dengan hitungan persentase
    main/main-content.jsx      -> section Home (hero) + CTA
    about/about.jsx            -> section About
    skills/skills.jsx          -> marquee tech stack
    services/services.jsx      -> section "What I Do"
    projects/projects.jsx      -> section proyek/portofolio karya
    journey/journey.jsx        -> accordion timeline Journey
    contact/contact.jsx        -> section Contact + form
    footer/footer.jsx
    scrollTop/ScrollTopButton.jsx -> tombol mengambang kembali ke atas
    animations/SplitLineReveal.jsx  -> animasi teks per-baris (GSAP)
    scroll/SmoothScroll.jsx    -> smooth scroll (Lenis)
  pages/index.jsx              -> menyusun semua section + efek pin GSAP
  App.jsx                      -> render preloader + halaman
  index.css                    -> font, token warna, noise, dot-grid, spotlight card
  main.jsx
```
