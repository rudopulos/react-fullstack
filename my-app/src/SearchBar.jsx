import PropTypes from "prop-types";

function SearchBar({ isVisible, text, price }) {
  return (
    <div>
      {isVisible ? "Afisez Text" : ""}
      {text.length > 10 && <p>Textul este mai lung de zece caractere</p>}
      <h1>{text}</h1>Search
      <h2>{price}</h2>
    </div>
  );
}

SearchBar.propTypes = {
  isVisible: PropTypes.bool,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SearchBar;
