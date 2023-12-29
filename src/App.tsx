import * as React from 'react';
import { useState } from 'react';
import { TravelCarosel } from './components/travelCarosel/TravelCarosel';
import css from './App.module.css';
import { Welcome } from './components/welcome/Welcome';
import { Account } from './components/account/Account';

export enum Page {
    Welcome,
    CreateAccount,
    Main,
    BeppuTinder,
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
            case Page.BeppuTinder:
                return <TravelCarosel changePage={setCurrentPage} />;
        }
    };

    return (
        <div className={css.appContainer}>
            {getCurrentPage()}
        </div>
    );
};