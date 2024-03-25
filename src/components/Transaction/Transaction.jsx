import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import scss from "./Transaction.module.scss";
import { addCategory } from "../../api/apiCategory";
import { addTransactionAPI } from "../../api/apiTransaction";
import calculator from "../../Images/SVG/calculator.svg";
import Select from "react-select";
// import {
//   newTransaction,
//   updateAuthBalance,
// } from "../../redux/reducers/transactionReducer";

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: '#f5f6fb',
    display: 'flex',
    height: '48px',
    minWidth: '200px',
    width: '100%',
    maxWidth: '500px',
    borderWidth: '3px',
    fontSize: '13px',
    padding: '0px 12px 0px 10px',
    marginRight: '14px',
    borderRadius: '0',
    '&:hover': {
      borderColor: 'grey',
      boxShadow: 'none',
    },
    
  }),
  menu: (provided) => ({
    ...provided,
   height: '480px',
    boxShadow: '0px 4px 8px 4px rgba(0, 0, 0, 0.1)',
  }),
  menuList: (provided) => ({
    ...provided,
      overflow: 'visible'
  }),

  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    backgroundColor: isFocused ? '#F5F6FB' : isSelected ? '#F5F6FB' : null,
    color: isSelected ? 'black' : '#C7CCDC',
    padding: 10,
    fontSize: '14px',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#C7CCDC',
  }),

  valueContainer: (provided) => ({
    ...provided,
    marginTop: '-5px',
    width: '130px'
  }),
};
const Transaction = ({ isActive, selectedDate }) => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const [categories, setCategories] = useState([]);
  // const dispatch = useDispatch();

  const handleCategoryChange = selectedOption => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const date = selectedDate;
    const type = isActive ? "expense" : "income";
    const body = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      type: isActive ? "expense" : "income",
      description,
      category,
      amount: value,
    };

    console.log(body);

    // let token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmQ5OTlhODU0MGRlMjFkYTkxODk2MSIsImlhdCI6MTcxMTExODc3MiwiZXhwIjoxNzExNzIzNTcyfQ.Rk1yYyi-D4rwxwKlgvCYD0NYT7Vtcx75_OLbhEOpefY";
    try {
      // await addTransactionAPI({ type, body, token });
      // dispatch(newTransaction(response.data.transaction));
      // dispatch(updateAuthBalance(response.data.newBalance))
      setDescription("");
      setCategory("");
      setValue("");
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchCategories = async () => {
    try {
      const categories = await addCategory();
      const formattedCategories = categories.data.map(cat => ({
        value: cat.categoryName,
        label: cat.categoryName
      }));
      setCategories(formattedCategories);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
            placeholder="UTH"
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

export default Transaction;
