import PropTypes from "prop-types";
import { useRef } from "react";

const SearchBar = ({ onSearch }) => {
  const debounceTimer = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;

    // CLEARING PREVIOUS TIMER
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // SETTING NEW TIMER
    debounceTimer.current = setTimeout(() => {
      onSearch(value);
    }, 500);
  };

  return (
    <input
      type="text"
      placeholder="Search news..."
      onChange={handleChange}
      className="border p-2 w-full"
    />
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default SearchBar;
