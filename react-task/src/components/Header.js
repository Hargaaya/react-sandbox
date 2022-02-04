import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, buttonText, onClick }) => {
  return (
    <header className="flex flex-row justify-between mb-4">
      <h1 className="text-3xl font-semibold text-center ">{title}</h1>
      <Button text={buttonText} onClick={onClick}></Button>
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
