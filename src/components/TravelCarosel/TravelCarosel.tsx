import * as React from 'react';
import { useEffect, useState } from 'react';
import css from './TravelCarosel.module.css';
import { delay } from '../../utils/funcs';
import { Page } from '../../App';
import { LoadingCircle } from '../common/LoadingCircle';

type Props = {
    changePage(page: Page): void;
}

export const TravelCarosel: React.FC<Props> = ({ changePage }) => {
    let cards: HTMLElement[];

    useEffect(() => {
        cards = Array.from(document.getElementsByClassName(css.card)).reverse() as HTMLElement[];
        let count = 1;
        cards.forEach(card => {
            card.style.zIndex = count.toString();
            count++;
        });
    })

    const onLike = () => {
        const card = cards.pop();
        card?.classList.add(css.like);

        checkFinish();
    };

    const onDislike = () => {
        const card = cards.pop();
        card?.classList.add(css.dislike);

        checkFinish();
    };

    const checkFinish = () => {
        if (cards.length == 0) {
            document.getElementById('result')?.classList.add(css.found);
            delay(800).then(() => {
                document.getElementsByClassName(css.cards)[0].remove();
                (document.getElementsByClassName(css.container)[0] as HTMLElement).style.overflow = "unset";
            });
        }
    }

    return (
        <div className={css.container}>
            <div className={css.title}>Travel Carosel</div>
            <div className={css.cards}>
                <div className={css.card}>
                    <img src={'../resources/beach.jpg'}></img>
                    <div className={css.cardText}>
                        <h3>Do you like beaches?</h3>
                        <p>Long walks along the beach with the sun in your eyes.</p>
                    </div>
                </div>
                <div className={css.card}>
                    <img src={'../resources/mountain.jpg'}></img>
                    <div className={css.cardText}>
                        <h3>Do you like mountains?</h3>
                        <p>Feeling ontop of the world with the cold breeze from the clouds.</p>
                    </div>
                </div>
                <div className={css.card}>
                    <img src={'../resources/cheap.jpg'}></img>
                    <div className={css.cardText}>
                        <h3>Would you like to travel cheap?</h3>
                        <p>Saving money is important, traveling can be cheap.</p>
                    </div>
                </div>
                <div className={css.card}>
                    <img src={'../resources/expensive.jpg'}></img>
                    <div className={css.cardText}>
                        <h3>Are you looking for a luxury trip?</h3>
                        <p>Living life to the fullest!</p>
                    </div>
                </div>
            </div>
            <div className={css.buttons}>
                <button className={css.fire} onClick={onLike}><img src={'../resources/fire.png'}></img></button>
                <button onClick={onDislike}><img src={'../resources/cross.png'}></img></button>
            </div>
            <div id="result" className={css.result}>
                <img src={'../resources/beppu.jpg'}></img>
                <div className={css.resultTitle}>Beppu, Japan</div>
                <div className={css.cityInfo}>
                    <div className={css.category}>
                        <div className={css.categoryTitle}>
                            <img src={'../resources/star.png'}></img>Famous for...
                        </div>
                        <div className={css.categoryInfo}>{"Onsen (Japanese Hot Spring), Mountain, Sea, APU (University)"}</div>
                    </div>
                    <div className={css.category}>
                        <div className={css.categoryTitle}>
                            <img src={'../resources/gem.png'}></img>Hidden Gems
                        </div>
                        <div className={css.categoryInfo}>{"Natural Onsens, Waterfalls, Observatories, Multicultural resturants"}</div>
                    </div>
                    <div className={css.category}>
                        <div className={css.categoryTitle}>
                            <img src={'../resources/transport.png'}></img>Transport
                        </div>
                        <div className={css.categoryInfo}>{"Plane: 1.5 Hours from Tokyo 10,000¥ + 1000¥ from Oita Airport"}</div>
                        <div className={css.categoryInfo}>{"Bullet train: 6 Hours from Tokyo 25,000¥"}</div>
                        <div className={css.categoryInfo}>{"Train: 1.5 Hours from Hakata, Fukuoka 8,000¥"}</div>
                        <div className={css.categoryInfo}>{"Bus: 3 hours from Hakata, Fukuoka 3,250¥"}</div>
                        <div className={css.categoryInfo}>{"3 Local Train stations: Beppu, Beppu Daigaku, Kamegawa"}</div>
                        <div className={css.categoryInfo}>{"2 Local Buses: Oita Kotsu, Kamenoi"}</div>
                    </div>
                    <div className={css.category}>
                        <div className={css.categoryTitle}>
                            <img src={'../resources/tips.png'}></img>Tips for Beppu
                        </div>
                        <div className={css.categoryInfo}>{"Make use of IC Cards to avoid handling cash."}</div>
                        <div className={css.categoryInfo}>{"Inquire at the airport for a free travel IC card."}</div>
                    </div>
                </div>
                <button className={css.continueButton} onClick={() => changePage(Page.HotelFlights)}>Continue</button>
            </div>
        </div>
    );
};