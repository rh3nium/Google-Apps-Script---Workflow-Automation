// Code.gs
function doGet() {
  return HtmlService.createTemplateFromFile('Form').evaluate();
}

// Ensure the function is defined with 3 parameters
function sendToSheet(name, email, rating) { 
  const SS_ID = 'YOUR_SHEET_ID'; // Replace with your sheet ID
  const SHEET_NAME = 'Sheet1';              

  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error('Sheet not found: ' + SHEET_NAME + '. Check the sheet name.');
    }

    // Append all three values
    const row = [new Date(), name, email, rating]; 
    sheet.appendRow(row);

    Logger.log('Successfully recorded: ' + row.join(', '));

  } catch (e) {
    Logger.log('Error in sendToSheet: ' + e.toString());
    throw new Error('Could not save data: ' + e.message);
  }
}
