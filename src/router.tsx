import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/homePage";
import Profile from "./pages/profilePage";
import Search from "./pages/searchPage";
import Item from "./pages/itemPage";
import Cart from "./pages/cartPage";

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
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/item",
        element: <Item />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
