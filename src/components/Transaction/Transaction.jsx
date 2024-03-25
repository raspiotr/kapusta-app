import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import scss from "./Transaction.module.scss";
import { addCategory } from "../../api/apiCategory";
import calculator from "../../images/SVG/calculator.svg";
import Select from "react-select";
import { addTransaction } from "../../redux/contacts/operations";
import { setNewBalance } from "../../redux/auth/slice";
import { selectUser } from "../../redux/auth/selectors";
import PropTypes from "prop-types";

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: "#f5f6fb",
    color: "black",
    display: "flex",
    height: "48px",
    minWidth: "200px",
    width: "100%",
    maxWidth: "500px",
    borderWidth: "3px",
    padding: "0px 12px 0px 10px",
    marginRight: "14px",
    borderRadius: "0",
    "&:hover": {
      borderColor: "none",
      boxShadow: "none",
    },
  }),
  menu: (provided) => ({
    ...provided,
    height: "auto",
    boxShadow: "0px 4px 8px 4px rgba(0, 0, 0, 0.1)",
    
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: '450px'
    
  }),

  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    backgroundColor: isFocused ? "#F5F6FB" : isSelected ? "#F5F6FB" : null,
    color: isSelected ? "black" : "#757575",
    padding: 10,
    fontSize: "14px",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#757575",
  }),

  valueContainer: (provided) => ({
    ...provided,
    marginTop: "-5px",
    width: "130px",
  }),
};
const Transaction = ({ isActive, selectedDate }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const balance = user.balance;
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption);
  };

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

      const formattedCategories = filter.map((cat) => ({
        value: cat.categoryName,
        label: cat.categoryName,
      }));

      setCategories(formattedCategories);
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
        <div className="myCustomSelect">
          <Select
            styles={customStyles}
            value={category}
            onChange={handleCategoryChange}
            options={categories}
            placeholder="Select category"
          />
        </div>
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
