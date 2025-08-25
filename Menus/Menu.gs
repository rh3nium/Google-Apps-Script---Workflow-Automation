// Menu

function onOpen() {
  SpreadsheetApp.getUi().createMenu("Format Marks...")
  .addItem("Format", "formatter")
  .addToUi();
}

function formatter() {

  var rng = SpreadsheetApp.getActiveSheet().getRange('C2:C4');

  for (let i = 1; i <= 3; i++) {
    var cell = rng.getCell(i, 1);
    var cellData = cell.getValue();
    if (cellData < 35)
      cell.setBackground('red')
    else if (cellData < 80)
      cell.setBackground('yellow');
    else
      cell.setBackground('green');
  }
}
