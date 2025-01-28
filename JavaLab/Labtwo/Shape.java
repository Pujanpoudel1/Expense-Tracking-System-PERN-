
package Labtwo;

public abstract class Shape {
    public abstract float area();

    public abstract float perimeter();

    public static void main(String[] args) {
        Circle circle = new Circle(34);
        System.out.println("The area of circle is " + circle.area());

        Rectangle rectangle = new Rectangle(3, 4);
        System.out.println("The area of rectangle is " + rectangle.area());

        System.out.println("The perimeter of rectangle is " + rectangle.perimeter());
        System.out.println("The perimeter of circle is " + circle.perimeter());

    }
}