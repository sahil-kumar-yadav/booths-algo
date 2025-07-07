# ⚙️ Booth's Algorithm Visualizer - Built with Next.js

![Booth's Algorithm Banner](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Booth%27s_algorithm.svg/1200px-Booth%27s_algorithm.svg.png)

> **A powerful visual tool to learn and simulate Booth’s Algorithm for signed binary multiplication.**

---

## 📖 Description

Welcome to the **Booth’s Algorithm Visualizer**, an educational web application built using **Next.js** that allows users to explore and understand the inner workings of Booth's binary multiplication algorithm. Through an intuitive UI and real-time visualizations, users can step through the algorithm and see how binary multiplication happens behind the scenes.

---

## 🚀 Live Demo

🔗 [View Live Website](https://your-deployment-link.com)
📂 [View the Repository](https://github.com/your-repo-link)

---

## 🧠 What is Booth's Algorithm?

Booth's Algorithm is an efficient method for multiplying **signed binary numbers** in **two's complement** representation.

### 👣 Algorithm Workflow

1. **Initialize**

   * Accumulator `A` = 0
   * Multiplier `Q` = binary input
   * Multiplicand `M` = binary input
   * Previous bit `Q-1` = 0

2. **Repeat** for `n` steps:

   * Analyze `Q0` and `Q-1`

     * `10`: Add `M` to `A`
     * `01`: Subtract `M` from `A`
     * `00` or `11`: No operation
   * Perform an **Arithmetic Right Shift** on `A`, `Q`, and `Q-1`

3. **Result**: After `n` cycles, concatenate `A` and `Q` to get the final binary product.

---

## 💡 Example

### Input:

* **Multiplicand (M)**: `0110` (6)
* **Multiplier (Q)**: `1101` (-3 in two’s complement)

### Output:

```
Step-by-step execution...
Final Result (Binary): 11101110
Final Result (Decimal): -18
```

> The algorithm dynamically handles signed binary multiplication using arithmetic shifts and conditional operations based on bit comparisons.

---

## ✨ Features

| Feature                    | Description                                                     |
| -------------------------- | --------------------------------------------------------------- |
| 🎞️ Step-by-Step Animation | Visual walkthrough of each cycle of Booth’s algorithm.          |
| 🎯 Real-Time Input         | Enter your own binary numbers and see instant calculations.     |
| 🖥️ Interactive UI         | Built for ease of understanding for both beginners and experts. |
| 📱 Responsive Design       | Mobile and desktop friendly.                                    |

---

## 🛠️ Tech Stack

| Tech          | Description                             |
| ------------- | --------------------------------------- |
| 🧪 Next.js    | React-based framework for SSR & routing |
| ⚛️ React      | For building the dynamic UI components  |
| 🎨 SCSS/CSS   | Styling with responsive design support  |
| 📐 JavaScript | Algorithm logic and state management    |

---

## 📸 Screenshots

### 🎬 Input View

![Input Screenshot](https://via.placeholder.com/600x300.png?text=Input+Screen)

### 🔄 Step-by-Step Visualization

![Steps Screenshot](https://via.placeholder.com/600x300.png?text=Step+Visualization)

---

## 🤝 Contribution

We welcome all contributions! 🙌

1. Fork the repository
2. Create a new branch
3. Submit a pull request

📢 **Issues and suggestions** are also highly appreciated!

---

## 📜 License

MIT License © [Your Name](https://github.com/your-profile)

---

## 🧭 Navigate

* [x] Booth’s Algorithm Visual Explanation
* [x] Binary Input Conversion
* [x] Signed Multiplication Handling
* [x] Educational Use Case

---

