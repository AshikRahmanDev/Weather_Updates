import { Link } from "react-router-dom";
import { TiWeatherWindyCloudy, TiWeatherPartlySunny } from "react-icons/ti";
import { BsMapFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { useState } from "react";

const Navigator = () => {
  const [route, setRoute] = useState("weather");
  // link activator
  const linkActivator = (link) => {
    setRoute(link);
  };
  return (
    <div className="bg-transparent flex flex-col gap-4">
      <Link
        onClick={() => linkActivator("weather")}
        className="bg-white/5 p-2 rounded-xl text-blue"
        to={"/"}
      >
        <TiWeatherWindyCloudy className="bg-transparent text-5xl" />
      </Link>
      <Link
        onClick={() => linkActivator("weather")}
        className={`bg-transparent mx-auto text-center mt-5 ${
          route == "weather" ? "text-blue" : "text-white/50"
        }`}
        to={"/"}
      >
        <TiWeatherPartlySunny className="bg-transparent text-3xl mx-auto" />
        <p className="up">Weather</p>
      </Link>
      <Link
        onClick={() => linkActivator("setting")}
        className={`bg-transparent mx-auto text-center mt-5 ${
          route == "setting" ? "text-blue" : "text-white/50"
        }`}
        to={"/"}
      >
        <AiOutlineSetting className="bg-transparent text-3xl mx-auto" />
        <p className="up">Setting</p>
      </Link>
      <Link
        onClick={() => linkActivator("map")}
        className={`bg-transparent mx-auto text-center mt-5 ${
          route == "map" ? "text-blue" : "text-white/50"
        }`}
        to={"/"}
      >
        <BsMapFill className="bg-transparent text-2xl mx-auto" />
        <p className="up">Map</p>
      </Link>
    </div>
  );
};

export { Navigator };
