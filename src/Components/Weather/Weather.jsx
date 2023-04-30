import { useQuery } from "@tanstack/react-query";
import { timeConverter } from "../../Utilities/timeConverter";
import { WeatherDetails } from "./WeatherDetails";

export const Weather = () => {
  // fetch data
  const fetchWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=dhaka&appid=c0ec8c04c841566f9772dba47b879268`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  const {
    data: weather,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["fetchWeather"],
    queryFn: fetchWeather,
  });
  //   handle search
  const handleSearch = (city) => {
    refetch();
    console.log(city);
  };
  console.log(weather?.list);
  const date = timeConverter(weather?.list[1].dt);
  console.log(date);

  return (
    <div className="flex">
      {" "}
      <div className="w-[65%]">
        {/* search */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(e.target[0].value);
          }}
          action=""
        >
          <input
            type="text"
            className="w-full bg-white/10 h-[40px] rounded-lg px-3"
            name="search"
            placeholder="Search our cities"
          />
        </form>
        <WeatherDetails />
      </div>
      <div className="w-[40%]"></div>
    </div>
  );
};
