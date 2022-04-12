import { Login } from "../component/Login";
import { Register } from "../component/Register";
import Rates from "../pages/Rates";
import Home from "../pages/Home";
import Summary from "../pages/Summary";
import Receivers from "../pages/Receiver";
import Payments from "../pages/Payment";

export const data = [
  {
    id: 1,
    path: "/login",
    element: <Login />,
    child: [],
  },
  {
    id: 2,
    path: "/signup",
    element: <Register />,
    child: [],
  },
  {
    id: 3,
    path: "/home",
    element: <Home />,
    child: [],
  },
  {
    id: 4,
    path: "/rates",
    element: <Rates />,
    child: [],
  },
  {
    id: 5,
    path: "/receiver",
    element: <Receivers />,
    child: [],
  },
  {
    id: 6,
    path: "/payment",
    element: <Payments />,
    child: [],
  },
  {
    id: 7,
    path: "/summary",
    element: <Summary />,
    child: [],
  },
];
