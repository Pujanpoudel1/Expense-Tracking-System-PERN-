
package Labtwo;

import java.util.Scanner;

// User-defined exception handling
class InvalidAgeException extends Exception {
    InvalidAgeException(String message) {
        super(message);
    }
}

public class ExceptionHandling {
    public static void main(String[] args) {
        InvalidAgeException();
        divideByZeroException();
        multipleCatchBlocks();
    }

    // Example of exception handling with multiple catch blocks
    static void multipleCatchBlocks() {
        try {
            int[] arr = new int[5];
            // System.out.println("The element in index 10 is : " + arr[10]);
            arr[10] = 10 / 0;

        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("ArrayIndexOutOfBounds :: Accessed index out of bounds");
        } catch (ArithmeticException e1) {
            System.out.println("Arithmetic Exception :: Divide by zero");
        } catch (Exception e2) {
            System.out.println("Error: " + e2.getMessage());
        } finally {
            System.out.println("Finally block");
        }
    }

    // Example of divide-by-zero exception handling
    static void divideByZeroException() {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter the first number: ");
            int num1 = sc.nextInt();

            System.out.print("Enter the second number: ");
            int num2 = sc.nextInt();

            try {
                int result = num1 / num2;
                System.out.println("The result is: " + result);
            } catch (ArithmeticException e) {
                System.out.println("Error: " + e.getMessage());
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static void InvalidAgeException() {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter your age: ");
        int age = sc.nextInt();

        try {
            if (age >= 18)
                System.out.println("You are eligible for voting.");
            else
                throw new InvalidAgeException("InvalidAge :: Age must be 18 or above.");
        } catch (InvalidAgeException e) {
            System.out.println("Error: " + e.getMessage());
        }
        sc.close();
    }
}