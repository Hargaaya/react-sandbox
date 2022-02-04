import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, buttonText }) => {
  return (
    <header className="flex flex-row justify-between ">
      <h1 className="text-3xl font-semibold text-center ">{title}</h1>
      <Button text={buttonText} color="red"></Button>
    </header>
  );
};

//let h1Style = {
//  color: "white",
//  margin: "10px",
//  textAlign: "center",
//};

Header.defaultProps = {
  title: "Welcome to task app!",
  buttonText: "BUTTON",
};

//Header.propTypes = {
//  title: PropTypes.string.isRequired,
//};

export default Header;
