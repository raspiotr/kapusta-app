import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setBalance } from '../../redux/actions/balanceActions';
import { updateBalanceAPI } from '../../api/apiTransaction'; // Importujemy funkcję updateBalanceAPI
import scss from "./Balance.module.scss";

export const Balance = ({ balance, setBalance }) => {
  const confirmBalance = async () => { // Aktualizujemy funkcję confirmBalance na asynchroniczną
    const newBalance = document.getElementById('balance').value;
    try {
      await updateBalanceAPI({ balance: newBalance }); // Wywołujemy funkcję updateBalanceAPI
      setBalance(newBalance);
      console.log(`Your balance: ${newBalance} UAH is confirmed`);
    } catch (error) {
      console.error('Error updating balance:', error.message);
    }
  };

  return (
    <div className={scss.container}>
      <label className={scss.name}>Balance: </label>
      <div className={scss.box}>
        <div className={scss.balanceBox}>
          <input
            className={scss.balance}
            id="balance"
            type="number"
            value={balance}
            placeholder="00.00"
            min="0"
          />
          <span className={scss.currency}>PLN</span>
        </div>

        <button onClick={confirmBalance} className={scss.confirm}>
          Confirm
        </button>
      </div>
    </div>
  );
};

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  setBalance: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    balance: state.balance.balance,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBalance: (newBalance) => dispatch(setBalance(newBalance)),
  };
};

const ConnectedBalance = connect(mapStateToProps, mapDispatchToProps)(Balance);
export default ConnectedBalance;
