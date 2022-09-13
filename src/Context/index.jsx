import React, { createContext, useState } from "react";
import pizza from "../Mock/pizza";
import combos from "../Mock/combo";
import desert from "../Mock/desert";
import drinks from "../Mock/drinks";
import sauces from "../Mock/sauces";
import snacks from "../Mock/snacks";
import sushi from "../Mock/sushi";

export const Pizza = createContext();

export const Context = ({ children }) => {
  const data = {
    combos: combos,
    desert: desert,
    drinks: drinks,
    pizza: pizza,
    sauces: sauces,
    snacks: snacks,
    sushi: sushi,
  };
  const [state, setState] = useState(data);

  const [selectedId, setSelectedId] = useState(null);

  return (
    <Pizza.Provider value={{ state, setState, selectedId, setSelectedId }}>
      {children}
    </Pizza.Provider>
  );
};

export default Context;
