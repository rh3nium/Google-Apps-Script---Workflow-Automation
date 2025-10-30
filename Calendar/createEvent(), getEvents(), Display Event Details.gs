//-- Create event and display details --//
function createEvent() {

  // CalendarApp.getDefaultCalendar() - Gets calendar
  var cal = CalendarApp.getDefaultCalendar();
  Logger.log(cal); // Output: Info : Calendar

  // getTimeZone() - Gets current time zone
  Logger.log('Time Zone: ' + cal.getTimeZone());

  // Date - Gives today's date (mm/dd/yyyy)
  var today = new Date();
  Logger.log(today);
  var later = today.getTime() + (2 * 60 * 60 * 1000);
  later = new Date(later);
  Logger.log('Start: ' + today + '\nEnd: ' + later);

  // createEvent() - Creates event
  cal.createEvent('Event 1', today, later, );

  // getEvents(start_date, end_date) - Gets events in calendar
  var events = cal.getEvents(today, later);

  // events.forEach(event) - Loops through each event details
  events.forEach(event => {
    title = event.getTitle();
    desc = event.getDescription();
    starting = event.getStartTime();
    ending = event.getEndTime();
    Logger.log('Title: ' + title + '\nStart time: ' + starting + '\nEnding: ' + ending + '\nDescription: ' + desc); // Display event details
  })
  Logger.log(typeof(events)); // Output: object

}


//-- Get events and display details --//
function getEvents() {
  
  // Define times
  var tomorrow = new Date('10/31/2025'); // mm/dd/yyyy
  var start = new Date('01/01/2000'); // mm/dd/yyyy
  var cal = CalendarApp.getDefaultCalendar();
  var events = cal.getEvents(start, tomorrow);

  events.forEach(event => {
    title = event.getTitle();
    desc = event.getDescription();
    starting = event.getStartTime();
    ending = event.getEndTime();
    Logger.log('Title: ' + title + '\nStart time: ' + starting + '\nEnding: ' + ending + '\nDescription: ' + desc);
  })
