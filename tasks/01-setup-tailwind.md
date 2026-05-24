# Sprint 1: Setup Proyek & Konfigurasi Tailwind CSS

## Tujuan Sprint
Mempersiapkan project setup yang matang dengan Tailwind CSS v4 dan struktur dasar project yang sesuai dengan requirement.

## Tasks

### 1.1 Verifikasi dan Konfigurasi Tailwind CSS v4
- [x] Tailwind CSS v4 sudah terinstall (sudah dilakukan)
- [x] Konfigurasi file `tailwind.config.js` dengan custom color palette
- [x] Tambahkan CSS variables di `src/index.css`:
  - [x] `--sky-blue-light: #8ecae6ff`
  - [x] `--blue-green: #219ebcff`
  - [x] `--deep-space-blue: #023047ff`
  - [x] `--amber-flame: #ffb703ff`
  - [x] `--princeton-orange: #fb8500ff`
- [x] Setup Tailwind CSS v4 di `src/App.css`

### 1.2 Setup Struktur Project
- [x] Buat folder `src/components/` untuk reusable components
- [x] Buat folder `src/hooks/` untuk custom React hooks
- [x] Buat folder `src/utils/` untuk utility functions dan calculator logic
- [x] Update struktur imports di `src/main.tsx` dan `src/App.tsx`

### 1.3 Verifikasi Setup
- [x] Test bahwa Vite dev server berjalan lancar (npm run build berhasil)
- [x] Verify bahwa Tailwind CSS sudah siap digunakan di components (build & lint pass)
- [x] Pastikan TypeScript configuration sudah tepat di `tsconfig.json` (tsc -b pass)

## Definition of Done
✅ Tailwind CSS v4 siap digunakan dengan custom colors
✅ Folder struktur project sudah terorganisir
✅ Dev server berjalan tanpa error
