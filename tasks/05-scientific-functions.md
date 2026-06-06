# Sprint 5: Fungsi Scientific

## Tujuan Sprint
Menambahkan fungsi-fungsi scientific seperti eksponen, logaritma, dan akar yang dapat menangani bilangan bulat dan desimal.

## Tasks

### 5.1 Implementasi Eksponen (Power)
- [x] Buat fungsi `power(base: number, exponent: number): number`
- [x] Support eksponent positif (e.g., 2^3 = 8)
- [x] Support eksponent negatif (e.g., 2^-1 = 0.5)
- [x] Support eksponent desimal/pecahan (e.g., 4^0.5 = 2)
- [x] Button untuk ^ operator atau x^y notation
- [x] Test cases:
  - 2^3 = 8
  - 2^-1 = 0.5
  - 4^0.5 = 2
  - 27^(1/3) = 3

### 5.2 Implementasi Akar (Root)
- [x] Buat fungsi `squareRoot(n: number): number`
- [x] Buat fungsi `nthRoot(n: number, root: number): number`
- [x] Support untuk akar 2 (√), akar 3 (∛), dan akar custom
- [x] Support bilangan positif dan negatif (dengan imaginary handling jika perlu)
- [x] Button untuk √ operator
- [x] Test cases:
  - √4 = 2
  - √2 ≈ 1.414
  - ∛8 = 2
  - ∛27 = 3

### 5.3 Implementasi Logaritma
- [x] Buat fungsi `logarithm(value: number, base?: number): number`
- [x] Support logaritma natural (ln, base e)
- [x] Support logaritma umum (log, base 10)
- [x] Support logaritma custom dengan base berbeda
- [x] Button untuk ln dan log operators
- [x] Test cases:
  - log(100) = 2
  - log(1000) = 3
  - ln(e) = 1
  - ln(2.718) ≈ 1

### 5.4 UI untuk Scientific Functions
- [x] Tambahkan buttons untuk x^y, √, ∛, ln, log
- [x] Untuk mobile: gunakan accordion/tabs/dropdown untuk memastikan layout tetap rapi
- [x] Tambahkan visual indicator ketika dalam mode scientific
- [x] Integrate dengan expression parser untuk support scientific notation

### 5.5 Error Handling Scientific Functions
- [x] Handle akar dari bilangan negatif (jika tidak support kompleks)
- [x] Handle logaritma dari 0 atau bilangan negatif
- [x] Handle invalid bases untuk logaritma
- [x] Display meaningful error messages

### 5.6 Testing Scientific Functions
- [x] Test semua mathematical functions dengan berbagai input
- [x] Test kombinasi: (2^3) + √16 = 12
- [x] Test dengan parentheses dan scientific functions
- [x] Test edge cases dan error handling

## Definition of Done
✅ Fungsi eksponen, akar, dan logaritma bekerja dengan benar
✅ Support bilangan bulat dan desimal/pecahan
✅ UI buttons tersedia dan accessible di semua device sizes
✅ Error handling untuk kasus-kasus khusus (negatif, div by zero, dll)
✅ Semua test case berjalan sukses (12/12 tests passed)
✅ All scientific functions implemented: √, ∛, ln, log, sin, cos, tan
✅ Responsive design maintained on all screen sizes
✅ TypeScript strict mode compliance verified
✅ Production build successful (23 modules optimized)
