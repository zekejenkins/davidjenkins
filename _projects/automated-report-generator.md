---
layout: single
title: "Automated Report Generator"
permalink: /projects/automated_report_generator/
author_profile: true
---

## Overview

The Automated Report Generator simplifies the process of generating complex reports by automating tasks using Python, Excel, AutoHotkey, and SQL.

## Features

- Automates report creation using Python and Excel.
- Integrates AutoHotkey scripts for keyboard shortcuts.
- Uses SQL queries to fetch and process data.
- Dynamic HTML and JavaScript for exporting results.

## Technologies Used

- Python
- Excel
- AutoHotkey
- SQL
- HTML
- JavaScript

## GitHub Repository

[View on GitHub](https://github.com/zekejenkins/automated-report-generator)

## Embedded Skills File

<div id="skills-file-content" style="background: #f8f8f8; padding: 10px; border: 1px solid #ddd; font-family: monospace; white-space: pre-wrap; overflow-x: auto;">
  Loading file content...
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css">
<script>
  fetch("https://raw.githubusercontent.com/zekejenkins/davidjenkins/master/_projects/automated-report-generator.md")
    .then(response => response.text())
    .then(text => {
      document.getElementById("skills-file-content").innerHTML = 
        `<pre><code class="yaml">${text}</code></pre>`;
      hljs.highlightAll();
    })
    .catch(error => {
      document.getElementById("skills-file-content").textContent = "Error loading file content.";
      console.error(error);
    });
</script>
