---
layout: single
title: "Marketing Campaign Analysis"
permalink: /projects/social_media_marketing/
author_profile: true
---

## Overview

This project analyzes the performance of a marketing campaign using a dataset with advertising spend, impressions, clicks, conversions, and other campaign-specific features. The analysis evaluates the factors influencing Click-Through Rate (CTR) through regression modeling and provides actionable insights to improve campaign effectiveness.

The dataset is available on [GitHub](https://github.com/zekejenkins/davidjenkins). By completing this analysis, I achieved the following:

- Identified significant predictors of CTR.
- Quantified the relationship between ad spend, impressions, and clicks with CTR.
- Analyzed the performance of campaigns across platforms, regions, and age groups.
- Provided insights for optimizing marketing strategy.

## Features

- **Exploratory Data Analysis**:
  - Evaluated correlations between numeric variables.
  - Visualized ad spend distribution across campaigns.
- **Regression Modeling**:
  - Assessed the statistical significance of campaign features.
  - Evaluated model performance using metrics like R² and RMSE.
- **Insights and Recommendations**:
  - Identified areas for improvement in targeting and resource allocation.

## Regression Results

### Summary Statistics:
- **R²**: 0.136 (13.6% of variation in CTR explained by the model).
- **Adjusted R²**: 0.121 (adjusted for predictors).
- **Standard Error**: Low residual error, but model explains a limited portion of CTR variation.

### **Summary Output**

| **Regression Statistics** |  **Values** |
|---------------------------|-------------|
| Multiple R                | 0.3688      |
| R Square                  | 0.136       |
| Adjusted R Square         | 0.121       |
| Standard Error            | 0.510       |
| Observations              | 1000        |

### **ANOVA**

|            | **df** | **SS**        | **MS**        | **F**     | **Significance F** |
|------------|--------|---------------|---------------|-----------|--------------------|
| Regression | 17     | 32.91         | 1.94          | 9.07      | 3.11E-22           |
| Residual   | 982    | 210.15        | 0.21          |           |                    |
| Total      | 999    | 243.06        |               |           |                    |

### **Coefficients**

| Predictor                  | Coefficient  | Std. Error   | t Stat     | P-value   | Lower 95%     | Upper 95%     |
|----------------------------|--------------|--------------|------------|-----------|---------------|---------------|
| Intercept                 | 0.3256       | 0.0870       | 3.728      | 0.000     | 0.154         | 0.497         |
| Ad_Spend                  | -1.53E-06    | 2.99E-06     | -0.511     | 0.610     | -7.39E-06     | 4.34E-06      |
| Impressions               | -6.58E-07    | 6.11E-08     | -10.770    | 0.000     | -7.78E-07     | -5.38E-07     |
| Clicks                    | 6.53E-06     | 1.20E-06     | 5.442      | 0.000     | 4.17E-06      | 8.88E-06      |
| Platform_Instagram        | 0.0488       | 0.0550       | 0.886      | 0.376     | -0.059        | 0.157         |
| Platform_LinkedIn         | -0.0255      | 0.0550       | -0.465     | 0.642     | -0.133        | 0.082         |
| Platform_TikTok           | 0.0584       | 0.0540       | 1.083      | 0.279     | -0.047        | 0.164         |
| Platform_Twitter          | -0.0005      | 0.0540       | -0.009     | 0.993     | -0.107        | 0.106         |
| Region_Asia               | -0.0091      | 0.0560       | -0.162     | 0.872     | -0.119        | 0.101         |
| Region_Europe             | -0.0123      | 0.0550       | -0.224     | 0.823     | -0.121        | 0.096         |
| Region_North America      | 0.0695       | 0.0550       | 1.261      | 0.208     | -0.039        | 0.178         |
| Region_South America      | -0.0086      | 0.0560       | -0.154     | 0.878     | -0.118        | 0.101         |
| Age_Group_25-34           | -0.0131      | 0.0560       | -0.236     | 0.814     | -0.122        | 0.096         |
| Age_Group_35-44           | -0.0189      | 0.0550       | -0.344     | 0.731     | -0.127        | 0.089         |
| Age_Group_45-54           | 0.0151       | 0.0570       | 0.265      | 0.791     | -0.096        | 0.127         |
| Age_Group_55+             | 0.0413       | 0.0550       | 0.749      | 0.454     | -0.067        | 0.150         |
| Campaign_Type_Conversion  | -0.0266      | 0.0420       | -0.634     | 0.526     | -0.109        | 0.056         |
| Campaign_Type_Lead Gen    | -0.0350      | 0.0430       | -0.822     | 0.411     | -0.119        | 0.049         |

## Visualizations

### Ad Spend Distribution
<img src="https://raw.githubusercontent.com/zekejenkins/davidjenkins/master/images/ad_spend.png" alt="Scatterplot of Total Ad Spend vs. Sales" style="filter: invert(1); transition: filter 0.3s ease;" class="invert-on-dark"/>

### Correlation Matrix
<img src="https://raw.githubusercontent.com/zekejenkins/davidjenkins/master/images/Figure_1.png" alt="Scatterplot of Total Ad Spend vs. Sales" style="filter: invert(1); transition: filter 0.3s ease;" class="invert-on-dark"/>

### Residual Distribution
<img src="https://raw.githubusercontent.com/zekejenkins/davidjenkins/master/images/residual_distribution.png" alt="Scatterplot of Total Ad Spend vs. Sales" style="filter: invert(1); transition: filter 0.3s ease;" class="invert-on-dark"/>

## Recommendations

1. **Optimize Impressions**: Reduce impressions by 10%, which are negatively correlated with CTR. Focus on quality over quantity to target high-value audiences.
2. **Increase Click Engagement**: Clicks are strongly positively correlated with CTR. Allocate additional $2,000 per campaign to enhance call-to-action strategies or A/B test landing pages to increase clicks by 5%.
3. **Platform Targeting**: Although platforms were not statistically significant, campaigns on Instagram performed slightly better (β = 0.0488). Focus efforts on platforms with higher user engagement.
4. **Reassess Budget Allocation**: Ad spend shows minimal direct impact on CTR. Reallocate 15% of the advertising budget from platforms with the lowest CTR to creative strategies or analytics to better understand campaign ROI.
5. **Further Analysis Needed**: Investigate nonlinear relationships or interactions between impressions and clicks to improve predictive accuracy beyond the current adjusted R² of 12.1%.

## Technologies Used

- Python (Pandas, Statsmodels, Matplotlib, Seaborn)
- Jupyter Notebook for analysis and visualization
- GitHub for version control and project documentation

## GitHub Repository

[View on GitHub](https://github.com/zekejenkins/marketing-analysis)

