import React, { useEffect, useState } from 'react'
import { getStoryIds } from '../services/hnApi';
import { Story } from "../components/Story";
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'

export const StoriesContainer = () => {
    const { count } = useInfiniteScroll();
    const [storyIds, setstoryIds] = useState([]);

    useEffect(() => {
        //UPON TRIGGER FETCHS 30 CODES AT A TIME

        console.log('count', count);
        getStoryIds().then(data => setstoryIds(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]);

    //0-30 >> 60 >> 90
    //AVOID RERENDERING PREVIOSULY RERENDERED COMPONENTS >> USE MEMO
    return storyIds.slice(0, count).map(storyId => (
        <Story key={storyId} storyId={storyId} />
    ));
}
