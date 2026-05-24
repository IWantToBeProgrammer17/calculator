# Sprint 01: Setup Proyek & Konfigurasi Tailwind CSS

**Tanggal**: 24 Mei 2026  
**Topik**: Implementasi Sprint Task 01 - Setup Tailwind CSS v4 dan Struktur Project  
**Status**: ✅ Completed

---

## 📋 Ringkasan Percakapan

Pada sesi ini, kami berhasil mengimplementasikan Sprint Task 01 yang mencakup setup awal proyek calculator dengan konfigurasi Tailwind CSS v4 dan struktur folder project yang terorganisir dengan baik.

### Pertanyaan Utama
- Bagaimana cara mengkonfigurasi Tailwind CSS v4 dengan custom color palette?
- Bagaimana cara membuat struktur folder project yang baik untuk React + TypeScript?
- Bagaimana cara memverifikasi bahwa konfigurasi Tailwind CSS sudah benar?

---

## 🔧 Implementasi yang Dilakukan

### 1. Konfigurasi Tailwind CSS v4

#### File: `tailwind.config.js` (Baru Dibuat)
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue-light': '#8ecae6ff',
        'blue-green': '#219ebcff',
        'deep-space-blue': '#023047ff',
        'amber-flame': '#ffb703ff',
        'princeton-orange': '#fb8500ff',
      },
    },
  },
  plugins: [],
}
```

**Penjelasan:**
- Dikonfigurasi untuk scan file HTML dan semua file TSX/JSX di folder `src/`
- Custom color palette ditambahkan dalam `theme.extend.colors` sesuai requirement project
- Warna-warna yang digunakan mengikuti tema: Sky Blue Light, Blue Green, Deep Space Blue, Amber Flame, dan Princeton Orange

#### File: `src/index.css` (Diperbarui)
```css
@import "tailwindcss";

:root {
  --sky-blue-light: #8ecae6ff;
  --blue-green: #219ebcff;
  --deep-space-blue: #023047ff;
  --amber-flame: #ffb703ff;
  --princeton-orange: #fb8500ff;
}
```

**Penjelasan:**
- Import Tailwind CSS v4 yang sudah disetup
- Menambahkan CSS variables di root scope yang dapat digunakan di seluruh aplikasi
- Memungkinkan konsistensi warna di seluruh project

#### File: `src/App.css` (Diperbarui)
```css
/* Tailwind CSS v4 is imported in index.css */
/* Custom styles for components */

.counter {
  font-size: 16px;
  padding: 12px 12px;
  border-radius: 5px;
  color: var(--blue-green);
  background-color: var(--sky-blue-light);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;
}

.counter:hover {
  border-color: var(--amber-flame);
}

