---
layout: single
title: "SQL Questions for Portfolio"
permalink: /projects/sql_questions/
author_profile: true
---

This project showcases various SQL projects that I have worked on, obtained from different data analyst assessments. The questions test your ability to perform complex SQL queries, including cumulative percentages, rolling averages, and filtering data. Below are the questions along with sample data tables to practice.
---

## 1. Calculate a Cumulative Percentage of Total Sales by Region

**Task**: Compute the cumulative percentage of total sales (amount) for each region, ordered by order_date. Display the cumulative percentage alongside other details.

### Sample Data Table

| Region  | Order_Date  | Order_ID | Amount |
|---------|-------------|----------|--------|
| North   | 2024-01-15  | 1        | 500    |
| North   | 2024-03-05  | 5        | 600    |
| South   | 2024-01-20  | 2        | 700    |
| East    | 2024-02-18  | 4        | 200    |

### Solution

```sql
SELECT 
    Region,
    Order_Date,
    Order_ID,
    Amount,
    SUM(Amount) OVER (PARTITION BY Region ORDER BY Order_Date) AS Cumulative_Sum,
    SUM(Amount) OVER (PARTITION BY Region ORDER BY Order_Date) * 100.0 / 
    SUM(Amount) OVER (PARTITION BY Region) AS Cumulative_Percentage
FROM SalesTable
ORDER BY Region, Order_Date;
```

---

## 2. Identify the First and Last Orders for Each Customer

**Task**: Find the first and last orders placed by each customer based on `order_date`. Include their order IDs, amounts, and the difference in days between the first and last orders.

### Sample Data Table

| Order_ID | Customer_ID | Order_Date  | Amount |
|----------|-------------|-------------|--------|
| 1        | 101         | 2024-01-15  | 500    |
| 2        | 102         | 2024-01-20  | 700    |
| 3        | 101         | 2024-02-10  | 300    |
| 4        | 103         | 2024-02-18  | 200    |
| 5        | 101         | 2024-03-05  | 600    |

### Solution

```sql
WITH RankedOrders AS (
    SELECT 
        Customer_ID,
        Order_ID,
        Order_Date,
        Amount,
        ROW_NUMBER() OVER (PARTITION BY Customer_ID ORDER BY Order_Date ASC) AS Row_First,
        ROW_NUMBER() OVER (PARTITION BY Customer_ID ORDER BY Order_Date DESC) AS Row_Last
    FROM SalesTable
)
SELECT 
    F.Customer_ID,
    F.Order_ID AS First_Order_ID,
    F.Order_Date AS First_Order_Date,
    L.Order_ID AS Last_Order_ID,
    L.Order_Date AS Last_Order_Date,
    DATEDIFF(DAY, F.Order_Date, L.Order_Date) AS Difference_In_Days
FROM RankedOrders F
JOIN RankedOrders L
    ON F.Customer_ID = L.Customer_ID
WHERE F.Row_First = 1 AND L.Row_Last = 1;
```

---

## 3. Create a Rolling 3-Month Sales Average

**Task**: Calculate the 3-month rolling average of sales for each region. If there aren’t enough months for a 3-month window, the rolling average should still be computed based on the available data.

### Sample Data Table

| Region  | Month    | Year | Sales  |
|---------|----------|------|--------|
| North   | January  | 2024 | 15000  |
| North   | February | 2024 | 18000  |
| North   | March    | 2024 | 20000  |
| South   | January  | 2024 | 22000  |
| South   | February | 2024 | 16000  |

### Solution

```sql
SELECT 
    Region,
    Month,
    Year,
    Sales,
    AVG(Sales) OVER (
        PARTITION BY Region 
        ORDER BY Year, Month 
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS Rolling_3_Month_Avg
FROM SalesSummaryTable
ORDER BY Region, Year, Month;
```

---

## 4. Rank Customers by Spending but Exclude Orders Above $500

**Task**: Rank customers by their total spending, but only consider orders with an amount less than or equal to $500.

### Sample Data Table

| Order_ID | Customer_ID | Order_Date  | Order_Amount |
|----------|-------------|-------------|--------------|
| 1        | C001        | 2024-01-10  | 300          |
| 2        | C002        | 2024-01-12  | 450          |
| 3        | C003        | 2024-04-15  | 600          |

### Solution

```sql
WITH FilteredOrders AS (
    SELECT 
        Customer_ID,
        SUM(Order_Amount) AS Total_Spending
    FROM SalesTable
    WHERE Order_Amount <= 500
    GROUP BY Customer_ID
)
SELECT 
    Customer_ID,
    Total_Spending,
    RANK() OVER (ORDER BY Total_Spending DESC) AS Rank
FROM FilteredOrders;
```
