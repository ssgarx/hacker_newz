import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import { changeSortType } from "../actions/index";

function Navbar(props) {
    const [sortType, setSortType] = useState("story");
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        props.dispatch(changeSortType(sortType));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortType]);

    function handleSarchText(e) {
        setSearchText(e.target.value)
    }

    return (
        <nav>
            <label className="logox">Hacker Newz</label>
            <label className="logox1">HN</label>

            <ul>
                <li>
                    <label>Sort by</label>
                    <select className="select-css" onChange={(e) => setSortType(e.target.value)}>
                        <option value="story">Top Story</option>
                        <option value="job">Find Jobs</option>
                    </select>
                </li>
            </ul>
            <ul>
                <li>
                    <input type="text" onChange={handleSarchText} value={searchText} placeholder="Search" />
                </li>
            </ul>
        </nav>
    )
}

export default connect()(Navbar);
