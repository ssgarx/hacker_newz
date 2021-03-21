import React from 'react'
import { StoriesContainer } from './containers/StoriesContainer'
import Navbar from "./components/Navbar";
export const App = () => {
    return <div >
        <Navbar />
        <div id="groot">
            <StoriesContainer />
        </div>
    </div>
};

