---
layout: single
title: "Trello Card Creator"
permalink: /projects/trello_card_creator/
author_profile: true
---

## Overview

This project automates the creation of Trello cards using data from a Google Sheet. Leveraging Google Apps Script and the Trello API, the script reads spreadsheet rows and maps them to Trello lists, ensuring seamless task management for teams.

The idea for this project came from my desire to improve my office's project management practices. Previously, all project management was handled using spreadsheets, which made tracking and updating tasks cumbersome. I introduced the Kanban-style project management of Trello and created this JavaScript-based API integration to transition all spreadsheet-based tasks into Trello. This script automated the migration and made the transition much smoother for the team.

By implementing this solution, I was able to:
- Automate card creation in Trello based on structured data.
- Dynamically match spreadsheet rows to corresponding Trello lists.
- Streamline project management by reducing manual work.
- Help my office adopt a modern and efficient project management tool.

---

## Features

- **Google Sheets Integration**: Reads structured data from a Google Sheet, including list names, card titles, and descriptions.
- **Trello API Integration**: Dynamically fetches Trello lists and creates cards in the appropriate list.
- **Error Handling**: Logs errors for unmatched lists or API issues for debugging and troubleshooting.
- **Reusable Script**: Configurable to work with different boards or sheet structures.
- **Automated Transition**: Simplifies the migration from spreadsheets to Trello, making it easier for teams to adopt new workflows.

---

## Technologies Used

- JavaScript
- Google Apps Script
- Trello API
- Google Sheets API

---

## GitHub Repository

[View on GitHub](https://github.com/zekejenkins/trello-card-creator)

---

## Code Example
<div id="skills-file-content" style="background: #f8f8f8; padding: 10px; border: 1px solid #ddd; font-family: monospace; white-space: pre-wrap; font-size: 0.875rem; overflow-x: auto;">
  Loading file content...
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css">
<script>
  fetch("https://raw.githubusercontent.com/zekejenkins/davidjenkins/master/_projects/trello_card_creator.md")
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

---

## Impact

This project not only automated a labor-intensive process but also served as a catalyst for modernizing our office's project management practices. By transitioning to Trello and automating the migration process, I facilitated a smoother adoption of a more efficient, visual, and collaborative project management system. This initiative improved task tracking and empowered team members to manage their workflows more effectively.
