import React, { useEffect, useState } from 'react'
import { getStoryIds } from '../services/hnApi';
import { StoryX as Story } from "../components/Story";
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { connect } from "react-redux";

//MAPPING STATE IN STORE TO PROPS
const mapStateToProps = (state) => ({
    sortType: state.changeSortType.data,
});

export const StoriesContainer = (props) => {
    const { count } = useInfiniteScroll();
    const [storyIds, setstoryIds] = useState([]);

    //MONITORS CHANGE IN REDUX STORES STATE
    useEffect(() => {
        getStoryIds(props.sortType).then(data => setstoryIds(data));
    }, [props.sortType]);

    useEffect(() => {
        console.log('count', count);
        //UPON TRIGGER FETCHS 30 CODES AT A TIME
        getStoryIds(props.sortType).then(data => setstoryIds(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]);

    //0-30 >> 60 >> 90
    //AVOID RERENDERING PREVIOSULY RERENDERED COMPONENTS >> USE MEMO
    return storyIds.slice(0, count).map(storyId => (
        <Story key={storyId} storyId={storyId} />
    ));
}

export const StoriesContainerX = connect(mapStateToProps)(StoriesContainer);
