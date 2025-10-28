function getFormResponseFiles() {
  var sourceFolderId = '1pYxqfDty-7Zq852WWyKROqkCfOpPEzsqeBvtK-5mKxLeZAdxbJLmsRdKxdTv2l0ZOytUOLDg';
  var sourceFolder = DriveApp.getFolderById(sourceFolderId);
  var sheetID = '1w33XEPQUn7DTxPmIe0oPN76MkNDE2DlrXGuCazQ6YDo';
  var ss = SpreadsheetApp.openById(sheetID);
  var sheet = ss.getSheetByName('Form responses 1');
  var range = sheet.getRange(2, 2, sheet.getLastRow() - 1, 3);
  var data = range.getValues();
  var dest = {};
  dest['bca23']='1XcULi7JSmMab15k3qu2EYqItKABhBP0A';
  dest['bca24']='1O9Cu4YzyyAKjcSi2auuxmNzbchR-qpLe';
  dest['bca25']='1fg4fA0qMvTF-RGUmSTs0DDztItmhrDsv';
  dest['mca23']='1YUpErglO9ajYVz7AK-GHJsZB6TMvQV1F';
  dest['mca24']='1tcSOqIJr0iVi1-BKV0guA-JIT_7eCR3u';
  dest['mca25']='1ahBn9P7TEx_2nA9bekqOBKXQJKPmykAo';
  renameFileAtSource(data);
}

function renameFileAtSource(data){
  // Data -- 2D Array -- Obtained from Sheet
  // Every Row of Data -- [SRN, Name, Resume]
  data.forEach(row => {
    srn = row[0];
    name = row[1];
    resume = row[2];
    newName = srn + ' - ' + name + ' - Resume.pdf';
    indexOfEquals = resume.indexOf('=');
    id = resume.slice(indexOfEquals + 1);
    file = DriveApp.getFileById(id);
    file.setName(newName);
  });
}

function moveFileAndOrganise(sheet, data, dest){
  // data -- 2D Array from Google Sheet
  // Row -- [SRN, Name, Resume]
  // dest -- Dictionary with folder IDs for destination
  i = 2; // Counter, start from Row 2
  data.forEach(row => {
    srn = row[0];
    resume = row[2];
    finalDest = '';
    if(srn.includes('UG23'))
      finalDest = dest['bca23'];
    if(srn.includes('UG24'))
      finalDest = dest['bca24'];
    if(srn.includes('UG25'))
      finalDest = dest['bca25'];
    if(srn.includes('PG23'))
      finalDest = dest['mca23'];
    if(srn.includes('PG24'))
      finalDest = dest['mca24'];
    if(srn.includes('PG25'))
      finalDest = dest['mca25'];
    finalFolder = DriveApp.getFolderById(finalDest);
    indexOfEquals = resume.indexOf('=');
    fileID = resume.slice(indexOfEquals + 1);
    file = DriveApp.getFileById(fileID);
    newUrl = file.moveTo(finalFolder).getUrl();
    sheet.getRange(i, 5).setValue(newUrl);
    i += 1;
  })
}
