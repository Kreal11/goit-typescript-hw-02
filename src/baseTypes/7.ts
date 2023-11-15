/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Sunday,
  Saturday,
}

function isWeekend(day: Day): boolean {
  if (day === Day.Sunday || Day.Saturday) {
    return true;
  }
  return false;
}
