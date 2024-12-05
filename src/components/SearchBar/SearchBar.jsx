// import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    let searchQuery = form.elements.search.value.trim().toLowerCase();
    if (searchQuery === "") {
      alert("Please enter search term!");
      return;
    }
    console.log(searchQuery);
    onSubmit(searchQuery);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
