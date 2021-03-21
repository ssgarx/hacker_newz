import { useEffect, useState } from 'react';
import { MAX_STORIES, STORY_INCREMENT } from '../constants';
import { debounce } from '../utils/debounce';

export const useInfiniteScroll = () => {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(STORY_INCREMENT);

    const handleScroll = debounce(() => {
        // console.log("handleScrollx", window.innerHeight + document.documentElement.scrollTop);
        // console.log("handleScrollx", document.documentElement.offsetHeight - 500);
        if (window.innerHeight + document.documentElement.scrollTop <
            (document.documentElement.offsetHeight - 500) || loading) {
            return false;
        }
        setLoading(true);
    }, 100);

    useEffect(() => {
        if (!loading) return;
        //IF WE HAVE A COUNT OF 480 + STORY INCREMENT WHICH IS 30 == 510
        //WE DONT WANT THE USER TO KEEP SCROLLING AS WE HAVE ALREADY EXCEEDED THE MAX STORIES
        //SO SETB THE COUNT TO 500 AND QUIT SCROLLING   
        if (count + STORY_INCREMENT >= MAX_STORIES) {
            setCount(MAX_STORIES);
        } else {
            //IF WE ARE BELOW 500 STORIES
            setCount(count + STORY_INCREMENT);
            // console.log("infinitescroill", count);
        }
        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { count };
}