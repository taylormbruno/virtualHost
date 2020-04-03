import React, { useState } from "react";
import StyledForm from '../styledComponents';


const SearchFilter = props => {
    const [term, setTerm] = useState("")
    const handleInputChange = (event) => {
        const currTerm = event.target.value
        props.theSearch(currTerm)
        setTerm(currTerm)
    }
    return (
        <div>
            <div>
                <div className="Search">
                    <StyledForm>
                        <div className="ui massive icon input className=searchBar">
                            <input
                                name="filterString"
                                type="text"
                                placeholder="Search vendors..."
                                onChange={handleInputChange}
                                value={term}
                            />
                            <i className="search icon" id='searchIcon'></i>
                        </div>
                    </StyledForm>
                </div>

            </div>
        </div>
    );
}

export default SearchFilter;