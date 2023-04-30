import { Outlet } from "react-router-dom";
import { Navigator } from "../Components/Shared/Navigator";

const Root = () => {
  return (
    <div className="h-[100vh] p-4 flex gap-4">
      <div className="bg-white/10 p-4 w-[100px] rounded-xl flex justify-center">
        <Navigator />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
