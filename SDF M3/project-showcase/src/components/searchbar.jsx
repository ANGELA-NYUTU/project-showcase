function searchbar({ search, setSearch }) {
  return (
    <input
      className="card"
      placeholder="Search Projects"
      value={search}
      onChange={(e) => setSearch(e.target.value)} // EVENT
    />
  );
}

export default searchbar;