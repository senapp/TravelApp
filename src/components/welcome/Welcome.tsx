import * as React from 'react';
import { useEffect, useState } from 'react';
import css from './Welcome.module.css';
import { Page } from '../../App';

type Props = {
    changePage(page: Page): void;
}

export const Welcome: React.FC<Props> = ({ changePage }) => {
    const handleButtonClick = () => {
        console.log('ボタンがクリックされました');
        // ここにボタンがクリックされたときの処理を追加
    };

    return (
        <div className={css.container}>
            <img src={'../resources/voyagenest.png'} alt="Travel App Logo" />
            <button
                onClick={() => changePage(Page.CreateAccount)}
                className={css.continueButton}
            >
                Start
            </button>
        </div>
    );
};