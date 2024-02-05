import { useState } from "react";
import "bulma/css/bulma.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState(" ");

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    //console.log('sumbitted' + term);
    onSubmit(term);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label className="label">Search</label>
        <input className="input is-medium" type="text" value={term} onChange={handleChange}/>
      </form>
    </div>
  );
}

export default SearchBar;
