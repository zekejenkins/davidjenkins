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

### **Summary Output**

| **Regression Statistics** |   |   |
|----------------------------|---|---|
| Multiple R                | 0.950048046 |   |
| R Square                  | 0.90259129  |   |
| Adjusted R Square         | 0.90110034  |   |
| Standard Error            | 1.661695147 |   |
| Observations              | 200         |   |

### **ANOVA**

| **df** | **SS**       | **MS**      | **F**        | **Significance F** |
|--------|--------------|-------------|--------------|---------------------|
| Regression | 3    | 5014.78272 | 1671.59424 | 605.3801307 | 8.1337E-99          |
| Residual   | 196  | 541.2012295 | 2.761230763 |              |                     |
| Total      | 199  | 5555.98395  |             |              |                     |

### **Coefficients**

| Predictor  | Coefficients | Standard Error | t Stat       | P-value     | Lower 95%     | Upper 95%     |
|------------|--------------|----------------|--------------|-------------|---------------|---------------|
| Intercept  | 4.625124079  | 0.307501165    | 15.04099695  | 1.68268E-34 | 4.018688356   | 5.231559801   |
| TV         | 0.05444578   | 0.001375188    | 39.59152448  | 1.89294E-95 | 0.051733716   | 0.057157845   |
| Radio      | 0.107001228  | 0.008489563    | 12.60385655  | 4.6021E-27  | 0.090258612   | 0.123743844   |
| Newspaper  | 0.000335658  | 0.005788056    | 0.057991479  | 0.953814495 | -0.011079206  | 0.011750522   |

---

## Residual Output

| Observation | Predicted Sales | Residuals   | Standard Residuals |
|-------------|-----------------|-------------|---------------------|
| 1           | 21.22097209     | 0.87902791  | 0.533027745         |
| 2           | 11.26824775     | -0.86824775 | -0.526490835        |
| 3           | 10.49620897     | 1.503791029 | 0.911873596         |
| ...         | ...             | ...         | ...                 |

(Truncated for brevity. Full data available in the attached project file.)

---

## Visualizations

### Total Ad Spend vs. Sales:
![Scatterplot of Total Ad Spend vs. Sales](total_ad_spend_vs_sales.png)

### TV Ad Spend vs. Sales:
![TV Line Fit Plot](tv_line_fit_plot.png)

### Regression Summary Output:
![Regression Summary](regression_summary.png)

---

## Recommendations

1. Focus on TV and Radio ad spend to maximize sales.
2. Consider reallocating budgets from Newspaper to TV and Radio based on negligible impact of Newspaper advertising.
3. Leverage this regression model to predict sales under different advertising scenarios.

---

## Technologies Used

- Microsoft Excel (Data Analysis Toolpak)
- Python (for additional analysis and chart generation)
- Data Visualization Tools

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
