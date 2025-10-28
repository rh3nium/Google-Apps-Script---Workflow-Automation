// Display files in folder
var folder_id = '1dkNbN5B7jb8vySqKzgekiaW7tHZdWyQ3'
function displayFiles() {
  var folder = DriveApp.getFolderById(folder_id);
  var files = folder.getFiles();
  var f = files.next(); // f is of type object

  while (files.hasNext()) {
    Logger.log(f); // Log filename
    f = files.next(); // go to next file
  }
  Logger.log(f);

}

// Display files using array
var folder_id = '1dkNbN5B7jb8vySqKzgekiaW7tHZdWyQ3'
function fileArray() {
  var folder = DriveApp.getFolderById(folder_id);
  var files = folder.getFiles();
  var f = files.next();
  var array = [];

  while (files.hasNext()) {
    array.push(f); // push() - adds files to array
    f = files.next();
  }
  array.push(f);
  Logger.log(array);
}

// Rename files in folder using array
var folder_id = '1dkNbN5B7jb8vySqKzgekiaW7tHZdWyQ3'

function main() {
  var arr = createArrayOfFiles(folder_id);
  Logger.log(arr);
  arr.forEach(f => {
    oldName = f.getName();
    newName = 'Class ' + oldName;
    f.setName(newName);
  });
}
function createArrayOfFiles(folder_id) {
  var folder = DriveApp.getFolderById(folder_id);
  var files = folder.getFiles();
  var f = files.next();
  var array = [];
  while (files.hasNext()) {
    array.push(f);
    f = files.next();
  }
  array.push(f);
  return array;
}
