package LabFive;

import java.io.IOException;
import java.io.RandomAccessFile;

public class RandomAccessFileReaderExample {
    public static void main(String[] args) {
        String filename = "example_random.bin";
        try (RandomAccessFile file = new RandomAccessFile(filename, "rw")) {
            // Write data at the start of the file
            file.writeBytes("Hello! This is the start of random write.\n");

            // Move the pointer to position 50 in the file
            file.seek(50);
            file.writeBytes("Random data at position 50.\n");

            // Move the pointer to position 100 in the file
            file.seek(100);
            file.writeBytes("Random data at position 100.\n");

            System.out.println("Random writing done.");
        } catch (IOException e) {
            System.err.println("Error writing to the file: " + e.getMessage());
        }

        try (RandomAccessFile file = new RandomAccessFile(filename, "r")) {
            // Read from the beginning of the file
            file.seek(0); // Go to position 0
            byte[] bytes = new byte[50];
            file.read(bytes);
            System.out.println("Reading from position 0: " + new String(bytes));

            // Read from position 50
            file.seek(50); // Go to position 50
            file.read(bytes);
            System.out.println("Reading from position 50: " + new String(bytes));

            // Read from position 100
            file.seek(100); // Go to position 100
            file.read(bytes);
            System.out.println("Reading from position 100: " + new String(bytes));
        } catch (IOException e) {
            System.err.println("Error reading the file: " + e.getMessage());
        }
    }
}
