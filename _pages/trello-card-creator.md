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

## Code Example
```JavaScript
function createTrelloCards() {
  var spreadsheetId = scriptProperties.getProperty('idSpreadsheet'); // Replace YOUR_SPREADSHEET_ID with your actual spreadsheet ID
  var sheetName = 'Sheet1'; // Replace YOUR_SHEET_NAME with your actual sheet name
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  var scriptProperties = PropertiesService.getScriptProperties();
  var idBoard = scriptProperties.getProperty('idBoard');
  var token = scriptProperties.getProperty('token');
  var key = scriptProperties.getProperty('key');
  
  // Fetch all lists on the board to find corresponding list IDs
  var listsUrl = 'https://api.trello.com/1/boards/' + idBoard + '/lists?key=' + key + '&token=' + token;
  var listsResponse = UrlFetchApp.fetch(listsUrl);
  var lists = JSON.parse(listsResponse.getContentText());
  
  // Iterate over rows in the sheet, starting from row 2
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    var listName = row[0];
    var cardName = row[1];
    var cardDesc = row[2];
    
    var listId = lists.find(list => list.name === listName)?.id;
    if (listId) {
      createCard(listId, cardName, cardDesc, key, token);
    } else {
      Logger.log("List not found: " + listName);
    }
  }
}
function createCard(listId, name, desc, key, token) {
  var apiUrl = 'https://api.trello.com/1/cards';
  var payload = {
    'idList': listId,
    'name': name,
    'desc': desc,
    'key': key,
    'token': token
  };
  
  var options = {
    'method': 'post',
    'payload': payload,
    'headers': {
      'Accept': 'application/json'
    }
  };
  
  try {
    var response = UrlFetchApp.fetch(apiUrl, options);
    if (response.getResponseCode() === 200) {
      Logger.log("Card created successfully: " + name);
    } else {
      Logger.log("Failed to create card: " + name);
    }
  } catch (e) {
    Logger.log("Error creating card: " + e.toString());
  }
}
```
---

## Impact

This project not only automated a labor-intensive process but also served as a catalyst for modernizing our office's project management practices. By transitioning to Trello and automating the migration process, I facilitated a smoother adoption of a more efficient, visual, and collaborative project management system. This initiative improved task tracking and empowered team members to manage their workflows more effectively.
