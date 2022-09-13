import fire from "../Assets/icon/fire.svg";
import pizza from "../Assets/icon/pizza.svg";
import sushi from "../Assets/icon/sushi.svg";
import drink from "../Assets/icon/drink.svg";
import snacks from "../Assets/icon/snacks.svg";
import combo from "../Assets/icon/combo.svg";
import dessert from "../Assets/icon/dessert.svg";
import sauce from "../Assets/icon/sauce.svg";
import Generic from "../Generic";

export const Select = [
  { id: 1, title: "Акции", img: fire, path: "/home", element: <Generic /> },
  { id: 2, title: "Пицца", img: pizza, path: "/pizza", element: <Generic /> },
  { id: 3, title: "Суши", img: sushi, path: "/sushi", element: <Generic /> },
  {
    id: 4,
    title: "Напитки",
    img: drink,
    path: "/drinks",
    element: <Generic />,
  },
  {
    id: 5,
    title: "Закуски",
    img: snacks,
    path: "/snacks",
    element: <Generic />,
  },
  { id: 6, title: "Комбо", img: combo, path: "/combo", element: <Generic /> },
  {
    id: 7,
    title: "Десерты",
    img: dessert,
    path: "/deserts",
    element: <Generic />,
  },
  { id: 8, title: "Соусы", img: sauce, path: "/souces", element: <Generic /> },
];
