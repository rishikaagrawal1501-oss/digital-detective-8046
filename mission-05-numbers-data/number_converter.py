
print("===== NUMBER CONVERTER =====")

number = int(input("Enter a positive decimal number: "))

if number > 0:
    binary = bin(number)
    hexadecimal = hex(number)

    print("\nConversion Results:")
    print("Decimal:", number)
    print("Binary:", binary[2:])
    print("Hexadecimal:", hexadecimal[2:].upper())
else:
    print("Please enter a positive number.")

