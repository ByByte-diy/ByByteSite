# Product Sense — STEM Robotics Domain Knowledge

> **Purpose:** Provide context about the educational robotics domain so AI agents make informed decisions.
> **Last updated:** 2025-07-20

## Domain Overview

ByByte.DIY teaches **robotics and programming** through hands-on projects. The educational model is:

**Theory → Practical build → Code → Experiment**

## Hardware Platforms

| Platform | Type | Typical Use | Cost |
|---|---|---|---|
| **Arduino** (Uno, Nano, Mega) | Microcontroller | Beginner robotics, LED/sensor control | $5-30 |
| **ESP32** | Microcontroller + WiFi/BT | IoT projects, wireless control | $5-15 |
| **ESP8266** | Microcontroller + WiFi | Low-cost IoT, smart home | $2-8 |
| **Raspberry Pi** | Single-board computer | Advanced robotics, computer vision, Linux | $35-80 |
| **ByByte Nano** | Custom Arduino-compatible | ByByte beginner kit | Kit price |
| **ByByte Mega** | Custom Arduino-compatible | ByByte advanced kit | Kit price |

## ByByte Hardware Ecosystem

| Product | Description |
|---|---|
| **ByByte Nano** | Entry-level robotics board, Arduino-compatible |
| **ByByte Mega** | Advanced board with more I/O, Arduino-compatible |
| **ByByte NanoBoy** | Handheld game console build based on Nano |
| **ByByte Nano Assembly Guide** | `/build` page — step-by-step assembly |

## Difficulty Levels

| Level | Prerequisites | Topics |
|---|---|---|
| **Beginner** | None | Pin control, blinking LED, buttons, basic sensors |
| **Intermediate** | Basic programming | PWM, interrupts, I2C, serial communication |
| **Advanced** | Solid programming + electronics | RTOS, networking, PID control, custom PCBs |

## Common Lesson Topics

- Digital I/O (LED, button, buzzer)
- Analog sensors (potentiometer, photoresistor, temperature)
- Motor control (DC motor, servo, stepper)
- Displays (LCD, OLED, 7-segment)
- Communication (I2C, SPI, UART, WiFi, Bluetooth)
- Sensors (ultrasonic, infrared, accelerometer, gyroscope)
- Actuators (relay, solenoid, motor driver)

## Educational Approach

- **Project-based** — Each lesson produces a working project
- **Incremental complexity** — Each lesson builds on previous concepts
- **Code explanations** — Every line of code is explained
- **Experiments** — "What happens if you change X?" sections
- **Troubleshooting** — Common mistakes and how to fix them

## Competitor / Reference Landscape

| Platform | Differentiator |
|---|---|
| **Arduino Project Hub** | Official Arduino projects, English-only |
| **Adafruit Learn** | High-quality tutorials, English-only |
| **SparkFun Tutorials** | Electronics-focused, English-only |
| **Tinkercad Circuits** | Simulator-based, limited depth |
| ** instructables ** | Community projects, inconsistent quality |
| **ByByte.DIY** | Multi-language, structured curriculum, free |

## Content Strategy

- **Quality over quantity** — Fewer, well-tested lessons rather than many shallow ones
- **Translation-first** — Every lesson available in all supported languages simultaneously
- **Platform-agnostic core** — Core concepts taught once, applied across platforms
- **Visual learning** — Diagrams, schematics, and photos complement text

## See Also

- [`design-docs/content-architecture.md`](design-docs/content-architecture.md) — Lesson content model
- [`product-specs/lessons-content-guide.md`](product-specs/lessons-content-guide.md) — Author-facing guide
