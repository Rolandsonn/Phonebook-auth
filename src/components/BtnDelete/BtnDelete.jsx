import React from "react";
import styles from "./BtnDelete.module.scss";
import img from "../../assets/img/btn-delete.png";
const BtnDelete = ({ handleDelete, id }) => {
  return (
    <>
      <span className={styles.delete} onClick={() => handleDelete(id)}>
        <img width={20} src={img} alt="" />
      </span>
    </>
  );
};

export default BtnDelete;
