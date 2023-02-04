import React from "react";
import styles from "./Filter.module.scss";

const Filter = ({ changeFilter, value }) => {
  return (
    <>
      <input
        className={styles.filter}
        type="text"
        name="text"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Filter"
        onChange={changeFilter}
        value={value}
      />
    </>
  );
};

export default Filter;
