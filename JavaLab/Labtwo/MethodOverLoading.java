
package Labtwo;

public class MethodOverLoading {

    public static float add(float num1, float num2) {
        return num1 + num2;
    }

    public static float add(float num1, float num2, float num3) {
        return num1 + num2 + num3;
    }

    public static int add(int num1, int num2) {
        return num1 + num2;
    }

    public static void main(String[] args) {
        System.out.println("The sum of 2 & 3 is " + add(2F, 3F));
        System.out.println("The sum of 5 & 10 is " + add(5, 10));
        System.out.println("The sum of 2 & 3 & 5.5 is " + add(2F, 3F, 5.5F));
    }
}