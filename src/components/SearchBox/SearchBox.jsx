import React, { useEffect, useState } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ data, setData }) => {
  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div className={css.container}>
      Find contacts by name
      <input type="text" value={data} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
