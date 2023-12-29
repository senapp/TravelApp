import * as React from 'react';
import { useEffect, useState } from 'react';
import css from './Welcome.module.css';
import { Page } from '../../App';

type Props = {
    changePage(page: Page): void;
}

export const Welcome: React.FC<Props> = ({ changePage }) => {
    return (
        <div className={css.container}>
            Welcome
        </div>
    );
};