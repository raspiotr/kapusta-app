import  { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import scss from "./Transaction.module.scss";
import { addCategory } from "../../api/apiCategory";
import { addTransactionAPI } from "../../api/apiTransaction";
import calculator from "../../images/SVG/calculator.svg";
import { newTransaction, updateAuthBalance } from "../../redux/reducers/transactionReducer";

const Transaction = () => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

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
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const body = {
      day,
      month,
      year,
      description,
      category,
      amount: value,
    };
    let type = "expense" || "income";
    let token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmQ5OTlhODU0MGRlMjFkYTkxODk2MSIsImlhdCI6MTcxMTExODc3MiwiZXhwIjoxNzExNzIzNTcyfQ.Rk1yYyi-D4rwxwKlgvCYD0NYT7Vtcx75_OLbhEOpefY'
    try {
      const response = await addTransactionAPI({ type, body, token });
      dispatch(newTransaction(response.data.transaction));
      dispatch(updateAuthBalance(response.data.newBalance))
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
      return setCategories(categories.data);
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
