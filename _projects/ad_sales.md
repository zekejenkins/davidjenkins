---
layout: single
title: "Sales Performance Analysis"
permalink: /projects/sales_performance/
author_profile: true
---

## Overview

This project uses the **Advertising Dataset** to explore the relationship between advertising expenditures (TV, Radio, Newspaper) and sales performance. The analysis involves scatterplots, regression modeling, and insights to optimize advertising budgets.

By completing this analysis, I was able to:
- Quantify the relationship between total advertising spend and sales.
- Determine which advertising medium has the greatest impact on sales.
- Provide actionable insights for reallocating advertising budgets.
- Predict sales performance under different budget scenarios.

---

## Features

- **Scatterplot Analysis**:
  - Visualizes the relationship between advertising spend and sales.
  - Includes Total Ad Spend vs. Sales and medium-specific plots (e.g., TV, Radio, Newspaper).
- **Regression Modeling**:
  - Predicts sales using ad spend variables.
  - Measures the significance of each advertising medium.
- **Actionable Insights**:
  - Identifies the most effective ad spend strategy.
  - Recommends reallocating budget from Newspaper to TV and Radio.

---

## Regression Results

### Summary Statistics:
- **R²**: 0.9026 (90.26% of variation in sales explained by ad spend).
- **Adjusted R²**: 0.9011 (adjusted for predictors).
- **Standard Error**: 1.66 (low residual error).

### Coefficients and Insights:
- **TV Ad Spend**: \( 0.0544 \) (statistically significant, p < 0.05) – $1,000 increase in TV ad spend results in ~54.44 units increase in sales.
- **Radio Ad Spend**: \( 0.1070 \) (statistically significant, p < 0.05) – $1,000 increase in Radio ad spend results in ~107 units increase in sales.
- **Newspaper Ad Spend**: \( 0.0003 \) (not statistically significant) – No meaningful impact on sales.

### Recommendations:
- Focus on TV and Radio ad spend to maximize sales.
- Reduce Newspaper advertising to reallocate budget to more impactful channels.

---

## Visualizations

### Total Ad Spend vs. Sales:
![Scatterplot of Total Ad Spend vs. Sales](total_ad_spend_vs_sales.png)

### TV Ad Spend vs. Sales:
![TV Line Fit Plot](tv_line_fit_plot.png)

### Regression Output:
![Regression Summary Output](regression_output.png)

---

## Technologies Used

- Microsoft Excel: Scatterplots, regression analysis (Data Analysis Toolpak).
- Python: Additional statistical analysis and chart generation.

## GitHub Repository

[View on GitHub](https://github.com/yourusername/sales-performance-analysis)

---
