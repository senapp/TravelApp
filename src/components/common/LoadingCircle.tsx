import * as React from 'react';
import css from './LoadingCircle.module.css';

export const LoadingCircle: React.FC = () => {
    return (
        <div id="loading" className={css.loading}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    );
};