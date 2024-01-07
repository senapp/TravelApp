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
    const [currentUser, setCurrentUser] = useState("");

    delay(1000).then(() => {
        if (currentUser != "") {
            return;
        }

        const element = (document.getElementsByClassName(css.result)[0] as HTMLElement);
        element.style.opacity = "unset";
        element.style.height = "100vh";
        setLoaded(loaded);
        (document.getElementById("loading") as HTMLElement).remove();
        (document.getElementsByClassName(css.title)[0] as HTMLElement).remove();
    });

    const openChat = (name: string) => {
        const element = (document.getElementsByClassName(css.result)[0] as HTMLElement);
        element.style.opacity = "0";
        element.style.height = "0";
        const element2 = (document.getElementsByClassName(css.chatScreen)[0] as HTMLElement);
        element2.style.opacity = "unset";
        element2.style.height = "100vh";

        setCurrentUser(name);
    }

    const closeChat = () => {
        const element = (document.getElementsByClassName(css.result)[0] as HTMLElement);
        element.style.opacity = "unset";
        element.style.height = "100vh";
        const element2 = (document.getElementsByClassName(css.chatScreen)[0] as HTMLElement);
        element2.style.opacity = "0";
        element2.style.height = "0";
    }

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
                            <div onClick={() => openChat("Thet")} className={css.storyContainer}>
                                <img className={css.story} src={'../resources/thet.jpg'}></img>
                                <div className={css.storyText}>Thet</div>
                            </div>
                            <div onClick={() => openChat("Nalu")} className={css.storyContainer}>
                                <img className={css.story} src={'../resources/nalu.jpg'}></img>
                                <div className={css.storyText}>Nalu</div>
                            </div>
                            <div onClick={() => openChat("Alessandro")} className={css.storyContainer}>
                                <img className={css.story} src={'../resources/alessandro.jpg'}></img>
                                <div className={css.storyText}>Alessandro</div>
                            </div>
                            <div onClick={() => openChat("Lisa")} className={css.storyContainer}>
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
                <button className={css.continueButton} onClick={() => changePage(Page.Chatting)}>Continue</button>
            </div>
            <div className={css.chatScreen}>
                <div className={css.chatHeader}>
                        <img className={css.goBack} onClick={closeChat} src={'../resources/return.png'}></img>
                        <img className={css.profileImage} src={'../resources/' + currentUser.toLowerCase() + '.jpg'}></img>
                        <div className={css.currentName}>{currentUser}</div>
                        <img className={css.callIcon} src={'../resources/call.png'}></img>
                        <img className={css.videoIcon} src={'../resources/video.png'}></img>
                </div>
                <div className={css.chatContainer}>
                    <div className={css.chatRight}>Hi!<span className={css.timeRight}>6:00 pm</span></div>
                    <div className={css.chatRight}>I would love to know more about Beppu.</div>
                    <div className={css.chatRight}>How is it?</div>
                    <br />
                    <div className={css.chatLeft}><span className={css.timeLeft}>6:25 pm</span>Beppu is a great city!</div>
                    <div className={css.chatLeft}>I am currently a student at APU. The view from campus is unbelivable! 🤩</div>
                    <div className={css.chatLeft}>You should come and see it! I can show you around!</div>
                    <br />
                    <div className={css.chatRight}>Thank you!<span className={css.timeRight}>6:30 pm</span></div>
                </div>
                <div className={css.messeageContainer}>
                    <img className={css.sendButton} src={'../resources/send.png'}></img>
                </div>
            </div>
            <LoadingCircle />
        </div>
    );
};