import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { data } from "../utils/navbar";

export const Root = () => {
  return (
    <Routes>
      {data.map(({ id, element, path }) => {
        return <Route key={id} path={path} element={element} />;
      })}
      <Route path="/" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};

export default Root;
