// Get content from HTML file to create webpage
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('ExpenseTracker');
}

// Append expense in sheet
function recordExpense(p, a, m) {
  var ss = SpreadsheetApp.openByUrl('your_sheet_url'); // Add your sheet url
  var sheet = ss.getSheetByName('Sheet1'); // Add your sheet name
  var old_amount = 0;
  var slno = sheet.getLastRow();
  sheet.appendRow([slno, p, a, m]);
  var data = sheet.getRange(2, 3, sheet.getLastRow() - 1, 1).getValues();
  data.forEach(row => {
    old_amount += row[0];
  });
  var body = 'New Expense: \nYou have spent ' + a + ' at ' +  p + ' using ' + m +'\nTotal Expenses: ' + old_amount;
  MailApp.sendEmail('niteeshkr@pes.edu', 'New Expense on Form', body);
}

// Get total expense
function getTotalExpenses() {
  var ss = SpreadsheetApp.openByUrl('your_sheet_url'); // Add your sheet url
  var sheet = ss.getSheetByName('Sheet1'); // Add your sheet name
  var totalAmount = 0;
  var data = sheet.getRange(2, 3, sheet.getLastRow() - 1, 1).getValues();
  data.forEach(row => {totalAmount += row[0]});
  return totalAmount;
}

// Get all data
function getAllData() {
  var ss = SpreadsheetApp.openByUrl('your_sheet_url'); // Add your sheet url
  var sheet = ss.getSheetByName('Sheet1'); // Add your sheet name
  var data = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
  return data;
}
