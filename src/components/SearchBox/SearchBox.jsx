import css from "./SearchBox.module.css";

// const SearchBox = ({ data, setData }) => {
//   const handleChange = (e) => {
//     setData(e.target.value);
//   };

//   return (
//     <div className={css.container}>
//       Find contacts by name
//       <input type="text" value={data} onChange={handleChange} />
//     </div>
//   );
// };

// eslint-disable-next-line react/prop-types
const SearchBox = ({ data, setData }) => {
  // const handleChange = (e) => {
  //   setData(e.target.value);
  // };

  return (
    <div className={css.container}>
      Find contacts by name
      <input type="text" value={data} onChange={setData} />
    </div>
  );
};

export default SearchBox;
