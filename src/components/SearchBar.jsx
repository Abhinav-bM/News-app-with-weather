import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Search news..."
    onChange={(e) => onSearch(e.target.value)}
    className="border p-2 w-full"
  />
);

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default SearchBar;
