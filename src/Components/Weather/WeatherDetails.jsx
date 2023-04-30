import sunny from "../../assets/1.png";
import { CiTempHigh } from "react-icons/ci";

const WeatherDetails = () => {
  return (
    <div className="py-3">
      {/* wether */}
      <div className="flex justify-between">
        <div className="p-5">
          <h1 className="text-6xl font-semibold">Dhaka</h1>
          <p className="text-white/50">Chance of rain: 0%</p>
          <h1 className="mt-5 text-6xl font-semibold">
            31<span className="text-xl">c</span>
          </h1>
        </div>
        <img className="w-[200px]" src={sunny} alt="" />
      </div>
      {/* air conditin */}
      <div className="w-full p-4 px-8 bg-white/10 mt-10 rounded-lg">
        <p className="pb-3 text-[10px] text-white/50 uppercase ">
          Air Conditions
        </p>
        {/* items */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <h4 className="flex items-center mt-2 text-md text-white/50 font-semibold">
              <CiTempHigh /> Real Feel
            </h4>
            <h1 className="text-3xl ml-6 font-semibold">
              31<span className="text-xl">c</span>
            </h1>
          </div>
          <div>
            <h4 className="flex items-center mt-2 text-md text-white/50 font-semibold">
              <CiTempHigh /> Winds
            </h4>
            <h1 className="text-3xl ml-6 font-semibold">
              31<span className="text-xl">c</span>
            </h1>
          </div>
          <div>
            <h4 className="flex items-center mt-2 text-md text-white/50 font-semibold">
              <CiTempHigh /> Chance of rain
            </h4>
            <h1 className="text-3xl ml-6 font-semibold">
              31<span className="text-xl">c</span>
            </h1>
          </div>
          <div>
            <h4 className="flex items-center mt-2 text-md text-white/50 font-semibold">
              <CiTempHigh /> Chance of rain
            </h4>
            <h1 className="text-3xl ml-6 font-semibold">
              31<span className="text-xl">c</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export { WeatherDetails };
