import React from "react";
import { Wrap } from "./style";

export const Navbar = () => {
  return (
    <Wrap>
      <Wrap.Btn width="200" height="48">
        Logo placeholder
      </Wrap.Btn>
      <Wrap.Btn width="154" height="48">
        Log Out
      </Wrap.Btn>
    </Wrap>
  );
};

export default Navbar;
