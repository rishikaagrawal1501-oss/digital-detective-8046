TASK 5.1 — CONVERT NUMBERS BY HAND

1. Convert decimal 13 to binary.

13 ÷ 2 = 6, remainder 1
6 ÷ 2 = 3, remainder 0
3 ÷ 2 = 1, remainder 1
1 ÷ 2 = 0, remainder 1

Answer: (13)₁₀ = (1101)₂


2. Convert decimal 25 to binary.

25 ÷ 2 = 12, remainder 1
12 ÷ 2 = 6, remainder 0
6 ÷ 2 = 3, remainder 0
3 ÷ 2 = 1, remainder 1
1 ÷ 2 = 0, remainder 1

Answer: (25)₁₀ = (11001)₂


3. Convert binary 1010 to decimal.

= 1 × 2³ + 0 × 2² + 1 × 2¹ + 0 × 2⁰
= 8 + 0 + 2 + 0
= 10

Answer: (1010)₂ = (10)₁₀


4. Convert binary 1101 to decimal.

= 1 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰
= 8 + 4 + 0 + 1
= 13

Answer: (1101)₂ = (13)₁₀


5. Convert hexadecimal A to decimal.

A = 10

Answer: (A)₁₆ = (10)₁₀


6. Convert hexadecimal 1F to decimal.

= 1 × 16¹ + 15 × 16⁰
= 16 + 15
= 31

Answer: (1F)₁₆ = (31)₁₀


7. Convert binary 1111 to hexadecimal.

1111 in binary = 15 in decimal
15 in hexadecimal = F

Answer: (1111)₂ = (F)₁₆


TASK 5.2 — VERIFY USING PYTHON

Python built-in conversion functions were used to verify
the manual calculations from Task 5.1.

1. bin(13) = 0b1101
   Result: Matches manual calculation.

2. bin(25) = 0b11001
   Result: Matches manual calculation.

3. int("1010", 2) = 10
   Result: Matches manual calculation.

4. int("1101", 2) = 13
   Result: Matches manual calculation.

5. hex(10) = 0xa
   Result: Matches manual calculation.

6. hex(31) = 0x1f
   Result: Matches manual calculation.

7. hex(int("1111", 2)) = 0xf
   Result: Matches manual calculation.

Conclusion:
All Python conversion results match the manual calculations.