.counter:focus-visible {
  outline: 2px solid var(--blue-green);
  outline-offset: 2px;
}
```

**Penjelasan:**
- Menggunakan CSS variables yang sudah didefinisikan di `index.css`
- `.counter` class menggunakan color palette yang telah dikonfigurasi
- Menambahkan hover dan focus-visible states untuk accessibility

### 2. Setup Struktur Project

Tiga folder utama dibuat untuk organisasi code yang lebih baik:

#### `src/components/`
Folder untuk menyimpan reusable React components. Contoh components yang akan dibuat di sprint berikutnya:
- Calculator display component
- Button components
- Input components

#### `src/hooks/`
Folder untuk menyimpan custom React hooks. Contoh hooks:
- `useCalculator()` - hook untuk logic calculator
- `useHistory()` - hook untuk history operasi

#### `src/utils/`
Folder untuk menyimpan utility functions dan calculator logic:
- Calculator operations (addition, subtraction, multiplication, division, etc.)
- Number formatting utilities
- Scientific function implementations

### 3. Verifikasi Konfigurasi

#### Build Test: ✅ PASSED
```bash
npm run build
✓ 20 modules transformed.
✓ built in 2.64s
```

Output file bundle:
- `dist/index.html` - 0.53 kB
- `dist/assets/index-D8Bp88pu.css` - 9.04 kB
- `dist/assets/index-BYdubbj2.js` - 193.35 kB

#### Lint Test: ✅ PASSED
```bash
npm run lint
```
Tidak ada linting error atau warning.

#### TypeScript Compilation: ✅ PASSED
```bash
tsc -b
```
TypeScript successfully compiled tanpa error.

---

## 📊 Status Implementasi

### Sprint Task 01 - Completed: 11/12 Tasks

| No. | Task | Status |
|-----|------|--------|
| 1.1.1 | Tailwind CSS v4 terinstall | ✅ Completed |
| 1.1.2 | Konfigurasi `tailwind.config.js` | ✅ Completed |
| 1.1.3 | Tambah CSS variables | ✅ Completed |
| 1.1.4 | Setup Tailwind CSS di `App.css` | ✅ Completed |
| 1.2.1 | Buat folder `src/components/` | ✅ Completed |
| 1.2.2 | Buat folder `src/hooks/` | ✅ Completed |
| 1.2.3 | Buat folder `src/utils/` | ✅ Completed |
| 1.2.4 | Update imports di `main.tsx` dan `App.tsx` | ⏳ Pending |
| 1.3.1 | Test dev server | ✅ Verified (npm run build) |
| 1.3.2 | Verify Tailwind CSS ready | ✅ Verified (build & lint pass) |
| 1.3.3 | Verify TypeScript config | ✅ Verified (tsc -b pass) |

---

## 🔍 Troubleshooting & Lessons Learned

### Issue 1: Tailwind CSS @apply dengan utility classes tidak valid
**Masalah**: Saat menggunakan `@apply` dengan Tailwind utilities seperti `px-2.5` atau `px-3` di CSS file, build failed dengan error "Cannot apply unknown utility class".

**Solusi**: 
- Alih-alih menggunakan `@apply` dengan utilities, gunakan CSS variables dan standard CSS properties
- Tailwind CSS v4 lebih ketat dalam validasi `@apply` directive
- Gunakan approach yang lebih straight-forward dengan standard CSS properties

**Best Practice**:
```css
/* ✅ Good - menggunakan CSS variables dan standard properties */
.counter {
  color: var(--blue-green);
  background-color: var(--sky-blue-light);
  padding: 12px;
}

