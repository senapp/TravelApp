import * as React from 'react';
import { useEffect, useState } from 'react';
import css from './Finish.module.css';
import { Page } from '../../App';
import { delay } from '../../utils/funcs';

type Props = {
    changePage(page: Page): void;
}

export const Finish: React.FC<Props> = ({ changePage }) => {
    
    useEffect(() => {
        delay(500).then(() => {
            (document.getElementsByClassName(css.final)[0] as HTMLElement).style.opacity = "1";
        });
    });
    
    return (
        <div className={css.container}>
           <div className={css.final}>Thank you for watching!</div>
        </div>
    );
};