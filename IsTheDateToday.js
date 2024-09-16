function isToday(date) {
  const today = new Date();
  return date.getDate() === today.getDate() && date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth();
}
//63 from infinity...