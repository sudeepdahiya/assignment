function getMinutesBetweenDates(startDate, endDate) {
  var diff = endDate.getTime() - startDate.getTime();
  return diff / 60000;
}

export { getMinutesBetweenDates };
