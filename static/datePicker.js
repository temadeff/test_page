// Make your own here: https://eternicode.github.io/bootstrap-datepicker

const dateSelect = $('#flight-datepicker');
const dateDepart = $('#start-date');
const dateReturn = $('#end-date');
const spanDepart = $('.date-depart');
const spanReturn = $('.date-return');
const spanDateFormat = 'ddd, MMMM D yyyy';

dateSelect.datepicker({
  autoclose: true,
  format: 'D, MM dd',
  maxViewMode: 0,
  startDate: 'now',
}).on('change', () => {
  const start = $.format.date(dateDepart.datepicker('getDate'), spanDateFormat);
  const end = $.format.date(dateReturn.datepicker('getDate'), spanDateFormat);
  spanDepart.text(start);
  spanReturn.text(end);
});
