package Labone;

public class Labone {

    // Method to calculate factorial of a number
    public int calFactorial(int number) {
        int factorial = 1;
        for (int i = 1; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }

    // Method to print the series
    public void printSeries(int length) {
        for (int i = 1; i <= length; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j);
            }
            System.out.println();
        }
    }

    // Main method to test the functionality
    public static void main(String[] args) {
        Labone lab = new Labone();

        // Calculate and print factorial of a number
        int number = 5;
        int result = lab.calFactorial(number);
        System.out.println("Factorial of " + number + " is: " + result);

        // Print the series
        int seriesLength = 5;
        System.out.println("Series:");
        lab.printSeries(seriesLength);
    }
}