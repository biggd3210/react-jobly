import React, { useState } from "react";
// import "./SearchForm.css";

/** Search Widget.
 * 
 * Appears on CompanyList and JobList so these can be filtered down.
 * 
 * This component doesn't do the searching, but it renders the search forms and calls the search function prop. 
 */

function SearchForm({ searchFor }) {
    const [searchTerm, setSearchTerm] = useState("");

    /** tell parent to search and filter */
    function handleSubmit(evt) {
        evt.preventDefault();

        searchFor(searchTerm.trim() || undefined);
        setSearchTerm(searchTerm.trim());
    }

    //** updated form fields */
    function handleChange(evt) {
        setSearchTerm(evt.target.value);
    }

    return (
        <div className="SearchForm mb-4">
            <form className="form-inline" onSubmit={handleSubmit}>
                <input 
                    className="form-control form-control-lg flex-grow-1"
                    name="searchTerm"
                    placeholder="Enter search term."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-lg btn-primary">Submit</button>
            </form>
        </div>
    )

}

export default SearchForm;