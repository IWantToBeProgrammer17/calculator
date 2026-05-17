# Sprint 5: Fungsi Scientific

## Tujuan Sprint
Menambahkan fungsi-fungsi scientific seperti eksponen, logaritma, dan akar yang dapat menangani bilangan bulat dan desimal.

## Tasks

### 5.1 Implementasi Eksponen (Power)
- [ ] Buat fungsi `power(base: number, exponent: number): number`
- [ ] Support eksponent positif (e.g., 2^3 = 8)
- [ ] Support eksponent negatif (e.g., 2^-1 = 0.5)
- [ ] Support eksponent desimal/pecahan (e.g., 4^0.5 = 2)
- [ ] Button untuk ^ operator atau x^y notation
- [ ] Test cases:
  - 2^3 = 8
  - 2^-1 = 0.5
  - 4^0.5 = 2
  - 27^(1/3) = 3

### 5.2 Implementasi Akar (Root)
- [ ] Buat fungsi `squareRoot(n: number): number`
- [ ] Buat fungsi `nthRoot(n: number, root: number): number`
- [ ] Support untuk akar 2 (√), akar 3 (∛), dan akar custom
- [ ] Support bilangan positif dan negatif (dengan imaginary handling jika perlu)
- [ ] Button untuk √ operator
- [ ] Test cases:
  - √4 = 2
  - √2 ≈ 1.414
  - ∛8 = 2
  - ∛27 = 3

### 5.3 Implementasi Logaritma
- [ ] Buat fungsi `logarithm(value: number, base?: number): number`
- [ ] Support logaritma natural (ln, base e)
- [ ] Support logaritma umum (log, base 10)
- [ ] Support logaritma custom dengan base berbeda
- [ ] Button untuk ln dan log operators
- [ ] Test cases:
  - log(100) = 2
  - log(1000) = 3
  - ln(e) = 1
  - ln(2.718) ≈ 1

### 5.4 UI untuk Scientific Functions
- [ ] Tambahkan buttons untuk x^y, √, ∛, ln, log
- [ ] Untuk mobile: gunakan accordion/tabs/dropdown untuk memastikan layout tetap rapi
- [ ] Tambahkan visual indicator ketika dalam mode scientific
- [ ] Integrate dengan expression parser untuk support scientific notation

### 5.5 Error Handling Scientific Functions
- [ ] Handle akar dari bilangan negatif (jika tidak support kompleks)
- [ ] Handle logaritma dari 0 atau bilangan negatif
- [ ] Handle invalid bases untuk logaritma
- [ ] Display meaningful error messages

### 5.6 Testing Scientific Functions
- [ ] Test semua mathematical functions dengan berbagai input
- [ ] Test kombinasi: (2^3) + √16 = 12
- [ ] Test dengan parentheses dan scientific functions
- [ ] Test edge cases dan error handling

## Definition of Done
✅ Fungsi eksponen, akar, dan logaritma bekerja dengan benar
✅ Support bilangan bulat dan desimal/pecahan
✅ UI buttons tersedia dan accessible di semua device sizes
✅ Error handling untuk kasus-kasus khusus (negatif, div by zero, dll)
✅ Semua test case berjalan sukses
