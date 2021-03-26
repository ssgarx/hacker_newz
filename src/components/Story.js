import React, { useEffect, useState, memo } from 'react'
import { getStory } from '../services/hnApi';
import { mapTime } from '../timers/mapTime';
import { connect } from "react-redux";
//MAPPING STATE IN STORE TO PROPS
const mapStateToProps = (state) => ({
    sortType: state.changeSortType.data,
});


// MEMO CHECKS IF COMPONENTS ARE ALREADY ON PAGE
// IF PRESENT >> PREVENT RERENDER
export const Story = memo(function Story(props) {
    const [story, setStory] = useState({});
    const [filterType, setFilterType] = useState("story");

    useEffect(() => {
        setFilterType(props.sortType);
    }, [props.sortType]);

    useEffect(() => {
        getStory(props.storyId).then(data => data && data.url && setStory(data));
        // console.log("story", JSON.stringify(story));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return story && story.url && (story.type === filterType) ? (
        <div className="storyCard" id="storyCard">
            <div className="storyCard-ip">
                <div className="storyCard-c1">
                    <span><p className="storyCard_title" id="storyCard_title" >{story.title} </p></span>
                    <span style={{ textAlign: "right" }}><p className="storyCard_data" id="storyCard_data">- {story.by}</p></span>
                </div>
                <div className="storyCard-c2">
                    <a href={story.url} target="blank"><button>Read More</button></a>
                    <span style={{ textAlign: "right", color: "#cac9c9" }}><p className="time" id="time"> {mapTime(story.time)} ago</p></span>
                </div>
            </div>
        </div>
        // JSON.stringify(story)
    ) : null;
});

export const StoryX = connect(mapStateToProps)(Story);




