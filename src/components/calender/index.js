import React from "react";
import dayjs from "dayjs";
import { useState } from "react";
import { getMonth } from "./utils";
import { AiFillClockCircle } from "react-icons/ai";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function isToday(day) {
  return dayjs().isSame(day, "day");
}

function CalenderContainer() {
  const [selectedMonth, setSelectedMonth] = useState(dayjs().get("month"));

  return (
    <div className="calender-container">
      <div className="header-controls-container">
        <button
          className="header-buttons"
          onClick={() => {
            const newVal = selectedMonth - 1;
            setSelectedMonth(newVal < 0 ? 11 : newVal);
          }}
        >
          {"<"}
        </button>
        <strong className="header-text">
          {MONTHS[selectedMonth]} &nbsp; <span>2021</span>{" "}
        </strong>
        <button
          className="header-buttons"
          onClick={() => {
            const newVal = selectedMonth + 1;
            setSelectedMonth(newVal > 11 ? 0 : newVal);
          }}
        >
          {">"}
        </button>
      </div>
      <div className="days-row d-flex">
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day, idx) => {
          return (
            <div
              className={
                "week-day" +
                `${
                  dayjs().day() === idx && dayjs().month === selectedMonth
                    ? " today"
                    : ""
                }`
              }
            >
              {day}
            </div>
          );
        })}
      </div>
      <div className="month-content">
        {getMonth(selectedMonth).map((week) => {
          return (
            <div className="week-row d-flex">
              {week.map(({ name, eventDate, classNames }) => {
                return (
                  <div
                    className={
                      "week-day day-cell " +
                      `${
                        isToday(eventDate)
                          ? " today"
                          : "" + (classNames || []).join("  ")
                      }`
                    }
                  >
                    <span className="date-span"> {eventDate.date()} </span>

                    <div className="event-container">
                      <div className="event-content">
                        <div className="event-name-text">{name}</div>
                        <div className="event-time-text">
                          <AiFillClockCircle />
                          {"9:00 am- 1:00 pm"}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalenderContainer;
