
package Labtwo;

public class Circle extends Shape {
    float radius;

    Circle(float radius) {
        this.radius = radius;
    }

    public float area() {
        return 3.14F * radius * radius;
    }

    public float perimeter() {
        return 2F * 3.14F * radius;
    }
}
