import React from 'react'
import { StoriesContainerX as StoriesContainer } from './containers/StoriesContainer'
import Navbar from "./components/Navbar";

export const App = () => {
    return <div >
        <Navbar />
        <div id="rootA">
            <div id="rootB">
                <StoriesContainer />
            </div>
        </div>
    </div>
};

