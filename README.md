# Agricultural Performance Dashboard (React)

## 📌 Project Overview

This project is an **Interactive Dashboard developed in React** designed to analyze the performance of companies in the primary sector (agriculture). The tool simulates realistic environmental and production data to provide key insights for decision-making, such as crop yield efficiency, water usage sustainability, and financial profitability.

## 🎯 Motivation & Purpose

In the primary sector, companies operate in environments characterized by uncontrollable variables like climate and market fluctuations. The goal of this project is to provide a digital tool that:

1. **Integrates Data:** Combines environmental inputs (Temperature, Rainfall) with managerial decisions (Irrigation, Costs).

2. **Simulates Scenarios:** Uses a stochastic engine to generate realistic seasonal data for different crops (Corn, Wheat, Barley, Rice).

3. **Visualizes KPIs:** Offers clear, interactive charts to monitor **Yield (t/ha)**, **Water Use Efficiency (WUE)**, and **Gross Margin (€/ha)**.

This dashboard serves as a Decision Support System (DSS) prototype, demonstrating how digital tools can optimize resource management in agriculture.

## 🚀 Features

* **Multi-Crop Simulation:** Select between different crops (Corn, Wheat, Barley, Rice) with specific agronomic parameters.

* **Dynamic Data Engine:** Real-time generation of seasonal data based on realistic statistical distributions.

* **Interactive Charts:**

  * *Yield Analysis:* Dual-axis chart comparing Production vs. Temperature & Irrigation.

  * *Financial Analysis:* Bar chart comparing Operating Costs vs. Gross Margin.

* **Dark Mode Support:** Fully responsive UI with light/dark theme toggling.

* **Data Table:** Detailed monthly breakdown of all simulated metrics.

## 🛠️ Installation & Execution Guide

To compile and run the project locally on your computer, follow the steps below:

### Prerequisites

*   **Node.js** (version 16.0.0 or higher recommended)
    
*   **npm** (usually installed along with Node.js)
    

### 1\. Environment Preparation

Once the project folder is downloaded, open the terminal or command prompt inside the main directory (where the package.json file is located).

### 2\. Install Dependencies

Run the following command to download all necessary libraries (React, Tailwind CSS, Recharts, Lucide-React):

`  npm install   `

### 3\. Run in Development Mode

To start the application locally and see changes in real-time:

`   npm run dev   `

After starting, the terminal will indicate a local address (usually http://localhost:5173). Copy the address into your browser to view the dashboard.

### 4\. Build for Production

If you wish to generate optimized files for publication on a web server:

`   npm run build   `

This command will create a folder named dist/ containing the static files (.html, .js, .css) ready for deployment.

## 🛠️ Technologies Used

* **Frontend Framework:** React (Vite)

* **Styling:** Tailwind CSS (Utility-first CSS framework)

* **Data Visualization:** Recharts (Composable charting library)

* **Icons:** Lucide-React

## 👤 Author

**Created by:** [Giovanni Russo]
**Course:** Informatica per le Aziende Digitali (L-31)
**Project Work:** Project Work - Development of a JavaScript Dashboard for Primary Sector Performance Analysis.

*Generated for academic purposes as part of the thesis project.*