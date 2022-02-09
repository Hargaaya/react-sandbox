import HeaderLink from "./HeaderLink";
import { useState } from "react";

const Header = () => {
  const [views, setViews] = useState([
    { name: "4 Hours", route: "hours" },
    { name: "Today", route: "today" },
    { name: "Tomorrow", route: "tomorrow" },
    { name: "7 Days", route: "week" },
  ]);

  return (
    <ul className="container mx-auto max-w-lg m-3 flex justify-between text-white text-2xl font-semibold">
      {views.map((elem) => (
        <HeaderLink item={elem}></HeaderLink>
      ))}
    </ul>
  );
};

export default Header;
