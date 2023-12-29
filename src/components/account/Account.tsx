import * as React from 'react';
import { useEffect, useState } from 'react';
import css from './Account.module.css';
import { Page } from '../../App';

type Props = {
    changePage(page: Page): void;
}

export const Account: React.FC<Props> = ({ changePage }) => {
    return (
        <div className={css.container}>
            Account
        </div>
    );
};