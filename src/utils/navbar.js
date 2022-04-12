import { Login } from "../component/Login";
import Receiver from "../component/Receiver";
import { Register } from "../component/Register";
import Home from "../pages/EslimatedRates";

export const data = [
  {
    id: 1,
    path: "/home",
    element: <Home />,
    child: [],
  },
  {
    id: 2,
    path: "/login",
    element: <Login />,
    child: [],
  },
  {
    id: 3,
    path: "/signup",
    element: <Register />,
    child: [],
  },
  {
    id: 4,
    path: "/receiver",
    element: <Receiver />,
    child: [],
  },
];
