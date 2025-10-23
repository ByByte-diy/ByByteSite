---
title: Blinking LED
slug: blink
lang: en
platforms: 
  - arduino
level: beginner
tags: 
  - led
  - digital outputs
published: true
version: 1.0.0
description: Classic example with a blinking LED for Arduino.
---

# Blinking LED

This lesson is a classic example for beginners learning Arduino. We'll learn how to control an LED, making it blink at a specific interval.

## Required Components

- Arduino Uno or compatible board
- LED (any color)
- 220 Ohm resistor
- Breadboard
- Jumper wires

## Connection Diagram

1. Connect the long leg of the LED (anode) to digital pin 13 of the Arduino through a 220 Ohm resistor.
2. Connect the short leg of the LED (cathode) to the GND pin (ground) of the Arduino.

![LED Connection Diagram](/content/assets/img/arduino_blink.png)

## Program Code

```arduino
// Define the pin that the LED is connected to
const int ledPin = 13;

void setup() {
  // Initialize digital pin as an output
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);   // Turn on the LED (HIGH = 5V)
  delay(1000);                  // Wait for 1 second
  digitalWrite(ledPin, LOW);    // Turn off the LED (LOW = 0V)
  delay(1000);                  // Wait for 1 second
}
```

## Code Explanation

1. `const int ledPin = 13;` - Define a constant for the pin that the LED is connected to.
2. `void setup()` - Function that runs once when the Arduino starts.
3. `pinMode(ledPin, OUTPUT);` - Set the pin as an output.
4. `void loop()` - Function that runs repeatedly after setup() is complete.
5. `digitalWrite(ledPin, HIGH);` - Set a high voltage level (5V) on the pin, turning on the LED.
6. `delay(1000);` - Delay for 1000 milliseconds (1 second).
7. `digitalWrite(ledPin, LOW);` - Set a low voltage level (0V) on the pin, turning off the LED.

## Experiments

1. Try changing the delay time to make the LED blink faster or slower.
2. Add another LED and make them blink alternately.
3. Create a sequence of blinks, for example, three short and one long (like an SOS signal in Morse code).

## Conclusion

Congratulations! You have successfully created your first Arduino project. This simple example demonstrates the basic principles of working with digital outputs and time delays, which are fundamental to many Arduino projects.

## Additional Resources

- [Official Arduino Documentation](https://www.arduino.cc/reference/en/)
- [More Projects for Beginners](https://github.com/ByByte-diy/ByByteMega/wiki/Lessons)
