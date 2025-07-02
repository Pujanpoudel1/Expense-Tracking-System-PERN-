package Labone;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");

        // Variable declaration
        int age;
        double salary;
        String name;

        // Value assignment
        age = 25;
        salary = 55000.50;
        name = "John Doe";

        // Print variables
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Salary: $" + salary);

        // Primitive data types
        byte smallNumber = 127; // Range: -128 to 127
        short shortNumber = 32000;
        int integerNumber = 100000;
        long longNumber = 1234567890L;
        float floatNumber = 3.14f;
        double doubleNumber = 123.456;
        char character = 'A';
        boolean isJavaFun = true;

        // Display data types
        System.out.println("Byte: " + smallNumber);
        System.out.println("Short: " + shortNumber);
        System.out.println("Int: " + integerNumber);
        System.out.println("Long: " + longNumber);
        System.out.println("Float: " + floatNumber);
        System.out.println("Double: " + doubleNumber);
        System.out.println("Char: " + character);
        System.out.println("Boolean: " + isJavaFun);

        // Implicit casting (small to large type)
        int num = 10;
        double numDouble = num; // Automatically converts to double
        System.out.println("Implicit Casting (int to double): " + numDouble);

        // Explicit casting (large to small type)
        double largeNum = 9.78;
        int smallNum = (int) largeNum; // Manually cast
        System.out.println("Explicit Casting (double to int): " + smallNum);

        int a = 10, b = 5;

        // Arithmetic Operators
        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Modulus: " + (a % b));

        // Relational Operators
        System.out.println("a > b: " + (a > b));
        System.out.println("a == b: " + (a == b));

        // Logical Operators
        System.out.println("Logical AND: " + (a > 5 && b < 10));
        System.out.println("Logical OR: " + (a < 5 || b > 2));

        String str = "Hello, World!";

        // String methods
        System.out.println("Length: " + str.length());
        System.out.println("Uppercase: " + str.toUpperCase());
        System.out.println("Lowercase: " + str.toLowerCase());
        System.out.println("Substring: " + str.substring(7));
        System.out.println("Character at index 4: " + str.charAt(4));
        System.out.println("Replace 'World' with 'Java': " + str.replace("World", "Java"));

        // Declare and initialize an array
        int[] numbers = { 10, 20, 30, 40, 50 };

        // Print array elements
        for (int numb : numbers) {
            System.out.println(numb);
        }
    }
}