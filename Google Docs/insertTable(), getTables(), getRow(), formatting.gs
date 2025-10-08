function insertTables() {
  var doc = DocumentApp.getActiveDocument();

  // getBody() - Gets body of document
  var body = doc.getBody();

  // getText() - Gets content of document body
  var content = body.getText();
  Logger.log(content);

  // insertTable() - Inserts table
  var arr = [['Name', 'Marks'], ['ABC', 100], ['DEF', 234]];
  body.insertTable(4, arr);

  // getTables() - Gets tables in document
  var tables = body.getTables();

  // Format rows and columns
  for (var i=0; i<tables.length; i++) {
    // getRow() - gets row
    var header = tables[i].getRow(0);
    // Create dictionary of attributes
    var attr = {};
    attr[DocumentApp.Attribute.FONT_SIZE] = 15;
    attr[DocumentApp.Attribute.BOLD] = true;
    attr[DocumentApp.Attribute.FOREGROUND_COLOR] = '#ff0000';
    header.editAsText().setAttributes(attr);
  }
}
