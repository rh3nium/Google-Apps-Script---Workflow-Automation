function myFunction() {
  var folderID = '1dkNbN5B7jb8vySqKzgekiaW7tHZdWyQ3';
  var folder = DriveApp.getFolderById(folderID);
  var fileIter = folder.getFiles();
  var files = [];
  while(fileIter.hasNext()) {
    f = fileIter.next();
    files.push(f);
  }
  files.forEach(file => {
    file.setName('Class' + file.getName());
  })
}
