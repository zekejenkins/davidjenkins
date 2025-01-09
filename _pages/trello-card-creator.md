---
layout: single
title: "Trello Card Creator"
permalink: /projects/trello_card_creator/
author_profile: true
---

## Overview

This project automates the creation of Trello cards using data from a Google Sheet. Leveraging Google Apps Script and the Trello API, the script reads spreadsheet rows and maps them to Trello lists, ensuring seamless task management for teams.

By implementing this solution, I was able to:
- Automate card creation in Trello based on structured data.
- Dynamically match spreadsheet rows to corresponding Trello lists.
- Streamline project management by reducing manual work.

---

## Features

- **Google Sheets Integration**: Reads structured data from a Google Sheet, including list names, card titles, and descriptions.
- **Trello API Integration**: Dynamically fetches Trello lists and creates cards in the appropriate list.
- **Error Handling**: Logs errors for unmatched lists or API issues for debugging and troubleshooting.
- **Reusable Script**: Configurable to work with different boards or sheet structures.

---

## Technologies Used

- JavaScript
- Google Apps Script
- Trello API
- Google Sheets API

## GitHub Repository

[View on GitHub](https://github.com/zekejenkins/trello-card-creator)

---
<div id="skills-file-content" style="background: #f8f8f8; padding: 10px; border: 1px solid #ddd; font-family: monospace; white-space: pre-wrap; font-size: 0.875rem; overflow-x: auto;">
  Loading file content...
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css">
<script>
  fetch("https://raw.githubusercontent.com/zekejenkins/davidjenkins/master/_projects/data_gathering.md")
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

## Code Example
