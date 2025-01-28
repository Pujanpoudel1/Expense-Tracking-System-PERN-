
package Labtwo;

public class Rectangle extends Shape {
    private float length;
    private float breadth;

    Rectangle(float length, float breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    public float area() {
        return length * breadth;
    }

    public float perimeter() {
        return 2 * (length + breadth);
    }
}