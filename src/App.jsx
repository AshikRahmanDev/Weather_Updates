import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Weather } from "./Components/Weather/Weather";
import Root from "./Layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <Weather /> }],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
