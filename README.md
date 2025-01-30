
# Booth's Algorithm - Next.js Website

## Description

This is a **Booth’s Algorithm** implementation website built with **Next.js**, designed to help users understand and visualize the binary multiplication process for signed integers. Booth's Algorithm is an efficient way to multiply binary numbers, especially for numbers with mixed signs. This project helps users learn the algorithm's inner workings with a simple, interactive interface.

## Working

Booth's Algorithm works by processing the binary digits of two numbers, comparing them and shifting them step by step to compute the result. Here's a quick breakdown of the algorithm's mechanism:

1. **Initial Setup**: You start with two binary numbers. One is the multiplier, and the other is the multiplicand.
2. **Sign Extension**: Booth's Algorithm uses a signed binary number representation. Each number's sign is preserved using **sign extension**.
3. **Steps**:
   - Look at the last bit of the current number (known as the *Q0* bit) and compare it with the previous bit (the *Q-1* bit).
   - Based on the comparison, either:
     - Add the multiplicand to the accumulator.
     - Subtract the multiplicand from the accumulator.
     - Perform a simple shift operation.
4. **Repetition**: The process continues for a set number of steps (equal to the number of bits in the binary numbers).

After performing all the steps, the result will be available as the product of the multiplication in binary form.

## Algorithm Steps

1. **Input**: Two binary numbers (multiplicand and multiplier).
2. **Initialization**: 
   - Set an accumulator (A) to 0.
   - Set the multiplier (Q) and a previous bit (Q-1) to 0.
3. **Repeat** for `n` cycles (number of bits in the binary numbers):
   - Check the last bit of the multiplier (`Q0`) and the previous bit (`Q-1`).
   - Perform actions based on the combination of these two bits:
     - If `Q0 = 0` and `Q-1 = 1`, subtract the multiplicand from the accumulator.
     - If `Q0 = 1` and `Q-1 = 0`, add the multiplicand to the accumulator.
     - If `Q0 = Q-1`, just shift the entire number (accumulator and multiplier).
4. **Result**: After all cycles, the accumulator contains the final result of the multiplication in binary form.

## Features

- **Visual Representation**: Step-by-step animation of how the algorithm works.
- **Interactive Input**: Input any two binary numbers to see the process and result.
- **User-Friendly UI**: Easy-to-understand interface for both beginners and experienced users in binary arithmetic.
- **Real-Time Calculation**: Instant results and step-by-step explanations.

## Tech Stack

- **Next.js**: React-based framework used to build the website.
- **React**: For the front-end user interface.
- **CSS/SCSS**: For styling the application with a responsive design.
- **JavaScript**: For implementing the Booth’s Algorithm and managing interactive elements.

## Contribution

If you would like to contribute to this project, feel free to submit an issue, fork the repository, and create a pull request. Contributions are always welcome!

---
