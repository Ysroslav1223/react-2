import React, { useState } from "react";
import styles from "./app.module.css";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  const isValueValid = value.length >= 3;

  const onInputButtonClick = () => {
    const promptValue = prompt("Ввести новое");
    console.log(promptValue);
    setValue(promptValue);
    if (promptValue.length >= 3) {
      setError("");
    } else {
      setError("Введенное значение должно содержать минимум 3 символа");
    }
  };

  const onAddButtonClick = () => {
    if (isValueValid) {
      const updatedList = [...list, { id: Date.now(), value }];
      setList(updatedList);
      setValue("");
      setError("");
    }
  };
  return (
    <div className={styles["app"]}>
      <h1 className={styles["page-heading"]}>Ввод значения</h1>
      <p className={styles["no-margin-text"]}>
        Текущее значение <code>value</code>:
        <output className={styles["current-value"]}>{value}</output>
      </p>
      <div className={styles["error"]}>{error}</div>
      <div className={styles["buttons-container"]}>
        <button className={styles["button"]} onClick={onInputButtonClick}>
          Ввести новое
        </button>
        <button
          className={styles["button"]}
          disabled={!isValueValid}
          onClick={onAddButtonClick}
        >
          Добавить в список
        </button>
      </div>
      <div className={styles["list-container"]}>
        <h2 className={styles["list-heading"]}>Список:</h2>
        <p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
        <ul className={styles.list}>
          {list.length > 0 ? (
            list.map((item) => <li key={item.id}>{item.value}</li>)
          ) : (
            <p className={styles["no-margin-text"]}>
              Нет добавленных элементов
            </p>
          )}
          <li className={styles["list-item"]}></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
