import axios from "axios";
// import { selectFields } from '../selectors/selectFields';

// import store from "../store"
// console.log(store.getState().changeSortType.data);

var baseUrl = "https://hacker-news.firebaseio.com/v0/";
var newStoriesUrl1 = `${baseUrl}newstories.json`;
var newStoriesUrl2 = `${baseUrl}jobstories.json`;
var storyUrl = `${baseUrl}item/`;


export const getStoryIds = async (sortType) => {

    if (sortType === "story") {
        const result = await axios.get(newStoriesUrl1);
        return result.data;
    }
    if (sortType === "job") {
        const result = await axios.get(newStoriesUrl2);
        return result.data;
    }

};

export const getStory = async (storyId) => {
    const result = await axios.get(`${storyUrl + storyId}.json`);
    return (result.data);
};


