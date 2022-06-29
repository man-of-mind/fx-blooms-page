import React from "react";
import styles from './Cards.module.scss';

interface props {
    text: string,
    children: React.ReactNode
}

const WalletCard:React.FC<props> = ({text, children}) => {
    return (
        <div className={styles['wallet']}>
            <h4>{text}</h4>
            {children}
        </div>
    );
}

export default WalletCard;