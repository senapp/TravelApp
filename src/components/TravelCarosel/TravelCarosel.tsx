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
                delay(200).then(() => {
                    document.getElementsByClassName(css.title)[1].innerHTML = "OMG!"
                    delay(400).then(() => {
                        document.getElementsByClassName(css.loadingPage)[0].remove();
                        (document.getElementsByClassName(css.cityPage)[0] as HTMLElement).style.opacity = "unset";
                    });
                });
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
                        <h3>Do you like Beaches?</h3>
                        <p>Footprints in the sand, memories written by the waves.</p>
                    </div>
                </div>
                <div className={css.card}>
                    <img src={'../resources/mountain.jpg'}></img>
                    <div className={css.cardText}>
                        <h3>Do you like Mountains?</h3>
                        <p>Sculpted peaks, standing tall as Earth's silent storytellers.</p>
                    </div>
                </div>
                <div className={css.card}>
                    <img src={'../resources/onsen.jpg'}></img>
                    <div className={css.cardText}>
                        <h3>Do you like Hot Springs?</h3>
                        <p>Bath time, Earth-style. Immerse in bubbly geothermal luxury.</p>
                    </div>
                </div>
                <div className={css.card}>
                    <img src={'../resources/snow.jpg'}></img>
                    <div className={css.cardText}>
                        <h3>Want to experience the snow?</h3>
                        <p>Fluffy snowflakes, winter's confetti, nature's frozen playground.</p>
                    </div>
                </div>
                <div className={css.card}>
                    <img src={'../resources/europe.jpg'}></img>
                    <div className={css.cardText}>
                        <h3>Want to visit Europe?</h3>
                        <p>A mosaic of cultures, united in diversity.</p>
                    </div>
                </div>
                <div className={css.card}>
                    <img src={'../resources/asia.jpg'}></img>
                    <div className={css.cardText}>
                        <h3>Want to explore Asia?</h3>
                        <p>Journey through a tapestry of flavors, culture, and wonders.</p>
                    </div>
                </div>
                <div className={css.card}>
                    <img src={'../resources/culture.jpg'}></img>
                    <div className={css.cardText}>
                        <h3>Are you interested in Traditional Culture?</h3>
                        <p>Tea ceremonies, cherry smiles. Sip from the cup of tradition.</p>
                    </div>
                </div>
            </div>
            <div className={css.buttons}>
                <button className={css.fire} onClick={onLike}><img src={'../resources/fire.png'}></img></button>
                <button onClick={onDislike}><img src={'../resources/cross.png'}></img></button>
            </div>
            <div id="result" className={css.result}>
                <div className={css.loadingPage}>
                    <div className={css.title}>Exploring..</div>
                    <LoadingCircle />
                </div>
                <div className={css.cityPage}>
                    <img src={'../resources/beppu.jpg'}></img>
                    <div className={css.resultTitle}>Beppu, Japan</div>
                    <div className={css.cityInfo}>
                        <div className={css.category}>
                            <div className={css.categoryTitle}>
                                <img src={'../resources/star.png'}></img>Famous for...
                            </div>
                            <div className={css.categoryInfo}>{"Most Onsen (Hotspring) in Japan, Gates of Hells (Onsen tour), Kijima Kogen (Has Famous Wooden Rollercoaster), Onsen Festival, APU (University)"}</div>
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
        </div>
    );
};