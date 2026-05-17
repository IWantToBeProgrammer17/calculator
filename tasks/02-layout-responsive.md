# Sprint 2: Layout Dasar & Responsive Design

## Tujuan Sprint
Membangun struktur layout kalkulator yang responsive dan siap untuk diisi dengan komponen UI.

## Tasks

### 2.1 Desain Layout Desktop
- [ ] Buat wireframe/layout untuk view desktop kalkulator
- [ ] Implementasi grid layout main (display area + button grid)
- [ ] Styling dengan Tailwind CSS:
  - Display area di atas (full width)
  - Button grid 4x5 atau 5x4 di bawah
  - Spacing dan padding yang sesuai

### 2.2 Implementasi Responsive Design
- [ ] Buat mobile layout (hamburger menu atau carousel untuk tombol)
- [ ] Tablet layout (intermediate design)
- [ ] Test responsive di berbagai screen sizes:
  - Mobile (< 640px)
  - Tablet (640px - 1024px)
  - Desktop (> 1024px)

### 2.3 Styling dengan Color Palette
- [ ] Apply theme colors ke layout:
  - `bg-deep-space-blue` untuk background utama
  - `bg-blue-green` untuk section headers/dividers
  - `bg-amber-flame` atau `bg-princeton-orange` untuk buttons
  - `bg-sky-blue-light` untuk accent elements
- [ ] Pastikan contrast dan accessibility terjaga

### 2.4 Setup Component Structure
- [ ] Buat `src/components/Calculator.tsx` sebagai main container
- [ ] Buat `src/components/Display.tsx` untuk menampilkan hasil
- [ ] Buat `src/components/ButtonGrid.tsx` untuk layout buttons
- [ ] Buat `src/App.tsx` yang render Calculator component

## Definition of Done
✅ Layout desktop dan mobile sudah terlihat baik
✅ Responsive design teruji di berbagai screen sizes
✅ Color palette sudah diterapkan dengan konsisten
✅ Component structure sudah rapi dan terstruktur
