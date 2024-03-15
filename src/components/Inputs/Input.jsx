import { useState } from "react";
import scss from "./Input.module.scss";
import { useMediaQuery } from "react-responsive";

const Input = ({ isOpen, closeModal }) => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
    <>
      {isMobile ? (
        <div className={`${scss.modal} ${isOpen ? scss.open : ""}`}>
          <div className={scss.modalContent}>
            <div className={scss.close}>
              <button onClick={closeModal}>←</button>
            </div>
            <form className={scss.form}>
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
              <div>
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
              <div className={scss.buttons}>
                <button onClick={handleSend}>INPUT</button>
                <button onClick={handleClear}>CLEAR</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Input;

{
  /* <div className={scss.container}>
  <input
    type="date"
    className={scss.inputDate}
    defaultValue={currentDate}
  />
  <input
    type="text"
    placeholder="Product description"
    className={scss.inputDescription}
  />
  <select className={scss.inputCategory}>
    <option
      value=""
      disabled
      selected
      hidden
      className={scss.optionCategory}
    >
      Product category
    </option>
  </select>

  <input type="number" placeholder="0,00" className={scss.inputAmount} />
  <button className={scss.btns}>INPUT</button>
  <button className={scss.btns}>CLEAR</button>
</div> */
}
