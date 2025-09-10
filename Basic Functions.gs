function myFunction1() {

  // getActiveSheet() - 
  var sheet = SpreadsheetApp.getActiveSheet();
  Logger.log(sheet);

  // openById() - Opens sheet
  // var s = SpreadsheetApp.openById();

  // getSheetName() - Returns sheet name
  var name = sheet.getSheetName();
  Logger.log(name);

  // appendRow() - Appends row to sheet
  //var name = sheet.appendRow();

  // getSheetValues() - Returns values in sheet within range ( )
  var data = sheet.getSheetValues(1, 1, 2, 2);
  Logger.log(data);

  // getRange() - Returns range of values
  var range = sheet.getRange(1, 2);
  var get_range = range.getValues();
  Logger.log(get_range);

  // getDataRange() - Returns range of values
  var data_range = sheet.getDataRange();
  var data_range2 = data_range.getValues();
  Logger.log(data_range2);

}
