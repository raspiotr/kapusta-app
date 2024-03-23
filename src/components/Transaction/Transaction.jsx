import { useEffect, useState } from "react";
 import { useDispatch } from "react-redux";
import scss from "./Transaction.module.scss";
import { addCategory } from "../../api/apiCategory";
import { addTransaction } from "../../redux/contacts/operations";
import calculator from "../../images/SVG/calculator.svg";


const Transaction = ({ isActive, selectedDate }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const [categories, setCategories] = useState([]);
  // const dispatch = useDispatch();

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

  
    try {
      dispatch(addTransaction(body ));
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
