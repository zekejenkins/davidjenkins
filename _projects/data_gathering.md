---
layout: single
title: "Data Gathering and Resource Allocation Tracker"
permalink: /projects/data_gathering/
author_profile: true
---

## Overview

This project leverages an AutoHotkey script to track student ID numbers copied to the clipboard during an enrollment event. The program logs these IDs into an Access database, enabling real-time monitoring and analysis of staff activity. 

By implementing this solution, I was able to:
- Track which staff members copied IDs and their activity levels.
- Identify where staff were working during the event.
- Gather insights into when and how many IDs were processed.
- Optimize future resource allocation by analyzing gathered data.

The system provided a centralized method for logging clipboard activity across multiple staff members and helped streamline enrollment events.

---

## Features

- **Real-Time Clipboard Monitoring**: Automatically detects 9-digit student ID numbers copied to the clipboard.
- **Access Database Integration**: Stores all copied IDs into a shared Access database.
- **Staff-Level Tracking**: Logs activity by individual staff members to monitor workload and coverage.
- **Scalability**: A dedicated program for each staff member ensures seamless tracking across the team.

---

## Technologies Used

- AutoHotkey
- Microsoft Access
- SQL for database interactions
- Windows Clipboard Monitoring

## GitHub Repository

[View on GitHub](https://github.com/zekejenkins/data-gathering)

---

## Embedded Skills File

<div id="skills-file-content" style="background: #f8f8f8; padding: 10px; border: 1px solid #ddd; font-family: monospace; white-space: pre-wrap; font-size: 0.875rem; overflow-x: auto;">
  Loading file content...
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css">
<script>
  fetch("https://raw.githubusercontent.com/zekejenkins/davidjenkins/master/_projects/data-gathering.ahk")
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
