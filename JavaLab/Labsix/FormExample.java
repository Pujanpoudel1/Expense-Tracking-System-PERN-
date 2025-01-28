package Labsix;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class FormExample {
    public static void main(String[] args) {
        // Create the frame for the form
        JFrame frame = new JFrame("AWT/Swing Form Example");

        // Set the size of the frame
        frame.setSize(400, 400);

        // Set the layout manager for the frame
        frame.setLayout(new FlowLayout());

        // Exit the application when the window is closed
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Create various Swing controls

        // 1. JLabel (Label to guide the user)
        JLabel label1 = new JLabel("Enter your name:");

        // 2. JTextField (Text box for input)
        JTextField textField = new JTextField(20);

        // 3. JButton (Button for submission)
        JButton submitButton = new JButton("Submit");

        // 4. JCheckBox (Checkbox for agreement)
        JCheckBox agreeCheckBox = new JCheckBox("I agree to the terms and conditions");

        // 5. JRadioButton (Radio button for gender selection)
        JRadioButton maleRadioButton = new JRadioButton("Male");
        JRadioButton femaleRadioButton = new JRadioButton("Female");

        // 6. ButtonGroup (Grouping radio buttons together to select only one)
        ButtonGroup genderGroup = new ButtonGroup();
        genderGroup.add(maleRadioButton);
        genderGroup.add(femaleRadioButton);

        // 7. JComboBox (Combo box for selecting an item from a list)
        String[] countries = { "USA", "India", "Nepal", "UK", "Australia" };
        JComboBox<String> countryComboBox = new JComboBox<>(countries);

        // 8. JTextArea (Text area for multi-line input)
        JTextArea textArea = new JTextArea(5, 20);

        // 9. JScrollPane (Scrollable area for text area)
        JScrollPane scrollPane = new JScrollPane(textArea);

        // 10. JPasswordField (Password field for secure input)
        JPasswordField passwordField = new JPasswordField(20);

        // 11. JLabel for displaying selected item in the combo box
        JLabel selectedCountryLabel = new JLabel("Selected Country: None");

        // Event handling for the button click
        submitButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String name = textField.getText();
                boolean isAgreed = agreeCheckBox.isSelected();
                String gender = maleRadioButton.isSelected() ? "Male"
                        : (femaleRadioButton.isSelected() ? "Female" : "Not selected");
                String country = (String) countryComboBox.getSelectedItem();
                String password = new String(passwordField.getPassword());

                String message = "Name: " + name + "\nGender: " + gender + "\nCountry: " + country +
                        "\nAgreed: " + isAgreed + "\nPassword: " + password;

                JOptionPane.showMessageDialog(frame, message, "Form Submission", JOptionPane.INFORMATION_MESSAGE);
            }
        });

        // Event handling for the combo box (display selected country)
        countryComboBox.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String selectedCountry = (String) countryComboBox.getSelectedItem();
                selectedCountryLabel.setText("Selected Country: " + selectedCountry);
            }
        });

        // Add components to the frame
        frame.add(label1);
        frame.add(textField);
        frame.add(submitButton);
        frame.add(agreeCheckBox);
        frame.add(maleRadioButton);
        frame.add(femaleRadioButton);
        frame.add(countryComboBox);
        frame.add(scrollPane);
        frame.add(passwordField);
        frame.add(selectedCountryLabel);

        // Set the form visible
        frame.setVisible(true);
    }
}
