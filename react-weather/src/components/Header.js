import HeaderLink from "./HeaderLink";
import { useState } from "react";

const Header = () => {
  const [views, setViews] = useState([
    { text: "today", route: "now" },
    { text: "5 days", route: "week" },
    // { text: "Tomorrow", route: "tomorrow" },
  ]);

  return (
    <ul className="container mx-auto max-w-xl m-3 flex justify-around text-white text-2xl font-semibold">
      {views.map((elem, index) => (
        <HeaderLink key={index} item={elem}></HeaderLink>
      ))}
    </ul>
  );
};

export default Header;
