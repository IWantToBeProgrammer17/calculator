# Sprint 3: UI Komponen Kalkulator

## Tujuan Sprint
Membangun komponen UI yang interaktif untuk display dan buttons dengan state management dasar.

## Tasks

### 3.1 Komponen Display
- [ ] Buat `src/components/Display.tsx`
- [ ] Tampilkan input/calculation yang sedang diketik
- [ ] Tampilkan hasil akhir setelah '=' ditekan
- [ ] Styling dengan font yang jelas dan readable
- [ ] Implementasi scroll horizontal jika input terlalu panjang (untuk mobile)

### 3.2 Komponen Button
- [ ] Buat `src/components/Button.tsx` sebagai reusable button component
- [ ] Support berbagai tipe button:
  - Number buttons (0-9)
  - Operator buttons (+, -, *, /)
  - Special buttons (=, C, DEL, parentheses, scientific functions)
- [ ] Visual feedback saat button di-hover/di-click
- [ ] Responsive sizing untuk mobile dan desktop

### 3.3 Button Grid Layout
- [ ] Organize buttons dalam grid yang logis
- [ ] Layout standard calculator (4 columns minimum untuk desktop)
- [ ] Mobile layout yang user-friendly (carousel atau accordion untuk scientific buttons)
- [ ] Grouping buttons berdasarkan kategori:
  - Number buttons
  - Basic operators
  - Scientific operators (collapse pada mobile)

### 3.4 State Management Setup
- [ ] Setup state untuk:
  - Current input display
  - Previous input (untuk operation)
  - Current operation
  - Result
- [ ] Buat custom hook `useCalculator()` untuk manage state
- [ ] Implementasi callback handlers untuk button clicks

### 3.5 Testing UI
- [ ] Test semua buttons dapat di-click
- [ ] Test display menampilkan input dengan benar
- [ ] Test responsive pada mobile/tablet/desktop
- [ ] Test touch events bekerja dengan baik pada mobile

## Definition of Done
✅ Display component menampilkan input/output dengan benar
✅ Semua buttons tersedia dan responsif
✅ UI layout nyaman digunakan di semua device sizes
✅ State management siap untuk logic calculator
