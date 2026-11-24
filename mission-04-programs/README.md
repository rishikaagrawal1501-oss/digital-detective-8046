
## Mission 4 — How Programs Run

### Task 4.1 — Create and Run a Python Program

Created a Python file named `hello.py` that displays the message:

Hello from Python

**Command used:**
```bash
python3 hello.py
```

**Understanding:**

Python programs contain instructions written in Python language. The Python interpreter reads and executes these instructions. The output is displayed in the terminal.

**Difficulty faced:**

Initially, understanding how to create and execute a Python file using the terminal was challenging. After practising the commands, I successfully executed the program.

### Task 4.2 — Compare Compilers and Interpreters

| Point | Compiler | Interpreter |
|---|---|---|
| When translation happens | Before program execution | During program execution |
| Typical output | Translated code or executable file | Usually no separate executable file |
| One example | GCC (C Compiler) | Python Interpreter |
| One advantage | Compiled programs can run efficiently | Easy to test and execute code directly |

**Explanation:**

A compiler translates the source code into another form before the program runs. An interpreter reads and executes the code during runtime. A compiler can produce an executable program, whereas an interpreter generally executes instructions directly. Both are used to convert programming instructions into actions that a computer can perform.

### Task 4.3 — Understand Variables

Created a Python file named `variable.py` that demonstrates variables:

```python
name = "Rishika"
age = 18
course = "Python"

print("My name is", name)
print("My age is", age)
print("I am learning", course)
```

**Output:**

```
My name is Rishika
My age is 18
I am learning Python
```

**Understanding:**

Variables store data in a computer's memory. In Python, variables are created when a value is assigned to them. They can hold different types of data such as text, numbers, and more.

**Difficulty faced:**

Initially, I had to understand how to store and display different data types in variables. After practising with the example code, I gained a better understanding of variables.

### Task 4.4 — Explain Different Types of Programming Languages

| Programming language type | Explanation | Example |
|---|---|---|
| Machine language | Binary code instructions directly understandable by the computer's CPU. | 00101101 |
| Assembly language | Low-level language using mnemonics to represent machine instructions. | ADD, MOV |
| High-level language | Human-readable language with English-like syntax and structure. | Python, Java |
| Natural language | Everyday human language used to describe tasks. | English, Hindi |

**Example code in high-level language:**
```python
name = "Rishika"
age = 18
print("My name is", name, "and I am", age, "years old")
```

**Understanding:**

Programming languages help humans communicate instructions to computers. Each type has different levels of abstraction and readability. High-level languages are easier to write and understand, while machine language is directly executed by the computer.

**Difficulty faced:**

The main difficulty was understanding that different languages have different levels of abstraction. After practising and reviewing the examples, I gained a better understanding of the differences between language types.




### Task 5.3 — Number Converter

Created a Python program named number_converter.py.

The program:
- Accepts a positive decimal number.
- Converts it into binary using bin().
- Converts it into hexadecimal using hex().
- Displays both conversion results.

### Understanding the conversion functions

- bin(): Converts an integer into a binary string.
- hex(): Converts an integer into a hexadecimal string.

### Testing

Tested the program with 13, 25 and 100.
All three conversions produced the expected results.



### Task 5.4 — How Is Text Stored?

**1. Find the ASCII decimal codes for uppercase A and lowercase a.**

- Uppercase A = 65
- Lowercase a = 97

**2. Why does a computer need an encoding standard to store text?**

A computer stores information in binary form (0s and 1s). An encoding standard assigns numerical values to characters so that computers can store, process and display text correctly and consistently.

**3. Name one example of a character that is not part of basic ASCII.**

The emoji 😊 is not part of basic ASCII.


