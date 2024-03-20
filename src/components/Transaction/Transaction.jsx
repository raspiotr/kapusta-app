import { useEffect, useState } from "react";
import scss from "./Transaction.module.scss";
import { addCategory } from "../../api/apiCategory";
import { addTransactionAPI } from "../../api/apiTransaction";
import calculator from "../../images/SVG/calculator.svg";

const Transaction = () => {
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

  const addTransaction = async (event) => {
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
    try {
      return await addTransactionAPI({ type, body });
    } catch (error) {
      console.error(error.message);
    }
    setDescription("");
    setCategory("");
    setValue("");
  };

  const getCategory = async () => {
    try {
      const categories = await addCategory();
      return setCategories(categories.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <form className={scss.form}>
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
        <button onClick={addTransaction}>INPUT</button>
        <button onClick={handleClear}>CLEAR</button>
      </div>
    </form>
  );
};

export default Transaction;
