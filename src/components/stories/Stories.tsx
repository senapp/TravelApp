import * as React from 'react';
import { useEffect, useState } from 'react';
import css from './Stories.module.css';
import { Page } from '../../App';
import { delay } from '../../utils/funcs';
import { LoadingCircle } from '../common/LoadingCircle';

type Props = {
    changePage(page: Page): void;
}

export const Stories: React.FC<Props> = ({ changePage }) => {
    const [loaded, setLoaded] = useState(false);

    delay(800).then(() => {
        const element = (document.getElementsByClassName(css.result)[0] as HTMLElement);
        element.style.opacity = "unset";
        element.style.height = "100vh";
        setLoaded(loaded);
        (document.getElementById("loading") as HTMLElement).remove();
        (document.getElementsByClassName(css.title)[0] as HTMLElement).remove();
    });

    return (
        <div className={css.container}>
            <div className={css.title}>Stories & Reviews</div>
            <div className={css.result}>
                <img className={css.headerImage} src={'../resources/beppu.jpg'}></img>
                <div className={css.resultTitle}>Beppu, Japan</div>
                <div className={css.pageTitle}>Stories & Reviews</div>
                <div className={css.cityInfo}>
                    <div className={css.category}>
                        <div className={css.categoryTitle}>
                            <img className={css.categoryIcon} src={'../resources/flight.png'}></img>Trips
                        </div>
                        <div className={css.storySlide}>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/review1.jpg'}></img>
                                <div className={css.storyText}>Hell Gates</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/review2.jpg'}></img>
                                <div className={css.storyText}>Great Views</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/review3.jpg'}></img>
                                <div className={css.storyText}>Wandering Beppu</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/review4.jpg'}></img>
                                <div className={css.storyText}>Onsen Boys</div>
                            </div>
                        </div>
                    </div>
                    <div className={css.category}>
                        <div className={css.categoryTitle}>
                            <img className={css.categoryIcon} src={'../resources/resturant.png'}></img>Resturants
                        </div>
                        <div className={css.storySlide}>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/kamesho.jpg'}></img>
                                <div className={css.storyText}>Kamesho</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/purunima.jpg'}></img>
                                <div className={css.storyText}>Purunima</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/toyoken.jpg'}></img>
                                <div className={css.storyText}>Toyoken</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/amamichaya.jpg'}></img>
                                <div className={css.storyText}>Amamichaya Resturant</div>
                            </div>
                        </div>
                    </div>
                    <div className={css.category}>
                        <div className={css.categoryTitle}>
                            <img className={css.categoryIcon} src={'../resources/nature.png'}></img>Nature
                        </div>
                        <div className={css.storySlide}>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/onbara.jpg'}></img>
                                <div className={css.storyText}>Onbara Falls</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/yuyama.jpg'}></img>
                                <div className={css.storyText}>Yuyama no Sato Onsen</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/ohira.jpg'}></img>
                                <div className={css.storyText}>Mt. Ohira</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/shidaka.jpg'}></img>
                                <div className={css.storyText}>Shidaka Lake</div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={css.continueButton} onClick={() => changePage(Page.Chatting)}>Continue</button>
            </div>
            <LoadingCircle />
        </div>
    );
};