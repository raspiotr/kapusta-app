import scss from "./Container.module.scss";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className={scss.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.object.isRequired,
};
export default Container;
