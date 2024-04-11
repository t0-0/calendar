import { FC, Dispatch, SetStateAction } from "react";
import Button from "./Button";

interface Props {
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}

const Header: FC<Props> = ({ selectedDate, setSelectedDate }) => {
  const prevYear = () => {
    setSelectedDate((prev) => {
      const ret = new Date();
      ret.setFullYear(prev.getFullYear() - 1, prev.getMonth(), 1);
      return ret;
    });
  };
  const prevMonth = () => {
    setSelectedDate((prev) => {
      const ret = new Date();
      ret.setFullYear(prev.getFullYear(), prev.getMonth() - 1, 1);
      return ret;
    });
  };
  const nextMonth = () => {
    setSelectedDate((prev) => {
      const ret = new Date();
      ret.setFullYear(prev.getFullYear(), prev.getMonth() + 1, 1);
      return ret;
    });
  };
  const nextYear = () => {
    setSelectedDate((prev) => {
      const ret = new Date();
      ret.setFullYear(prev.getFullYear() + 1, prev.getMonth(), 1);
      return ret;
    });
  };
  return (
    <>
      <Button
        onClick={() =>
          setSelectedDate(() => {
            return new Date();
          })
        }
        className="rounded w-2/12 h-10 aspect-auto mt-3 bg-gray-200 hover:bg-gray-300"
      >
        今日
      </Button>
      <div className="grid grid-cols-7 items-center justify-center text-center m-2 w-1/2">
        <Button onClick={prevYear}>
          <span className="material-symbols-outlined text-blue-300">
            keyboard_double_arrow_left
          </span>
        </Button>
        <Button onClick={prevMonth}>
          <span className="material-symbols-outlined text-blue-300">
            keyboard_arrow_left
          </span>
        </Button>
        <div className="px-3 col-span-3">
          {selectedDate.getFullYear()}年{selectedDate.getMonth() + 1}月
        </div>
        <Button onClick={nextMonth}>
          <span className="material-symbols-outlined text-blue-300">
            keyboard_arrow_right
          </span>
        </Button>
        <Button onClick={nextYear}>
          <span className="material-symbols-outlined text-blue-300">
            keyboard_double_arrow_right
          </span>
        </Button>
      </div>
    </>
  );
};

export default Header;
