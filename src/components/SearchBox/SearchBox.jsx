import css from "./SearchBox.module.css";

const SearchBox = ({ inputValue, changeInputValue }) => {
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={changeInputValue}
      />
    </div>
  );
};

export default SearchBox;
