// Insert image using Blob
function getBlob() {
  // Define image's Google Drive ID
  var imageId = '1MFB1ut82_fmxRjHgwYIeKPKbXUXMmqVZ';
  
  // getBlob() - Gets Blob (Binary Large Object)
  // Blob holds raw, unstructured binary data of arbitrary size - includes images, audio files, videos, PDFs, or plain text converted into a binary format.
  var blob = DriveApp.getFileById(imageId).getBlob();
  Logger.log(typeof(blob)); /* Output: 'object' */

  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  // appendImage() - Insert image in body
  body.appendImage(blob);
}

// Insert image using URL
function getImgUrl() {
  // Define image url
  var url = 'https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg';
  var response = UrlFetchApp.fetch(url);
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody()

  // appendImage() - Insert image in body
  body.appendImage(response);
}

// Align image
function imgAlign() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var images = body.getImages();
  images.forEach(image => { attr={};
  attr[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER; 
  image.setAttributes(attr)});
}
