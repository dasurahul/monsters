import "./search.styles.css";

const Search = ({ changing }) => {
  return (
    <input
      type="text"
      placeholder="Search Monsters"
      className="search-box"
      onChange={changing}
    />
  );
};

export default Search;
