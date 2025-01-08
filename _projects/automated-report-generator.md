---
layout: single
title: "Automated Report Generator"
permalink: /projects/automated-report-generator/
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

<div id="skills-file-content" class="language-yaml" style="background: #f8f8f8; padding: 10px; border: 1px solid #ddd; font-family: monospace; white-space: pre-wrap; overflow-x: auto;">
  Loading file content...
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-yaml.min.js"></script>

<script>
  fetch("https://raw.githubusercontent.com/zekejenkins/davidjenkins/master/_data/skills.yml")
    .then(response => response.text())
    .then(text => {
      // Escape HTML for safe display
      const escapedText = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      document.getElementById("skills-file-content").innerHTML = escapedText;
      Prism.highlightAll();
    })
    .catch(error => {
      document.getElementById("skills-file-content").textContent = "Error loading file content.";
      console.error(error);
    });
</script>
