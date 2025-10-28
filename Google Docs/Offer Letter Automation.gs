function offerLetter() {
  var template = DocumentApp.getActiveDocument();
  var templateBody = template.getBody();
  var templateText = templateBody.getText();
  var doc = DocumentApp.create('Offer Letter');
  var body = doc.getBody();
  body.setText(templateText);
  
  // Call function to format body
  format(body);

  // Find Date and Reporting Date
  var today = new Date();
  var future = new Date();
  future.setDate(new Date().getDate() + 5);
  future = future.toDateString().slice(4);
  today = today.toDateString().slice(4);

  // Replace placeholder text with actual text
  // Actual data for offer letter
  var actuals = [today, 'Riya', 'Some Department', future, '88000', 'Some Role', '1'];
  // Placeholder data in document
  var ph = ['{{Date}}', '{{Name}}', '{{Department}}', '{{Reporting Date}}', '{{Salary}}', '{{Role}}', '{{LetterID}}'];
  for (var i = 0; i < ph.length; i++) { // Replace placeholders with actual data
    var v = ph[i];
    var a = actuals[i];
    body.replaceText(v, a);
  }
}

function format(body){
  // Align Date and Letter ID at Right
  var para = body.getParagraphs(); // getParagraphs() - gets all paragraphs and stores in array
  for(var i = 0; i < 2; i++){
    para[i].setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
  }
  // Align heading at center and make bold
  para[3].setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  para[3].setBold(true);
  para[3].setUnderline(true);
}
