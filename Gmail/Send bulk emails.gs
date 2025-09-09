// Send Bulk Emails - Using HTML Body and other options

function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getRange(2, 1, sheet.getLastRow() - 1, 4);
  var data = range.getValues();
  var htmlBody = `
  <html><body>
  <p> Hello, <b>{name}</b>, 
  <br>
  <p>We know you're looking for <b>{noVac}</b></p>
  <br>
  <p> Visit <a href = "www.google.com"> our site </a> for more details </p>
  <br><p>We will soon talk, {name}!</p>
  </body></html>`;
  var subject = 'Recruitment Call';
  for(var i = 0; i < data.length; i++){
    var company = data[i][0];
    var emailID = data[i][1];
    var name = data[i][2];
    var noVac = data[i][3];
    var newHtmlBody = htmlBody.replace('{name}', name);
    newHtmlBody = newHtmlBody.replace('{noVac}', noVac);
    MailApp.sendEmail({to:emailID, subject: subject + ' -- ' + company, htmlBody: newHtmlBody, cc:'23923e2983nesdjbisx29392398@gmail.com'});
  }
}
