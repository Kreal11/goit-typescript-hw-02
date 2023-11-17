/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Sunday = "Sunday",
  Saturday = "Saturday",
}

function isWeekend(day: Day): boolean {
  return day === Day.Sunday || day === Day.Saturday;
}
