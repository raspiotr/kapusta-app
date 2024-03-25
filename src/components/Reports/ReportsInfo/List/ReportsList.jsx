import { useState } from "react";
import "./ReportsList.module.scss";

export const ReportsList = () => {
  const [active, setActive] = useState("");
  const [reports] = useState([]);

  const handleItemClick = (item) => {
    setActive(item);
  };

  return (
    <div>
      <ul>
        {reports.map((item) => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item)}
            className={`${item === active ? "active" : ""}`}
          >
            <p>{item.category}</p>
            <svg
              width="56"
              height="56"
              className={item.iconName === active ? "active" : ""}
            >
              <use href={`${item.categoryImageUrl}#${item.iconName}`}></use>
            </svg>
            <p>{item.total} UAH</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportsList;
