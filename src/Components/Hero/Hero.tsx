import React from "react";
import WalletCard from "../Cards/WalletCard";
import styles from "./Hero.module.scss";
import { ReactComponent as NigeriaFlag } from '../../Assests/Icons/nigeria.svg';
import { ReactComponent as EuropeFlag } from '../../Assests/Icons/european-union.svg';
import { ReactComponent as ImportantIcon } from '../../Assests/Icons/important.svg';
import OfferCard from "../Cards/OfferCard";

const Hero = () => {
    const ngn:string = 'NGN 574, 408';
    const eur:string = 'EUR 574, 408';

    return (
        <div className={styles['hero']}>
            <section>
                <span>Hello, <strong>Garcia</strong></span>
                <div className={styles['wallet']}>
                    <WalletCard text={ngn}>
                        <NigeriaFlag />
                    </WalletCard>
                    <WalletCard text={eur}>
                        <EuropeFlag />
                    </WalletCard>
                    <button className={styles['add-wallet']}>
                        <span>+</span>
                        <p>Fund wallet</p>
                    </button>
                </div>
                <h4 className={styles['text']}>Marketplace</h4>
                <div className={styles['market-place']}>
                    <div className={styles['toggle-trade']}>
                        <button className={styles['buy']}>Buy</button>
                        <button>Sell</button>
                    </div>
                    <span>EUR</span>
                    <span className={styles['ngn']}>NGN</span>
                    <div className={styles['search']}>
                        <span>NGN</span>
                        <input 
                        placeholder="Enter Amount"/>
                        <button>Search</button>
                    </div>
                </div>
            </section>
            <div className={styles['offers']}>
                <div className={styles['input']}>
                    <input type='checkbox' id='hideOffers' />
                    <label htmlFor='hideOffers'>Hide Unavailable Offers</label>
                </div>
                <div className={styles['content']}>
                    <div className={styles['listing']}>
                        <OfferCard />
                        <OfferCard />
                        <OfferCard />
                        <OfferCard />
                        <OfferCard />
                        <OfferCard />
                    </div>
                    <div className={styles['notification']}>
                        <ImportantIcon />
                        <p>How to buy EUR</p>
                        <ul>
                            <li>Accepting offer</li>
                            <li>Access all Buy EUR offers by clicking in the BUY EUR button on the dashboard.</li>
                            <li>Accept a suitable offer from all options by clicking on buy EUR on the preferred offer</li>
                            <li>The NGN receiving account will prompt up, transfer the NGN amount and click on Payment made.</li>
                            <li>The EUR amount will automatically be moved to your wallet</li>
                            <li>Withdraw the EUR to your preferred account (pending the sellers' confirmation).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;