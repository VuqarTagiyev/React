import React from 'react';
import northernPic from './img/1.jpg';
import southernPic from './img/2.jpg';
import './Hemisphere.css';

const hemisphereConfig = {
    Northern: {
        text: 'it is northern hemisphere',
        picture: northernPic
    },
    Southern: {
        text: 'it is southern hemisphere',
        picture: southernPic
    }
}


const HemisphereDisplay = ({ latitude }) => {
    const hemisphere = latitude > 0 ? "Northern" : "Southern";
    const { text , picture } = hemisphereConfig[hemisphere];
    return(
        <div className = { hemisphere }>
            <img src ={ picture } alt = "pic" style = {{
                width: '300px'
            }}></img>

            <div> { text } </div>
        </div>
    )
}


export default HemisphereDisplay;