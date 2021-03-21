import React, { useEffect, useState, memo } from 'react'
import { getStory } from '../services/hnApi';
import { mapTime } from '../mappers/mapTime';

//MEMO CHECKS IF COMPONENTS ARE ALREADY ON PAGE
//IF PRESENT >> PREVENT RERENDER
export const Story = memo(function Story({ storyId }) {
    // console.log("storyId", storyId);
    const [story, setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
        // console.log("story", JSON.stringify(story));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return story && story.url ? (
        <div id="storyCard">
            <span><a href={story.url}>
                <p id="storyCard_title" >{story.title}</p>
            </a></span>
            <span>
                <p id="storyCard_data"> posted by {story.by}, {mapTime(story.time)} ago</p>
            </span>
        </div>
        // JSON.stringify(story)
    ) : null;
});




