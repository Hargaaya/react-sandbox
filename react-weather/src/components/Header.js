import HeaderLink from "./HeaderLink";

const Header = () => {
  const views = [
    { text: "Just nu", route: "now" },
    { text: "Idag", route: "today" },
    { text: "Denna veckan", route: "week" },
  ];

  return (
    <ul id="header">
      {views.map((elem, index) => (
        <HeaderLink key={index} item={elem}></HeaderLink>
      ))}
    </ul>
  );
};

export default Header;
