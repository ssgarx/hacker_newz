import React, { useState } from 'react'

function Navbar() {
    const [sortType, setSortType] = useState("Top Story");

    function handleSortValueChange(e) {
        setSortType(e.target.value);
    }
    return (
        <nav>
            <label class="logox">HackerNewz</label>
            {/* <input id="search_input" type="text" /> */}
            <ul>
                <li>
                    <label>Sort search by:</label>
                    <select class="select-css" onChange={handleSortValueChange}>
                        <option value="Story">Top Story</option>
                        <option value="Job">Job</option>
                        <option value="Comment">Comment</option>
                        <option value="Poll">Poll</option>
                        <option value="Pollopt">Pollopt</option>
                    </select>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
