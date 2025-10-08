function myFunction() {
  // DocumentApp.getActiveDocument() - Gets active document
  var doc = DocumentApp.getActiveDocument();

  // getBody() - Gets body of document
  var body = doc.getBody();

  // getText() - Gets content of body
  var content = body.getText();
  Logger.log(content);
}
