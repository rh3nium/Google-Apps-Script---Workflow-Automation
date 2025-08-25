function cellLength() {
  let sheet = SpreadsheetApp.getActiveSheet();
  let range = sheet.getRange("A1:B10");
  let data = range.getValues();
  for (let i=0; i<data.length; i++)
    lengthCell(data[i]);
}

function lengthCell(cell) {
  Logger.log(cell);
}
