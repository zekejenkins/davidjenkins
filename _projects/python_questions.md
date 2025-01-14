---
layout: single
title: "Python Questions"
permalink: /projects/python_questions/
author_profile: true
---

This project showcases various Python problems that I have worked on, obtained from different data analyst assessments. These tasks involve operations on DataFrames using pandas, including filtering, renaming, handling missing values, and adding extra columns. Below are the questions and solutions for practice and reference.

---

## 1. Filtering DataFrame Based on Conditions

**Task**: Create a DataFrame with the following data and filter it to show only employees in the IT department who earn more than $60,000.

### Sample Data

```python
{
    'employee': ['John', 'Jane', 'Jim', 'Jill', 'Jack'],
    'department': ['HR', 'IT', 'Finance', 'IT', 'HR'],
    'salary': [50000, 60000, 70000, 65000, 55000]
}
```

### Solution

```python
import pandas as pd

# Data
data = {
    'employee': ['John', 'Jane', 'Jim', 'Jill', 'Jack'],
    'department': ['HR', 'IT', 'Finance', 'IT', 'HR'],
    'salary': [50000, 60000, 70000, 65000, 55000]
}

# Create DataFrame
df = pd.DataFrame(data)

# Filter DataFrame
filtered_df = df[(df['department'] == 'IT') & (df['salary'] > 60000)]

print(filtered_df)
```

---

## 2. Renaming Columns

**Task**: Create a DataFrame with the following data and rename the columns to `ID`, `Name`, and `Price`.

### Sample Data

```python
{
    'Product_ID': [101, 102, 103],
    'Product_Name': ['Laptop', 'Phone', 'Tablet'],
    'Product_Price': [1000, 800, 600]
}
```

### Solution

```python
# Data
data = {
    'Product_ID': [101, 102, 103],
    'Product_Name': ['Laptop', 'Phone', 'Tablet'],
    'Product_Price': [1000, 800, 600]
}

# Create DataFrame
df = pd.DataFrame(data)

# Rename columns
df.rename(columns={
    'Product_ID': 'ID',
    'Product_Name': 'Name',
    'Product_Price': 'Price'
}, inplace=True)

print(df)
```

---

## 3. Handling Missing Values

**Task**: Create a DataFrame with the following data and fill the missing values in the `price` column with the average price. Drop rows where the `price` column is still missing after filling.

### Sample Data

```python
{
    'product': ['Laptop', 'Tablet', 'Phone', 'Monitor', 'Mouse'],
    'price': [1000, 500, None, 150, None],
    'stock': [50, 150, 100, 200, 300]
}
```

### Solution

```python
# Data
data = {
    'product': ['Laptop', 'Tablet', 'Phone', 'Monitor', 'Mouse'],
    'price': [1000, 500, None, 150, None],
    'stock': [50, 150, 100, 200, 300]
}

# Create DataFrame
df = pd.DataFrame(data)

# Fill missing values in 'price' column with the average price
df['price'] = df['price'].fillna(df['price'].mean())

# Drop rows where 'price' is still missing
df.dropna(subset=['price'], inplace=True)

print(df)
```

---

## 4. Creating Extra Column

**Task**: Read an Excel file into a pandas DataFrame. Add a new column called `State` based on the values in the `City` column.

### Sample Data

| City         | Population |
|--------------|------------|
| New York     | 20000      |
| Los Angeles  | 30000      |
| Houston      | 40000      |
| Chicago      | 60000      |

**Expected Output**:

| City         | Population | State      |
|--------------|------------|------------|
| New York     | 20000      | New York   |
| Los Angeles  | 30000      | California |
| Houston      | 40000      | Texas      |
| Chicago      | 60000      | Illinois   |

### Solution

```python
# Data
data = {
    'City': ['New York', 'Los Angeles', 'Houston', 'Chicago'],
    'Population': [20000, 30000, 40000, 60000]
}

# Create DataFrame
df = pd.DataFrame(data)

# Mapping of City to State
city_to_state = {
    'New York': 'New York',
    'Los Angeles': 'California',
    'Houston': 'Texas',
    'Chicago': 'Illinois'
}

# Add new column 'State' based on the mapping
df['State'] = df['City'].map(city_to_state)

print(df)
```

---

