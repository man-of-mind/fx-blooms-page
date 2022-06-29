import React from "react";
import styles from './Cards.module.scss';
import { ReactComponent as NairaLogo } from '../../Assests/Icons/naira.svg';


const OfferCard = () => {
    return (
        <div className={styles['listing']}>
            <div className={styles['heading']}>
                <NairaLogo />
                <p className={styles['mariam']}>Listed by: <span>mariam</span></p>
                <p>Expires in:</p>
                <span style={{color: 'rgb(255, 0, 149)'}}>00:00:00</span>
            </div>
            <div className={styles['listing-details']}>
                <article>
                    <p>I will Receive</p>
                    <strong>NGN 62000</strong>
                </article>
                <article>
                    <p>I will Send</p>
                    <strong>NGN 1000</strong>
                </article>
                <article>
                    <p>Exchange Rate</p>
                    <strong>NGN650 to &euro;1</strong>
                </article>
                <button>BUY NOW</button>
            </div>
        </div>
    );
}

export default OfferCard;