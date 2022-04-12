import React from "react";
import { Link } from "react-router-dom";
import { Wrap } from "./style";

export const Navbar = () => {
  return (
    <Wrap>
      <Link to={'/home'}>
      <Wrap.Btn width="200" height="48">
        Logo placeholder
      </Wrap.Btn>
      </Link>
      <Link to={'/login'}>
      <Wrap.Btn width="154" height="48">
        Log In
      </Wrap.Btn>
      </Link>
    </Wrap>
  );
};

export default Navbar;
