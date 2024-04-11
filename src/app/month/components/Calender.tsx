const Calender = () => {
  const dayOfWeek = ["月", "火", "水", "木", "金", "土", "日"];
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
      </div>
    </div>
  );
};
export default Calender;
