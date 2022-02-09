import HeaderLink from "./HeaderLink";
import { useState } from "react";

const Header = () => {
  const [views, setViews] = useState([
    { text: "Now", route: "now" },
    { text: "24 H", route: "today" },
    { text: "Tomorrow", route: "tomorrow" },
    { text: "7 Days", route: "week" },
  ]);

  return (
    <ul className="container mx-auto max-w-lg m-3 flex justify-between text-white text-2xl font-semibold">
      {views.map((elem, index) => (
        <HeaderLink key={index} item={elem}></HeaderLink>
      ))}
    </ul>
  );
};

export default Header;
