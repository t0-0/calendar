"use client";

import { useState } from "react";
import Button from "./Button";
import clsx from "clsx";

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dayOfWeek = ["月", "火", "水", "木", "金", "土", "日"];
  const firstDayOfMonth = () => {
    const tmpDate = new Date();
    tmpDate.setFullYear(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    return (tmpDate.getDay() + 6) % 7;
  };
  const lastDate = () => {
    const tmpDate = new Date();
    tmpDate.setFullYear(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    );
    return tmpDate.getDate();
  };
  const lastDayOfMonth = () => {
    const tmpDate = new Date();
    tmpDate.setFullYear(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    );
    return (tmpDate.getDay() + 6) % 7;
  };
  const changeSelectedDate = (i: number) => {
    setSelectedDate((prev) => {
      const tmpDate = new Date();
      tmpDate.setFullYear(prev.getFullYear(), prev.getMonth(), i + 1);
      return tmpDate;
    });
  };
  return (
    <div className="flex flex-col items-center">
      20xx年y月
      <div className="grid grid-cols-7 w-11/12">
        {dayOfWeek.map((day, i) => (
          <div
            key={i}
            className="flex text-center justify-center items-center font-bold border aspect-square"
          >
            {day}
          </div>
        ))}
        {Array.from({ length: firstDayOfMonth() }).map((_, i) => {
          return <div key={i} className="border"></div>;
        })}
        {Array.from({ length: lastDate() }).map((_, i) => {
          return (
            <Button
              key={i}
              className={clsx({
                "bg-blue-200": i + 1 === selectedDate.getDate(),
              })}
              onClick={() => changeSelectedDate(i)}
              isIgnoreHover={i + 1 === selectedDate.getDate() ? true : false}
            >
              <div>{i + 1}</div>
            </Button>
          );
        })}
        {Array.from({ length: 6 - lastDayOfMonth() }).map((_, i) => {
          return <div key={i} className="border"></div>;
        })}
      </div>
    </div>
  );
};
export default Calender;
