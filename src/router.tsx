import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/homePage";
import Profile from "./pages/profilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
