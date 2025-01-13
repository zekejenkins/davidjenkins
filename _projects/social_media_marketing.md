---
layout: single
title: "Marketing Campaign Analysis"
permalink: /projects/social_media_marketing/
author_profile: true
---

## Overview

This project analyzes the performance of a marketing campaign using a dataset with advertising spend, impressions, clicks, conversions, and other campaign-specific features. The analysis evaluates the factors influencing Click-Through Rate (CTR) through regression modeling and provides actionable insights to improve campaign effectiveness.

The dataset is available on ([GitHub](https://github.com/zekejenkins/davidjenkins/blob/master/files/Marketing%20Data.csv)). By completing this analysis, I achieved the following:

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

## Code Implementation

### Data Cleaning

```python
import pandas as pd
import numpy as np
import statsmodels.api as sm
from statsmodels.stats.outliers_influence import variance_inflation_factor
from sklearn.metrics import mean_absolute_error, mean_squared_error
import seaborn as sns
import matplotlib.pyplot as plt

# Load the dataset
file_path = "/Users/davidjenkins/Downloads/Marketing Data.csv"
try:
    data = pd.read_csv(file_path)
    print("Dataset loaded successfully.")
except Exception as e:
    print(f"Error loading dataset: {e}")
    exit()

# Data Cleaning: Convert CTR from percentage string to numeric value
try:
    data['CTR'] = data['CTR'].str.rstrip('%').astype(float) / 100
    print("CTR column cleaned and converted to numeric.")
except Exception as e:
    print(f"Error cleaning CTR column: {e}")
    exit()

# Step 1: Explore the dataset
print("\nStep 1: Exploring the dataset...")
print("Dataset Shape:", data.shape)
print("\nDataset Info:")
print(data.info())
print("\nDescriptive Statistics:")
print(data.describe())
print("\nMissing Values:")
print(data.isnull().sum())

# Step 2: Correlation matrix (filter numeric columns only)
print("\nStep 2: Calculating correlation matrix...")
try:
    numeric_data = data.select_dtypes(include=[np.number])
    corr_matrix = numeric_data.corr()
    print("\nCorrelation Matrix:")
    print(corr_matrix)

    # Visualize the correlation matrix
    plt.figure(figsize=(10, 8))
    sns.heatmap(corr_matrix, annot=True, cmap="coolwarm", fmt=".2f")
    plt.title("Correlation Matrix")
    plt.show()
except Exception as e:
    print(f"Error calculating correlation matrix: {e}")

# Step 3: Define dependent (y) and independent (X) variables
print("\nStep 3: Preparing data for regression...")
X = data[['Ad_Spend', 'Impressions', 'Clicks', 'Platform', 'Region', 'Age_Group', 'Campaign_Type']]
y = data['CTR']

# Step 4: One-hot encode categorical variables
try:
    print("One-hot encoding categorical variables...")
    categorical_columns = ['Platform', 'Region', 'Age_Group', 'Campaign_Type']
    X_encoded = pd.get_dummies(X, columns=categorical_columns, drop_first=True)
    print("Categorical variables encoded successfully.")
except Exception as e:
    print(f"Error encoding categorical variables: {e}")
    exit()

# Add a constant for the intercept
X_encoded = sm.add_constant(X_encoded)

# Convert all columns to numeric
X_encoded = X_encoded.astype(float)
y = y.astype(float)

# Step 5: Check Variance Inflation Factor (VIF) for multicollinearity
print("\nStep 5: Checking multicollinearity using VIF...")
try:
    vif_data = pd.DataFrame()
    vif_data['Variable'] = X_encoded.columns
    vif_data['VIF'] = [variance_inflation_factor(X_encoded.values, i) for i in range(X_encoded.shape[1])]
    print("\nVariance Inflation Factor (VIF):")
    print(vif_data)
except Exception as e:
    print(f"Error calculating VIF: {e}")

# Step 6: Fit the regression model
print("\nStep 6: Running regression model...")
try:
    model = sm.OLS(y, X_encoded).fit()
    print("\nRegression Summary:")
    print(model.summary())
except Exception as e:
    print(f"Error running regression: {e}")
    exit()

# Step 7: Residual analysis
print("\nStep 7: Analyzing residuals...")
residuals = model.resid
fitted_values = model.fittedvalues

# Plot residuals
plt.figure(figsize=(10, 6))
sns.histplot(residuals, kde=True, bins=30)
plt.title("Residual Distribution")
plt.xlabel("Residuals")
plt.ylabel("Frequency")
plt.show()

# Residuals vs Fitted values
plt.figure(figsize=(10, 6))
sns.scatterplot(x=fitted_values, y=residuals)
plt.axhline(0, color='red', linestyle='--')
plt.title("Residuals vs Fitted Values")
plt.xlabel("Fitted Values")
plt.ylabel("Residuals")
plt.show()

# Step 8: Model performance metrics
print("\nStep 8: Evaluating model performance...")
try:
    y_pred = model.predict(X_encoded)
    mae = mean_absolute_error(y, y_pred)
    mse = mean_squared_error(y, y_pred)
    rmse = np.sqrt(mse)

    print("\nPerformance Metrics:")
    print(f"Mean Absolute Error (MAE): {mae:.4f}")
    print(f"Mean Squared Error (MSE): {mse:.4f}")
    print(f"Root Mean Squared Error (RMSE): {rmse:.4f}")
except Exception as e:
    print(f"Error calculating performance metrics: {e}")

# Step 9: Model insights
print("\nStep 9: Interpreting model insights...")
r_squared = model.rsquared
adj_r_squared = model.rsquared_adj
print(f"R-squared: {r_squared:.4f}")
print(f"Adjusted R-squared: {adj_r_squared:.4f}")
if r_squared < 0.3:
    print("The model explains less than 30% of the variance in CTR. Consider exploring additional features or interaction terms.")

# Significant predictors
significant_vars = model.pvalues[model.pvalues < 0.05]
print("\nSignificant Predictors (p-value < 0.05):")
print(significant_vars)

# Step 10: Export results
print("\nStep 10: Exporting results...")
try:
    coefficients = pd.DataFrame({
        'Variable': X_encoded.columns,
        'Coefficient': model.params,
        'P-Value': model.pvalues,
        'Confidence Interval Lower': model.conf_int()[0],
        'Confidence Interval Upper': model.conf_int()[1]
    })
    coefficients.to_csv("/Users/davidjenkins/Downloads/Regression_Coefficients.csv", index=False)

    data['Fitted_Values'] = fitted_values
    data['Residuals'] = residuals
    data.to_csv("/Users/davidjenkins/Downloads/Regression_Residuals.csv", index=False)

    print("\nResults exported:")
    print("- Coefficients saved to 'Regression_Coefficients.csv'")
    print("- Residuals saved to 'Regression_Residuals.csv'")
except Exception as e:
    print(f"Error exporting results: {e}")
```
