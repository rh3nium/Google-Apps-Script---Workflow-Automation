// Display Time
function time() {
  var today = new Date();
  var moonlanding = new Date(-86400000);
  var beginning = new Date('01/01/1970');
  Logger.log('Today: ' + today);
  Logger.log('Moon Landing Time: ' + moonlanding);
  Logger.log('Beginning of Time: ' + beginning);
}
