import * as React from 'react';
import { useState } from 'react';
import { TravelCarosel } from './components/travelCarosel/TravelCarosel';
import css from './App.module.css';
import { Welcome } from './components/welcome/Welcome';
import { Account } from './components/account/Account';
import { HotelFlights } from './components/hotelFlights/HotelFlights';
import { Stories } from './components/stories/Stories';
import { Chatting } from './components/chat/Chatting';

export enum Page {
    Welcome,
    CreateAccount,
    Main,
    BeppuTinder,
    HotelFlights,
    Stories,
    Chatting
}

export const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(Page.BeppuTinder);
    const getCurrentPage = () => {
        switch (currentPage) {
            case Page.Welcome:
                return <Welcome changePage={setCurrentPage} />;
            case Page.CreateAccount:
                return <Account changePage={setCurrentPage} />;
            case Page.Main:
                return <></>;
            case Page.Stories:
                return <Stories changePage={setCurrentPage} />;
            case Page.BeppuTinder:
                return <TravelCarosel changePage={setCurrentPage} />;
            case Page.HotelFlights:
                return <HotelFlights changePage={setCurrentPage} />;
            case Page.Chatting:
                return <Chatting changePage={setCurrentPage} />;
        }
    };

    return (
        <div className={css.appContainer}>
            {getCurrentPage()}
        </div>
    );
};