import * as React from 'react';
import { useState } from 'react';
import 'hammerjs';

export const App: React.FC = () => {
    const answers = useState([]);
    React.useEffect(() => {
        require('./tinder');
        require('./App.css')
    });

    return (
        <div className="tinder">
            <div className="tinder--status">
                <i className="fa fa-remove"></i>
                <i className="fa fa-heart"></i>
            </div>
            <div className="tinder--cards">
                <div className="tinder--card">
                    <img src={'../resources/beach.jpg'}></img>
                    <h3>Do you like beaches?</h3>
                    <p>Long walks along the beach with the sun in your eyes.</p>
                </div>
                <div className="tinder--card">
                <img src={'../resources/mountain.jpg'}></img>
                    <h3>Do you like mountains</h3>
                    <p>Feeling ontop of the world with the cold breeze from the clouds.</p>
                </div>
                <div className="tinder--card">
                <img className="tinder-card-img" src={'../resources/cheap.jpg'}></img>
                    <h3>Would you like to travel cheap?</h3>
                    <p>Saving money is important, traveling can be cheap.</p>
                </div>
                <div className="tinder--card">
                <img src={'../resources/expensive.jpg'}></img>
                    <h3>Are you looking for a luxury trip?</h3>
                    <p>Living life to the fullest!</p>
                </div>
            </div>
            <div className="tinder--buttons">
                <button id="nope"><i className="fa fa-remove"></i></button>
                <button id="love"><i className="fa fa-heart"></i></button>
            </div>
        </div>
    );
};