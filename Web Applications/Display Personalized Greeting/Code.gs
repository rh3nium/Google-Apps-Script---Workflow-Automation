// Get content from html file to create webpage
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index');
}

function returnUpper(name) {
  // Server-side function to return greeting in uppercase
  return name.toUpperCase();
}
