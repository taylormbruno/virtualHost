import React, {useState, useEffect} from "react";
import Seeds from "./EventCards/VendorCards/seeds"

const people= [
"twitter",
"facebook",
"instagram",
"linkedin"
];
function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = people.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    // <div className="searchFilter">
    //   <input
    //     type="text"
    //     placeholder="Search"
    //     value={searchTerm}
    //     onChange={handleChange}
    //   />
    <div class="ui massive icon input">
      <input 
        type="text" 
        placeholder="Search vendors..."
        value={searchTerm}
        onChange={handleChange}/>
      <i class="search icon"></i>
    </div>
    //   <ul>
    //     {searchResults.map(person => (
    //       <li>{person}</li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default SearchFilter;
