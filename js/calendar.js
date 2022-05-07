const dayCell = document.querySelectorAll('.scedule__date');

const dateStartCalendar = '2022-05-01';
const dateEndCalendar = '2022-06-01';

const datesForTable = [];

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

function formatDateForCalendar(date) {
  let day = date.getDate();
  if (day < 10) day = '0' + day;
  let month = date.getMonth() + 1;
  if (month < 10) month = '0' + month;
  let year = date.getFullYear();
  if (year < 10) year = '0' + year;
  return `${day}.${month}`;
}

function createDatesForCalendar(dateStart, dateEnd) {
  let firstDate = new Date(dateStart);
  const lastDate = new Date(dateEnd);
  while (firstDate <= lastDate) {
    datesForTable.push(formatDateForCalendar(new Date(firstDate)));
    firstDate = firstDate.addDays(1);
  }

}

function callNext() {
  let nextWeek = datesForTable;
  nextWeek = nextWeek.slice(7);
  renderCalendar(dayCell, nextWeek);
  console.log(nextWeek)
}

createDatesForCalendar(dateStartCalendar, dateEndCalendar);

function renderCalendar(calendarNode, datesArr) {
  calendarNode.forEach((item, i) => {
    item.textContent = datesArr[i];
  })
}

renderCalendar(dayCell, datesForTable);
// dayCell.forEach((item, i) => {
//   item.textContent = datesForTable[i];
// })
