const dayCellContainer = document.querySelector('.scedule__dates');
const dayCell = document.querySelectorAll('.scedule__date');

const dateStartCalendar = '2022-05-01';
const dateEndCalendar = '2022-06-01';
const datesOnPages = 7;

const datesForTable = [];
let counterOfClick = 1;

Date.prototype.addDays = function(days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

function formatDateForCalendar(date) {
  let day = date.getDate();
  if (day < 10) day = '0' + day;
  let month = date.getMonth() + 1;
  if (month < 10) month = '0' + month;
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
  if (counterOfClick < Math.ceil(datesForTable.length / datesOnPages)) {
    counterOfClick++;
    renderCalendar(dayCell, showDates());
  }
}
function callPrev() {
  if (counterOfClick > 1) {
    counterOfClick--;
    renderCalendar(dayCell, showDates());
  }
}

function showDates() {
  let start = (counterOfClick - 1) * datesOnPages;
  let end = start + datesOnPages;
  let weekDates = datesForTable.slice(start, end);
  return weekDates;
}

createDatesForCalendar(dateStartCalendar, dateEndCalendar);

function renderCalendar(calendarNode, datesArr) {
  calendarNode.forEach((item, i) => {
    item.textContent = datesArr[i];
  })
}

renderCalendar(dayCell, datesForTable);
