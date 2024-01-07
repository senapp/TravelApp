import * as React from 'react';
import { useEffect, useState } from 'react';
import css from './Account.module.css';
import { Page } from '../../App';

type Props = {
    changePage(page: Page): void;
}

export const Account: React.FC<Props> = ({ changePage }) => {
    const [state, setState] = useState(0);
    const [lightMode, setLightMode] = useState(true);

    useEffect(() => {
        if (state === 0) {
            const element = (document.getElementsByClassName(css.type)[0] as HTMLElement);
            element.style.opacity = "1";
            element.style.height = "100%";
        }
    });

    useEffect(() => {
        if (!lightMode) {
            const element = (document.getElementsByClassName(css.container)[0] as HTMLElement);
            element.style.backgroundColor = "black"

            const textHeaders = (document.getElementsByClassName(css.textHeader) as unknown as HTMLElement[]);
            Array.from(textHeaders).forEach(element => {
                element.style.color = "white";
            });
        }
    });

    const enterInfo = () => {
        const element = (document.getElementsByClassName(css.type)[0] as HTMLElement);
        element.style.opacity = "0";
        element.style.height = "0";

        const element2 = (document.getElementsByClassName(css.profile)[0] as HTMLElement);
        element2.style.opacity = "1";
        element2.style.height = "100%";

        setState(1);
    }

    const onDarkMode = () => {
        setLightMode(!lightMode);
    };

    return (
        <div className={css.container}>
            <div className={css.type}>
                <div className={css.header}>Are you a..</div>
                <div onClick={enterInfo} className={css.option}>Traveller</div>
                <div className={css.option}>Host</div>
            </div>
            <div className={css.profile}>
                <div className={css.textHeader}>Name</div>
                <input className={css.textBox}></input>
                <div className={css.textHeader}>City</div>
                <input className={css.textBox}></input>
                <div className={css.toggleContainer}>
                    <div className={css.textHeader}>Light Mode</div>
                    <input type='checkbox' checked={lightMode} onChange={onDarkMode} className={css.yesNo}></input>
                </div>
                <button
                onClick={() => changePage(Page.BeppuTinder)}
                className={css.continueButton}
            >
                Let's Explore!
            </button>
            </div>
        </div>
    );
};