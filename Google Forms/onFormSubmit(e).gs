// onFormSubmit(e) function
function onFormSubmit(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var masterSheet = ss.getSheetByName("Master");

  var responses = e.values;  
  var timestamp = responses[0];  
  var email = responses[1];     
  var name = responses[3];       

  var data = masterSheet.getRange(2, 1, masterSheet.getLastRow()-1, 4).getValues();
  for (var i = 0; i < data.length; i++) {
    if (data[i][1] == name) { 
      masterSheet.getRange(i+2, 4).setValue("S"); 
      sendAcknowledgement(data[i][2], name);
      break;
    }
  }
}

// Function to send email notification
function sendAcknowledgement(email, name) {
  var subject = "Form Submission Received";
  var body = "Hello " + name + ",\nYour form was submitted successfully.\nThanks!";
  MailApp.sendEmail(email, subject, body);
}

function sendOwnerSummary() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var masterSheet = ss.getSheetByName("Master");
  var data = masterSheet.getRange(2, 1, masterSheet.getLastRow()-1, 4).getValues();

  var total = data.length;
  var submitted = 0;
  var pendingList = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i][3] == "S") submitted++;
    else pendingList.push(data[i][1] + " (" + data[i][0] + ")"); 
  }

  var ownerEmail = "halbhaviriya@gmail.com"; 
  var subject = "Form Submission Summary";
  var body = "Total Students: " + total +"\nSubmitted: " + submitted +"\nPending: " + (total - submitted) +"\nPending Students:\n" + pendingList.join("\n");

  MailApp.sendEmail(ownerEmail, subject, body);
}

function sendReminders() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var masterSheet = ss.getSheetByName("Master");
  var data = masterSheet.getRange(2, 1, masterSheet.getLastRow()-1, 4).getValues();

  for (var i = 0; i < data.length; i++) {
    if (data[i][3] == "NS") { 
      var email = data[i][2];
      var name = data[i][1];
      var subject = "Reminder: Assignment submission pending";
      var body = "Hello " + name + ",\nOur records show you have not submitted the form yet. Please complete it at the earliest.\nThank you!";
      MailApp.sendEmail(email, subject, body);
    }
  }
}
