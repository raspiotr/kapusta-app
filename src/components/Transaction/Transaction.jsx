import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import scss from "./Transaction.module.scss";
import { addCategory } from "../../api/apiCategory";
import { addTransaction } from "../../redux/transactions/operations";
import calculator from "../../images/SVG/calculator.svg";
import { setNewBalance } from "../../redux/auth/slice";
import { selectUser } from "../../redux/auth/selectors";
import PropTypes from "prop-types";
const Transaction = ({ isActive, selectedDate }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const balance = user.balance;
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const [categories, setCategories] = useState([]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "description":
        setDescription(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "value":
        setValue(value);
        break;
      default:
        break;
    }
  };
  const handleClear = (event) => {
    event.preventDefault();
    setDescription("");
    setCategory("");
    setValue("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const date = selectedDate;
    const body = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      type: isActive ? "expense" : "income",
      description,
      category,
      amount: value,
    };
    const valuePositive = Math.abs(value);
    const change = isActive ? valuePositive * -1 : valuePositive;
    const newBalance = Number(balance) + change;
    dispatch(setNewBalance({ balance: newBalance }));
    dispatch(addTransaction(body));
    setDescription("");
    setCategory("");
    setValue("");
  };
  const fetchCategories = async () => {
    const type = isActive ? "expense" : "income";
    try {
      const categories = await addCategory();
      const filter = categories.data.filter(
        (item) => item.categoryType === type
      );
      return setCategories(filter);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, [isActive]);
  return (
    <form className={scss.form} onSubmit={handleSubmit}>
      <div className={scss.inputsBox}>
        <input
          name="description"
          onChange={handleChange}
          value={description}
          className={scss.description}
          type="text"
          placeholder="Product description"
        />
        <input
          name="category"
          onChange={handleChange}
          value={category}
          className={scss.category}
          list="category"
          placeholder="Product category"
        />
        <datalist id="category">
          {categories.map((category) => (
            <option key={category._id}>{category.categoryName}</option>
          ))}
        </datalist>
        <div className={scss.valueBox}>
          <input
            name="value"
            onChange={handleChange}
            className={scss.value}
            value={value}
            placeholder="PLN"
            type="number"
          />
          <samp className={scss.calculator}>
            <img src={calculator} alt="" />
          </samp>
        </div>
      </div>
      <div className={scss.buttons}>
        <button type="submit">INPUT</button>
        <button onClick={handleClear}>CLEAR</button>
      </div>
    </form>
  );
};
Transaction.propTypes = {
  isActive: PropTypes.bool.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
};
export default Transaction;
