---
layout: single
title: "Superstore Sales and Customer Insights Analysis"
permalink: /projects/superstore_analysis/
author_profile: true
---

## Overview

This project analyzes data from the [**Superstore Dataset**](https://www.kaggle.com/datasets/jessemostipak/superstore-sales) to uncover key sales trends and customer behavior. Leveraging pivot tables, charts, and statistical analysis, the project provides actionable insights into regional sales performance, customer lifetime value, and profitability trends.

By completing this analysis, I was able to:
- Identify the most and least profitable regions.
- Determine quarterly and yearly profitability trends.
- Analyze customer lifetime value (CLV) to prioritize high-value segments.
- Recommend strategies to optimize sales and customer retention.

## Features

### **Regional and Temporal Profit Analysis**

| **Region** | **Year** | **Q1 Profit** | **Q2 Profit** | **Q3 Profit** | **Q4 Profit** | **Total Profit** |
|------------|----------|---------------|---------------|---------------|---------------|------------------|
| Central    | 2014     | $496.72       | $379.89       | $1879.56      | $1643.50      | $4399.67         |
| East       | 2014     | $234.47       | $1031.94      | $2977.34      | $5682.05      | $9925.80         |
| South      | 2014     | $450.18       | $1701.92      | $4192.57      | $2871.35      | $9216.02         |
| West       | 2014     | $596.89       | $1510.66      | $8577.01      | $4830.02      | $15514.58        |

### **Customer Insights**

| **Customer**     | **State**       | **CLV**   | **Order Count** | **Avg. Sales** | **Lifespan (Years)** |
|------------------|-----------------|-----------|------------------|----------------|----------------------|
| Claire Gute      | Kentucky        | $689.27   | 3                | $229.76        | 1.28                 |
| Darrin Van Huff  | California      | $1041.03  | 5                | $124.39        | 1.50                 |
| Sean O'Donnell   | Florida         | $1041.03  | 6                | $173.51        | 2.14                 |
| Bret Hicks       | California      | $2085.12  | 8                | $260.64        | 3.50                 |
| Anthony Andrade  | North Carolina  | $596.84   | 4                | $149.21        | 2.95                 |

### **Visualization**

Bar charts and line graphs illustrate:
- Quarterly profits by region.
- Distribution of customer lifetimes and order frequencies.

## Results

### **Regional Profit Analysis**
- **South** and **West** are the most profitable regions, contributing significantly to quarterly and yearly totals.
- Quarterly trends reveal consistent growth in the **East**, while the **Central** region experiences fluctuating profits.

### **Customer Lifetime Insights**
- Average customer lifespan is **2.78 years**.
- Customers with higher order frequencies contribute significantly to lifetime value, indicating the need to foster loyalty programs targeting frequent buyers.

## Recommendations

1. **Regional Focus**:
   - Invest in marketing and inventory expansion in the **South** and **West** regions to capitalize on their profitability.
   - Develop targeted strategies for the **Central** region to stabilize profits.

2. **Customer Retention**:
   - Implement loyalty programs for high-value customers with frequent purchases.
   - Focus retention efforts on customers with a lifespan greater than 3 years.

3. **Seasonal Strategies**:
   - Increase promotional activities during Q2 to leverage historically high profits.
   - Optimize inventory planning for regions with fluctuating profits.

## Technologies Used
- Microsoft Excel (Pivot Tables, Charts)
- Python (Data Cleaning, Analysis, Visualization)
- Data Visualization Tools (for charts and graphs)

## GitHub Repository

[View on GitHub](https://github.com/yourusername/superstore-analysis)

## Visualizations

### Quarterly Profit Trends by Region:
<img src="https://raw.githubusercontent.com/yourusername/superstore-analysis/images/quarterly_profit_trends.png" alt="Quarterly Profit Trends by Region" class="invert-on-dark"/>

### Customer Lifetime Value Distribution:
<img src="https://raw.githubusercontent.com/yourusername/superstore-analysis/images/customer_lifetime_value.png" alt="Customer Lifetime Value Distribution" class="invert-on-dark"/>
