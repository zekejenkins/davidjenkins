---
layout: single
title: "Automated PDF Data Extraction and Analysis"
permalink: /projects/pdf_data_extraction/
author_profile: true
---

## Overview

This project demonstrates an automated process to extract specific details from PDF account statements, consolidate the data into an Excel spreadsheet, and enable advanced analysis. The automation was achieved using Python, leveraging libraries like PyMuPDF (fitz) for text extraction and pandas for data manipulation.

By completing this project, I was able to:
- Automate the extraction of key financial data from account statements.
- Consolidate extracted data into a structured Excel file for analysis.
- Enhance accuracy and efficiency in handling bulk financial documents.
- Provide actionable insights by creating an organized dataset for further analysis.

### **Context**
This project was undertaken to review over 600 accounts, each with monthly statements spanning the last 5 years. This totaled more than **36,000 PDFs** (600 accounts * 12 months/year * 5 years). Manually extracting and consolidating data from such a large volume of files would have been extremely time-consuming and prone to errors, making automation a critical necessity.

## Features

### **Automated PDF Text Extraction**
- Extracted key fields from PDF files, including:
  - **Current amount due**
  - **Past due amount**
  - **Fees due**
  - **Total amount due**
  - **Due by**
- Parsed account numbers and customer names directly from the PDFs.
- Used regular expressions for precise text extraction, ensuring data integrity.

```python
# Sample code snippet for PDF text extraction
with fitz.open(pdf_path) as doc:
    for page in doc:
        text = page.get_text()  # Extract text from the page
        match = re.search(r"Account Number:\s+(\S+)\s+(.+)", text)
        if match:
            account_number = match.group(1)
            name = match.group(2).strip()
```

### **Excel Data Consolidation**
- Consolidated extracted data into a structured Excel file.
- Added dynamic columns with timestamps based on the PDF file names.
- Ensured compatibility with existing data by loading or creating a new DataFrame.

```python
# Dynamic column creation
month_year = pdf_file.split('.')[0]
date_column = pd.to_datetime(month_year).strftime('%m/%d/%Y')
field_column = f"{date_column}_{field}"
```

### **Dynamic Data Updates**
- Allowed for incremental updates by appending new data without overwriting existing records.
- Saved the processed data into an Excel file for easy sharing and further analysis.

### **Scalable Script**
- Designed the script to process multiple PDFs within a folder.
- Robust error handling to manage missing or invalid data.

## Results

### **Efficiency Gains**
- Reduced manual data entry time by over 80%.
- Improved accuracy in handling large volumes of account statements.

### **Data Usability**
- Provided a well-structured dataset for analysis of financial trends.
- Enabled visualization and reporting through the consolidated Excel file.

## Recommendations

1. **Extend Automation**:
   - Integrate the script with databases to store data for large-scale analysis.
   - Automate email notifications for missing or erroneous data.

2. **Enhance Analysis**:
   - Use the consolidated Excel file to create pivot tables for trends.
   - Incorporate dashboards for visualizing overdue amounts and payment trends.

3. **Optimize the Script**:
   - Add multiprocessing to handle a larger number of PDFs simultaneously.
   - Use machine learning for predictive analysis of payment patterns.

## Technologies Used
- **Python**: For text extraction and data processing.
  - PyMuPDF (fitz): Extract text from PDF account statements.
  - pandas: Manipulate and consolidate data into Excel files.
- **Excel**: For storing and analyzing consolidated data.
- **Regex**: For precise text parsing.

## GitHub Repository

[View on GitHub](https://github.com/yourusername/pdf-data-extraction)

## Visualizations

### Example Output in Excel:
| Name          | Account       | 10/01/2024_Current amount due | 10/01/2024_Total Amount Due |
|---------------|---------------|-------------------------------|-----------------------------|
| John J. Smith | 123456789     | $250.00                       | $300.00                     |

### Workflow Visualization:
```plaintext
1. PDF Files -> Extract Data -> Consolidate into Excel
2. Excel -> Analyze Trends -> Generate Insights
```
