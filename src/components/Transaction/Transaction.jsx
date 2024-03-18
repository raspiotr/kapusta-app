import { useState } from "react";
import scss from "./Transaction.module.scss";

const Transaction = () => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");

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

  const handleSend = (event) => {
    event.preventDefault();
    console.log(description, category, value);
    setDescription("");
    setCategory("");
    setValue("");
  };

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
          <option>Zakupy</option>
          <option>Transport</option>
          <option>Praca</option>
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
          <samp className={scss.calculator}>🧮</samp>
        </div>
      </div>
      <div className={scss.buttons}>
        <button onClick={handleSend}>INPUT</button>
        <button onClick={handleClear}>CLEAR</button>
      </div>
    </form>
  );
};

export default Transaction;
