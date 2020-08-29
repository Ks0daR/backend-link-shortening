import React from "react";
import { useState } from "react";
import styles from "./InputForm.module.css";

export const InputForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(inputValue);
  };
  return (
    <>
      <div className="container center-align">
        <form onSubmit={handleSubmit}>
          <label className={styles.description}>
            Вставьте ссылку
            <input type="text" onChange={handleInput} value={inputValue} />
          </label>
          <button
            className="btn-large"
            type="submit"
            name="action"
            disabled={!Boolean(inputValue)}
          >
            Сократить!
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </>
  );
};
