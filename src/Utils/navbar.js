import Pizza from "../Components/Category/Pizza";
import Home from "../Components/Home";
import Sushi from "../Components/Category/Sushi";
import Drinks from "../Components/Category/Drinks";
import Snacks from "../Components/Category/Snacks";
import Combo from "../Components/Category/Combo";
import Deserts from "../Components/Category/Deserts";
import Souces from "../Components/Category/Souces";

export const Select = [
  { id: 1, title: "Акции", path: "/home", element: <Home /> },
  { id: 2, title: "Пицца", path: "/pizza", element: <Pizza /> },
  { id: 3, title: "Суши", path: "/sushi", element: <Sushi /> },
  {
    id: 4,
    title: "Напитки",
    path: "/drinks",
    element: <Drinks />,
  },
  {
    id: 5,
    title: "Закуски",
    path: "/snacks",
    element: <Snacks />,
  },
  { id: 6, title: "Комбо", path: "/combo", element: <Combo /> },
  {
    id: 7,
    title: "Десерты",
    path: "/deserts",
    element: <Deserts />,
  },
  { id: 8, title: "Соусы", path: "/souces", element: <Souces /> },
];
