import React, {useState} from "react";

//seeds for testing
const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin"
];
function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = people.filter(person => {
      person.toLowerCase()
      .includes(searchTerm)
    });
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="searchFilter">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(person => (
          <li>{person}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
