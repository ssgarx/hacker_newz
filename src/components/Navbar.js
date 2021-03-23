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
        // console.log(`Running search by ${searchText.toUpperCase()}`);
        var filter = searchText.toUpperCase();
        var storyDiv = document.getElementsByClassName("storyCard");
        // console.log('storyDiv', storyDiv);

        for (let i = 0; i < storyDiv.length; i++) {
            // let a = storyDiv[i].getElementsByTagName("a")[0];
            let a = storyDiv[i].getElementsByClassName("storyCard_title")[0];
            let b = storyDiv[i].getElementsByClassName("storyCard_data")[0];
            // console.log('b', b)
            let txtValue = a.textContent || a.innerText;
            let txtValue2 = b.textContent || b.innerText;
            // let txtValue2 = a.textContent || a.innerText || b.textContent || b.innerText;
            // console.log('txtValue', txtValue);
            if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
                storyDiv[i].style.display = "";
                // a.style.backgroundColor = "yellow";
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
                    <input type="text" onChange={handleSarchText} value={searchText} placeholder="Search" />
                </li>
            </ul>
        </nav>
    )
}

export default connect()(Navbar);
