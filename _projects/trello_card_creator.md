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
