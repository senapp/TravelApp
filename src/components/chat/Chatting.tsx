import * as React from 'react';
import { useEffect, useState } from 'react';
import css from './Chatting.module.css';
import { Page } from '../../App';
import { delay } from '../../utils/funcs';
import { LoadingCircle } from '../common/LoadingCircle';

type Props = {
    changePage(page: Page): void;
}

export const Chatting: React.FC<Props> = ({ changePage }) => {
    const [loaded, setLoaded] = useState(false);

    delay(1200).then(() => {
        const element = (document.getElementsByClassName(css.result)[0] as HTMLElement);
        element.style.opacity = "unset";
        element.style.height = "100vh";
        setLoaded(loaded);
        (document.getElementById("loading") as HTMLElement).remove();
        (document.getElementsByClassName(css.title)[0] as HTMLElement).remove();
    });

    return (
        <div className={css.container}>
            <div className={css.title}>Meet people!</div>
            <div className={css.result}>
                <img className={css.headerImage} src={'../resources/beppu.jpg'}></img>
                <div className={css.resultTitle}>Beppu, Japan</div>
                <div className={css.pageTitle}>Meet people!</div>
                <div className={css.cityInfo}>
                    <div className={css.category}>
                        <div className={css.categoryTitle}>
                            <img className={css.categoryIcon} src={'../resources/users.png'}></img>Users in Beppu
                        </div>
                        <div className={css.storySlide}>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/thet.jpg'}></img>
                                <div className={css.storyText}>Thet</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/nalu.jpg'}></img>
                                <div className={css.storyText}>Nalu</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/alessandro.jpg'}></img>
                                <div className={css.storyText}>Alessandro</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/lisa.jpg'}></img>
                                <div className={css.storyText}>Lisa</div>
                            </div>
                        </div>
                    </div>
                    <div className={css.category}>
                        <div className={css.categoryTitle}>
                            <img className={css.categoryIcon} src={'../resources/hosts.png'}></img>Hosts in Beppu
                        </div>
                        <div className={css.storySlide}>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/kamesho.jpg'}></img>
                                <div className={css.storyText}>OnsenHouse Hana</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/purunima.jpg'}></img>
                                <div className={css.storyText}>WarmWelcome Mark</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/toyoken.jpg'}></img>
                                <div className={css.storyText}>IeStay Aiko</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/amamichaya.jpg'}></img>
                                <div className={css.storyText}>HellsHotel Kimura</div>
                            </div>
                        </div>
                    </div>
                    <div className={css.category}>
                        <div className={css.categoryTitle}>
                            <img className={css.categoryIcon} src={'../resources/flight.png'}></img>Planning a trip to Beppu
                        </div>
                        <div className={css.storySlide}>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/harry.jpg'}></img>
                                <div className={css.storyText}>Harry</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/ron.jpg'}></img>
                                <div className={css.storyText}>Ron</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/hermione.jpg'}></img>
                                <div className={css.storyText}>Hermione</div>
                            </div>
                            <div className={css.storyContainer}>
                                <img className={css.story} src={'../resources/snape.jpg'}></img>
                                <div className={css.storyText}>Snape</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LoadingCircle />
        </div>
    );
};