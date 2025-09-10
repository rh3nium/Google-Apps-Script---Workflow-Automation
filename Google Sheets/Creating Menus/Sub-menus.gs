// Menu with Sub-menus

function onOpen() {
  SpreadsheetApp.getUi().createMenu("Data Handling")
  .addItem("Format", "formatter").addItem("Calculate Average", "calcAvg").addItem("Grade", "grade")
  .addToUi();
}

function formatter() {
  // Get range of cells
  var rng = SpreadsheetApp.getActiveSheet().getRange('C2:E4');
  // Formatting loop
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      var cell = rng.getCell(i, j);
      var cellData = cell.getValue();
      if (cellData < 35)
        cell.setBackground('red')
      else if (cellData < 80)
        cell.setBackground('yellow');
      else
        cell.setBackground('green');
    }
  }
}

// function calcAvg()
function avg(row) {
  var s = 0;
  for(var i = 0; i< row.length; i++) 
   s += row[i]
  return s/row.length
}

function calcAvg() {
  SpreadsheetApp.getActiveSheet().getRange('F1').setValue('Average');

  var data = SpreadsheetApp.getActiveSheet().getRange('C2:E4').getValues();

  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var currRow = i+2;
    SpreadsheetApp.getActiveSheet().getRange('F' + currRow).setValue(avg(row));
    }
}

// function grade()
function grader(row) {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      var cell = rng.getCell(i, j);
      var cellData = cell.getValue();
      var grade = '';
      if (cellData >= 30)
        grade = 'F';
      else if (cellData >= 40)
        grade = 'E';
      else if (cellData >= 50)
        grade = 'D';
      else if (cellData >= 60)
        grade = 'C';
      else if (cellData >= 70)
        grade = 'B';
      else if (cellData >= 80)
        grade = 'A';
      else if (cellData >= 90)
        grade = 'S';
    }
}
}

function grade() {
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var currRow = i+2;
    SpreadsheetApp.getActiveSheet().getRange('G' + currRow).setValue(grader(row));
    }
}
