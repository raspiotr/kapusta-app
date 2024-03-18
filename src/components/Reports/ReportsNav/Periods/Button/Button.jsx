import { FaMinus, FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './Button.module.scss'

 const Button = ({ onButtonClick }) => {
  const handlerClick = event => {
    const name = event.currentTarget.name;
    onButtonClick(name);
    console.log(onButtonClick)
  };

  return (
    <div className={styles.box}>
      <button className={styles.button} name="decrement" onClick={handlerClick}><FaMinus /></button>
      <button className={styles.button} name="increment" onClick={handlerClick}><FaPlus /></button>
    </div>
  );
};

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
export default Button