import { Link } from "react-router-dom";

const HeaderLink = ({ item }) => {
  return (
    <li>
      <Link to={item.route}>{item.text}</Link>
    </li>
  );
};

export default HeaderLink;
