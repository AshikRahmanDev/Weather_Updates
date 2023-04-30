import { WeatherDetails } from "./WeatherDetails";

export const Weather = () => {
  return (
    <div className="flex">
      {" "}
      <div className="w-[60%]">
        {/* search */}
        <form action="">
          <input
            type="text"
            className="w-full bg-white/10 h-[40px] rounded-lg px-3"
          />
        </form>
        <WeatherDetails />
      </div>
      <div className="w-[40%]"></div>
    </div>
  );
};
