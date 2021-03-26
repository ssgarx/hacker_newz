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


    function runSearch(searchText) {
        var filter = searchText.toUpperCase();
        var storyDiv = document.getElementsByClassName("storyCard");

        for (let i = 0; i < storyDiv.length; i++) {
            let a = storyDiv[i].getElementsByClassName("storyCard_title")[0];
            let b = storyDiv[i].getElementsByClassName("storyCard_data")[0];
            let txtValue = a.textContent || a.innerText;
            let txtValue2 = b.textContent || b.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
                storyDiv[i].style.display = "";
            } else {
                storyDiv[i].style.display = "none";
            }
        }
    }

    function handleSarchText(e) {
        setSearchText(e.target.value);
        runSearch(e.target.value);
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
                    <input type="text" onChange={handleSarchText} value={searchText} placeholder="Search by headline or author" />
                </li>
            </ul>
        </nav>
    )
}

export default connect()(Navbar);
