import * as React from 'react';
import { useState } from 'react';
import { TravelCarosel } from './components/TravelCarosel/TravelCarosel';
import css from './App.module.css';

export const App: React.FC = () => {
    return (
        <div className={css.appContainer}>
            <TravelCarosel />
        </div>
    );
};