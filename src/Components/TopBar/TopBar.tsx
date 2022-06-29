import React from "react";
import styles from './TopBar.module.scss';
import { ReactComponent as WarningIcon } from '../../Assests/Icons/warning.svg';

const TopBar = () => {
    return(
        <section className={styles['topbar']}>
            <WarningIcon />
            <p>To use FXBLOOMS , you are required to complete the KYC process. <a href="#">Click here to verify ID</a></p>
        </section>
    );
}

export default TopBar;