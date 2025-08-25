function cellLength() {
  let sheet = SpreadsheetApp.getActiveSheet();
  let range = sheet.getRange("A1:C6");
  let data = range.getValues();
  let l;
  for (let i=0; i<data.length; i++) {
    for (let j=0; j<data[i].length; j++) {
      l = lengthCell(data[i][j]);
      Logger.log(l);
    }
  }
}

function lengthCell(cell) {
  return cell.length;
}
