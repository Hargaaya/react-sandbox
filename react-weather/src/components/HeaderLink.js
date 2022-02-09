const HeaderLink = ({ item }) => {
  return (
    <li className="hover:bg-gray-100/30 rounded-md px-2 py-1 cursor-pointer">
      {item.name}
    </li>
  );
};

export default HeaderLink;
