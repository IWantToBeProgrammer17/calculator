# Sprint 4: Logika Kalkulator Dasar

## Tujuan Sprint
Implementasi logika perhitungan dasar dan operator untuk kalkulator bekerja dengan baik.

## Tasks

### 4.1 Implementasi Evaluator Matematika
- [x] Buat `src/utils/calculator.ts` untuk logic calculator
- [x] Implementasi parsing untuk:
  - Angka bulat dan desimal (float)
  - Kurung/parentheses
  - Operator dasar: +, -, *, /
- [x] Gunakan mathematical expression parser atau regex untuk parsing
- [x] Validasi input expression

### 4.2 Operasi Dasar
- [x] Implementasi fungsi untuk addition (+)
- [x] Implementasi fungsi untuk subtraction (-)
- [x] Implementasi fungsi untuk multiplication (*)
- [x] Implementasi fungsi untuk division (/)
- [x] Implementasi operator precedence (perkalian dan pembagian lebih dahulu)
- [x] Implementasi parentheses/kurung untuk override precedence

### 4.3 Button Click Handlers
- [x] Handle number button clicks
- [x] Handle operator button clicks
- [x] Handle equals button (=) untuk evaluate expression
- [x] Handle clear button (C) untuk reset
- [x] Handle delete/backspace (DEL) untuk hapus karakter terakhir
- [x] Handle decimal point (.)

### 4.4 Edge Cases & Error Handling
- [x] Handle division by zero
- [x] Handle invalid expressions (e.g., "5++3")
- [x] Handle multiple decimal points in one number
- [x] Handle leading zeros
- [x] Display user-friendly error messages

### 4.5 Testing Logika
- [x] Test operasi dasar: 5 + 3 = 8
- [x] Test operasi dengan multiple operators: 2 + 3 * 4 = 14 (bukan 20)
- [x] Test dengan parentheses: (2 + 3) * 4 = 20
- [x] Test division: 10 / 2 = 5
- [x] Test dengan decimal: 3.5 + 2.1 = 5.6
- [x] Test error handling untuk edge cases

## Definition of Done
✅ Operasi dasar (+, -, *, /) bekerja dengan benar
✅ Operator precedence diimplementasikan dengan baik
✅ Parentheses support untuk override precedence
✅ Keyboard support: Numbers, Operators, Enter=Calculate, Backspace=Delete, Escape=Clear
✅ Error handling untuk edge cases (division by zero, invalid expressions, multiple decimals)
✅ User-friendly error messages displayed in UI
✅ All test cases passed
✅ Code builds without errors

## Implementation Details

### Parser Architecture (Recursive Descent)
- **Tokenization**: Converts expression string to tokens (numbers, operators, parentheses)
- **Operator Precedence**: Implemented via 3-level recursive descent parser
  - Level 1: Addition/Subtraction (lowest precedence)
  - Level 2: Multiplication/Division (higher precedence)
  - Level 3: Numbers and Parentheses (highest precedence)
- **Error Handling**: CalculatorError class for validation errors

### Keyboard Bindings
- **Numbers (0-9)** and **Operators** (+, -, *, /, (, )): Direct input
- **Enter**: Calculate expression
- **Backspace**: Delete last character
- **Escape**: Clear all

### Test Results
| Test Case | Input | Expected | Actual | Status |
|-----------|-------|----------|--------|--------|
| Basic Addition | 5 + 3 = | 8 | 8 | ✓ |
| Operator Precedence | 2 + 3 * 4 = | 14 | 14 | ✓ |
| Parentheses | (2 + 3) * 4 = | 20 | 20 | ✓ |
| Decimal Addition | 3.5 + 2.1 = | 5.6 | 5.6 | ✓ |
| Division by Zero | 5 / 0 = | Error | "Division by zero" | ✓ |
| Invalid Expression | 5++3 = | Error | "Unexpected token: +" | ✓ |
| Keyboard Support | 10+5 Enter | 15 | 15 | ✓ |
| Square Root | 9 √ | 3 | 3 | ✓ |
✅ Parentheses/kurung berfungsi dengan benar
✅ Error handling menampilkan pesan yang jelas
✅ Semua test case berjalan sukses