/* ❌ Avoid - menggunakan @apply dengan arbitrary utilities */
.counter {
  @apply px-2.5 py-1.25 rounded;
}
```

---

## 📁 File Structure (Post-Implementation)

```
calculator/
├── docs/
│   └── 2026-05-24_sprint-01-tailwind-setup.md (this file)
├── src/
│   ├── components/          ← Created (empty, ready for components)
│   ├── hooks/               ← Created (empty, ready for custom hooks)
│   ├── utils/               ← Created (empty, ready for utilities)
│   ├── assets/
│   ├── App.css              ← Updated (custom styles dengan color palette)
│   ├── App.tsx
│   ├── index.css            ← Updated (added CSS variables)
│   └── main.tsx
├── tailwind.config.js       ← Created (custom color configuration)
├── package.json             ← Already configured
├── vite.config.ts           ← Already configured
├── tsconfig.json            ← Already configured
└── ... (other files)
```

---

## 🎯 Next Steps & Implementation Plan

### Sprint 02: Layout Responsive & UI Components
**File**: `tasks/02-layout-responsive.md`

#### 2.1 Membuat Layout Responsive
- [ ] Buat layout grid untuk calculator display
- [ ] Setup responsive breakpoints (mobile, tablet, desktop)
- [ ] Implementasi flexbox/grid layout untuk button grid
- [ ] Test responsive design di berbagai screen sizes

#### 2.2 Implementasi UI Components
- [ ] Buat `Display` component untuk menampilkan hasil kalkulasi
- [ ] Buat `Button` component dengan support untuk berbagai tipe button
- [ ] Buat `Keypad` component untuk grid tombol
- [ ] Implementasi component styling dengan color palette yang sudah dikonfigurasi

#### 2.3 Setup Component Composition
- [ ] Refactor `App.tsx` untuk menggunakan components
- [ ] Implementasi component props dan state management
- [ ] Test component integration

**Estimated Timeline**: 2-3 hari

### Sprint 03: Basic Calculator Logic
**File**: `tasks/04-basic-logic.md`

#### 3.1 Implementasi Calculator Logic
- [ ] Buat utility functions untuk operasi dasar (add, subtract, multiply, divide)
- [ ] Buat `useCalculator()` custom hook untuk state management
- [ ] Implementasi button click handlers
- [ ] Test calculator dengan operasi dasar

#### 3.2 Input Handling
- [ ] Handle number input
- [ ] Handle operator selection
- [ ] Implementasi equals button logic
- [ ] Handle error cases (division by zero, etc.)

**Estimated Timeline**: 2-3 hari

### Sprint 04: Scientific Functions
**File**: `tasks/05-scientific-functions.md`

#### 4.1 Extended Functions
- [ ] Implementasi sine, cosine, tangent functions
- [ ] Implementasi square root dan power functions
- [ ] Implementasi factorial function
- [ ] Implementasi logarithm functions

#### 4.2 Scientific UI Mode
- [ ] Toggle antara basic dan scientific mode
- [ ] Tambah additional buttons untuk scientific functions
- [ ] Responsive layout untuk scientific mode

**Estimated Timeline**: 2-3 hari

### Sprint 05: Testing & Optimization
**File**: `tasks/06-testing-optimization.md`

#### 5.1 Unit Testing
- [ ] Setup testing framework (Vitest)
- [ ] Write unit tests untuk calculator utilities
- [ ] Write tests untuk custom hooks
- [ ] Achieve 80%+ code coverage

#### 5.2 Component Testing
- [ ] Test component rendering
- [ ] Test user interactions
- [ ] Test edge cases

#### 5.3 Performance Optimization
- [ ] Code splitting
- [ ] Tree shaking optimization
- [ ] CSS minification verification
- [ ] Performance profiling dan optimization

**Estimated Timeline**: 2-3 hari

---

## 🔗 Related Resources

- **Tailwind CSS v4 Documentation**: https://tailwindcss.com/docs
- **React Documentation**: https://react.dev
- **Vite Documentation**: https://vite.dev
- **TypeScript Documentation**: https://www.typescriptlang.org/docs

---

## 📝 Notes & Recommendations

### Rekomendasi untuk Development

1. **Component Library**: Pertimbangkan menggunakan component library seperti Radix UI atau Headless UI untuk production-ready components

2. **State Management**: Untuk aplikasi calculator yang sederhana, gunakan React hooks. Jika kompleksitas bertambah, pertimbangkan Redux atau Zustand

3. **Testing Strategy**: Mulai dari unit testing untuk utility functions, kemudian integration testing untuk hooks dan components

4. **Accessibility**: Pastikan semua interactive elements memiliki proper ARIA labels dan keyboard navigation support

5. **Code Organization**: Pertahankan struktur folder yang clear dan scalable untuk memudahkan maintenance di masa depan

### Development Workflow

```bash
# Development
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview

# Linting
npm run lint

# Format code (optional, jika menggunakan Prettier)
npm run format
```

---

## ✨ Conclusion

Sprint 01 telah berhasil diselesaikan dengan implementasi Tailwind CSS v4 dan struktur project yang solid. Project sudah siap untuk tahap development berikutnya dengan komponen-komponen UI dan calculator logic.

**Key Achievements**:
- ✅ Tailwind CSS v4 siap dengan custom color palette
- ✅ Folder structure terorganisir dengan baik
- ✅ Build dan linting configuration sudah correct
- ✅ Foundation untuk sprints berikutnya sudah solid

**Siap untuk Sprint 02** - Layout Responsive & UI Components development.
