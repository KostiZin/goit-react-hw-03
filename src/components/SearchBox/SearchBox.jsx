import css from "./SearchBox.module.css";

// eslint-disable-next-line react/prop-types
const SearchBox = ({ data, setData }) => {
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={data}
        onChange={setData}
      />
    </div>
  );
};

export default SearchBox;
