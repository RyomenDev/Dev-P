let date1 = new Date();
console.log(date1); // 2024-12-04T14:35:12.240Z

let Date2 = new Date().toString();
console.log(Date2); // Wed Dec 04 2024 20:05:12 GMT+0530 (India Standard Time)

let Date3 = new Date().toLocaleString();
console.log(Date3); // 4/12/2024, 8:05:12 pm

console.log(date1.getFullYear()); //  2024 (current year)
console.log(date1.getMonth() + 1); //  12 (current month, 0-based index)
console.log(date1.getDate()); //  5 (current day of the month)
console.log(date1.getHours()); //  current hour
console.log(date1.getMinutes()); //  current minutes

let Date4 = new Date().toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
console.log(Date4);
// Logs: Thursday, December 5, 2024, 10:45:30 AM
