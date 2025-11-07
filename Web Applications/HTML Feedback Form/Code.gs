// Get content from HTML file to create webpage
function doGet() {
  var html = HtmlService.createHtmlOutputFromFile('Form');
  return(html);
}

// Append submitted form data to Google Sheet
function sendToSheet(name,feedback){
  var ss = SpreadsheetApp.openByUrl('your_sheet_url'); // Add your sheet url
  var sheet = ss.getSheetByName('Sheet1'); // Add your sheet name
  var slno = sheet.getLastRow();
  sheet.appendRow([slno, name, feedback]);
}
