import dayjs from "dayjs";

export function getMonth(month = dayjs().month(), year = dayjs().year()) {
  //get first day of the month

  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day(); //index representation of a day - 0,6

  const daysinMonth = dayjs(new Date(year, month, 1)).daysInMonth();
  let currentMonthCount = 0 - (firstDayOfMonth - 1);

  const daysMatrix = new Array(5).fill([]).map((weekRow) => {
    return new Array(7).fill(null).map((day) => {
      currentMonthCount++;
      console.log({
        currentMonthCount,
        date: dayjs(new Date(year, month, currentMonthCount)),
        firstDayOfMonth,
      });

      return {
        name: "Test Event",
        classNames: [
          `${
            currentMonthCount <= 0 || currentMonthCount > daysinMonth
              ? "opaque-cell"
              : ""
          }`,
        ],
        eventDate: dayjs(new Date(year, month, currentMonthCount)),
      };
    });
  });
  //   console.table(daysMatrix);
  return daysMatrix;
}
