import React from 'react';
import styles from './ProductInput.module.css';

function ProductInput() {
  
  const currentDate = new Date().toISOString().split('T')[0];

    return (
    <div className={styles.module}>
    <div className={styles.container}>
        <input type="date" 
          className={styles.inputDate} 
          defaultValue={currentDate} />
        <input type="text" 
          placeholder="Product description" 
          className={styles.inputDescription} />
        <select className={styles.inputCategory}>
          <option value="" disabled selected hidden 
          className={styles.optionCategory}>Product category</option>
        </select>
                  
        <input type="number" 
          placeholder="0,00" 
          className={styles.inputAmount} />
        <button className={styles.btns}>INPUT</button>
        <button className={styles.btns}>CLEAR</button>
    </div>
    </div>
    )
}


export default ProductInput