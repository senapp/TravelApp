import * as React from 'react';
import { useEffect, useState } from 'react';
import css from './HotelFlights.module.css';
import { Page } from '../../App';
import { delay } from '../../utils/funcs';
import { LoadingCircle } from '../common/LoadingCircle';

type Props = {
    changePage(page: Page): void;
}

export const HotelFlights: React.FC<Props> = ({ changePage }) => {
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
            <div className={css.title}>Hotels & Flights</div>
            <div className={css.result}>
                <img src={'../resources/beppu.jpg'}></img>
                <div className={css.resultTitle}>Beppu, Japan</div>
                <div className={css.pageTitle}>Hotels & Flights</div>
                <div className={css.cityInfo}>
                    <div className={css.category}>
                        <div className={css.categoryTitle}>
                            <img src={'../resources/flight.png'}></img>Flights - 125,000¥+
                        </div>
                        <div className={css.categoryInfo}>{"Jan 20th: Los Angeles LAX → Tokyo Haneda → Oita Airport"}</div>
                        <div className={css.categoryInfo}>{"Feb 4th: Oita Airport → Tokyo Haneda → Los Angeles LAX"}</div>
                        <div className={css.categoryInfo}>{"Tickets from 125,000¥+ on Skyscanner.net"}</div>
                        <button className={css.partnerButton}><img src={'../resources/skyscanner.png'}></img></button>
                    </div>
                    <div className={css.category}>
                        <div className={css.categoryTitle}>
                            <img src={'../resources/hotel.png'}></img>Hotels - 3,000¥+
                        </div>
                        <div className={css.categoryInfo}>{"Jan 20th → Feb 4th: 50+ Hotels available in Beppu"}</div>
                        <div className={css.categoryInfo}>{"Price per night from 3,000¥+ on Booking.com"}</div>
                        <button className={css.partnerButton}><img src={'../resources/booking.png'}></img></button>
                    </div>
                    <div className={css.category}>
                        <div className={css.categoryTitle}>
                            <img src={'../resources/restrictions.png'}></img>Travel Restrictions
                        </div>
                        <div className={css.categoryInfo}>{"✅ No restrictions for US Travelers"}</div>
                        <div className={css.categoryInfo}>{"✅ 90 Days Visa Free Travel"}</div>
                        <div className={css.categoryInfo}>{"❌ Proof of COVID vaccination or pre-flight COVID test"}</div>
                        <div className={css.categoryInfo}>{"※ Recommended to complete Visit Japan Web application before arrival"}</div>
                    </div>
                    <div className={css.category}>
                        <div className={css.categoryTitle}>
                            <img src={'../resources/money.png'}></img>Total Price - 167,000¥+
                        </div>
                        <div className={css.categoryInfo}>{"Round Trip Flight - 125,000¥+"}</div>
                        <div className={css.categoryInfo}>{"14 Days Hotel - 42,000¥+"}</div>
                    </div>
                </div>
                <button className={css.continueButton} onClick={() => changePage(Page.Stories)}>Continue</button>
            </div>
            <LoadingCircle />
        </div>
    );
};