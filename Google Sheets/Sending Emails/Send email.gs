// Send E-mail

function myFunction() {
  var toEmail = 'iuhdsiuchsdihcusdhcdsu@gmail.com';
  var sub = 'From Google Apps Script';
  var body = '<html><body> <h1>From Google Apps Script</h1> <p>Hello</p><br> <p>Reply to <a href = mailto:udwedefusfisuf@gmail.com>Riya</a></p> </body></html> ';
  MailApp.sendEmail({to:toEmail, subject: sub, htmlBody: body});
}
