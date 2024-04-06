import { Landing } from "@src/screens/Landing";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const RouteConfig = () => {
  const router = createBrowserRouter([{ path: "/home", element: <Landing /> }]);

  return <RouterProvider router={router} />;
};

export { RouteConfig };
