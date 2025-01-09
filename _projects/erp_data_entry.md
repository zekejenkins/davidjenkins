---
layout: single
title: "ERP Data Entry"
permalink: /projects/erp_data_entry/
author_profile: true
---

## Overview

Manually entering student comments into Ellucian Banner for lists of up to 200 students was a time-consuming process that could take hours for one person. To address this inefficiency, I developed an AutoHotkey script that automates the entire process, reducing the workload significantly by processing up to 10 student records per minute.

The script streamlines data entry by:
- Reading and parsing CSV files containing student data.
- Automatically navigating the ERP interface.
- Applying decision logic to generate and enter detailed comments based on predefined rules.
- Providing a user-friendly graphical interface to track progress and allow resuming from a specific record.

This project demonstrates my ability to identify bottlenecks in operational workflows and implement automation solutions that save time and reduce errors. It also highlights my technical expertise in scripting, data processing, and ERP systems, along with my problem-solving mindset and focus on efficiency.

---

## Features

- Automatically processes CSV files containing student data.
- Integrates decision logic for approved or denied requests with exceptions.
- User-friendly interface for progress tracking and resuming operations.
- Processes up to 10 student records per minute.

---

## Technologies Used

- AutoHotkey
- Ellucian Banner

---

## GitHub Repository

[View on GitHub](https://github.com/zekejenkins/Comment-Entry)

---

## Embedded Skills File

<div id="skills-file-content" style="background: #f8f8f8; padding: 10px; border: 1px solid #ddd; font-family: monospace; white-space: pre-wrap; font-size: 0.875rem; overflow-x: auto;">
  Loading file content...
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css">
<script>
  fetch("https://raw.githubusercontent.com/zekejenkins/davidjenkins/master/_projects/Comment-Entry.md")
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

