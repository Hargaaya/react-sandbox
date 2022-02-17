const HeaderLink = ({ item }) => {
  return (
    <li>
      <a href={`/${item.route}`}>{item.text}</a>
    </li>
  );
};

export default HeaderLink;
