function recordDataAndSendEmails(name, email, feedback, rating) {
  var id = 'YOUR_SHEET_ID';
  var ss = SpreadsheetApp.openById(id);
  var sheet = ss.getSheetByName('Sheet1');
  var body = 'Here is your feedback: \nName: ' + name + '\nEmail: ' + email + '\nFeedback: ' + feedback + '\nRating: ' + rating + '\nThank You';
  MailApp.sendEmail(email, 'Feedback Recorded', body);
  sheet.appendRow([name, email, feedback, rating]);
  var totalRating = 0;
  var data = sheet.getRange(2, 4, sheet.getLastRow() - 1, 1).getValues();
  data.forEach(row => {
    totalRating += row[0];
  });
  var totalCount = sheet.getLastRow() - 1;
  var averageRating = totalRating / totalCount;
  var adminMailBody = 'New Response by ' + name + '\nTotal Responses: ' + totalCount + '\nAverage Rating: ' + averageRating;
  MailApp.sendEmail('halbhaviriya@gmail.com', 'New Response Recorded - Latest Statistics', adminMailBody);
}
