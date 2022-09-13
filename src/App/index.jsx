import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Select } from "../Utils/navbar";
import NotFound from "../NotFound";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import Navbar1 from "../Components/Navbar1";
import Navbar2 from "../Components/Navbar2";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/" element={<Footer />}>
          <Route path="/" element={<Navbar1 />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Route>
        <Route path="/" element={<Footer />}>
          <Route path="/" element={<Navbar2 />}>
            {Select.map((item) => {
              return (
                <Route
                  key={item.id}
                  path={`${item.path}`}
                  element={item.element}
                ></Route>
              );
            })}
          </Route>
        </Route>
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
