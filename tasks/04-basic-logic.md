# Sprint 4: Logika Kalkulator Dasar

## Tujuan Sprint
Implementasi logika perhitungan dasar dan operator untuk kalkulator bekerja dengan baik.

## Tasks

### 4.1 Implementasi Evaluator Matematika
- [ ] Buat `src/utils/calculator.ts` untuk logic calculator
- [ ] Implementasi parsing untuk:
  - Angka bulat dan desimal (float)
  - Kurung/parentheses
  - Operator dasar: +, -, *, /
- [ ] Gunakan mathematical expression parser atau regex untuk parsing
- [ ] Validasi input expression

### 4.2 Operasi Dasar
- [ ] Implementasi fungsi untuk addition (+)
- [ ] Implementasi fungsi untuk subtraction (-)
- [ ] Implementasi fungsi untuk multiplication (*)
- [ ] Implementasi fungsi untuk division (/)
- [ ] Implementasi operator precedence (perkalian dan pembagian lebih dahulu)
- [ ] Implementasi parentheses/kurung untuk override precedence

### 4.3 Button Click Handlers
- [ ] Handle number button clicks
- [ ] Handle operator button clicks
- [ ] Handle equals button (=) untuk evaluate expression
- [ ] Handle clear button (C) untuk reset
- [ ] Handle delete/backspace (DEL) untuk hapus karakter terakhir
- [ ] Handle decimal point (.)

### 4.4 Edge Cases & Error Handling
- [ ] Handle division by zero
- [ ] Handle invalid expressions (e.g., "5++3")
- [ ] Handle multiple decimal points in one number
- [ ] Handle leading zeros
- [ ] Display user-friendly error messages

### 4.5 Testing Logika
- [ ] Test operasi dasar: 5 + 3 = 8
- [ ] Test operasi dengan multiple operators: 2 + 3 * 4 = 14 (bukan 20)
- [ ] Test dengan parentheses: (2 + 3) * 4 = 20
- [ ] Test division: 10 / 2 = 5
- [ ] Test dengan decimal: 3.5 + 2.1 = 5.6
- [ ] Test error handling untuk edge cases

## Definition of Done
✅ Operasi dasar (+, -, *, /) bekerja dengan benar
✅ Operator precedence diimplementasikan dengan baik
✅ Parentheses/kurung berfungsi dengan benar
✅ Error handling menampilkan pesan yang jelas
✅ Semua test case berjalan sukses
