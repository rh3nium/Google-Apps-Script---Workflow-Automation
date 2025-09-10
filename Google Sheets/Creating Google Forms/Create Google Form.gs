// Create Google Form

function createForm() {
  // Create form
  let form = FormApp.create("Feedback Form");

  // Set form description
  form.setDescription("This is a Google form created with Apps Script.");

  // Add Text Item - textbox
  form.addTextItem().setTitle("Name").setRequired(true); // Make field required

  // Add Date Item
  form.addDateItem().setTitle("Select Date").setRequired(true);

  // Add Multiple Choice Items
  form.addMultipleChoiceItem().setTitle("Rating").setChoiceValues(['1', '2', '3', '4', '5']).setRequired(true); // Make field required

  // Link form to spreadsheet to display reponses
  var sheet = SpreadsheetApp.create("Student Feedback - Form Responses");
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
}
