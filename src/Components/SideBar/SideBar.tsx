import React from "react";
import styles from './SideBar.module.scss';
import { ReactComponent as FacebookIcon } from '../../Assests/Icons/FacebookIcon.svg';
import { ReactComponent as WalletIcon } from '../../Assests/Icons/wallet.svg';
import { ReactComponent as SecurityIcon } from '../../Assests/Icons/security-access.svg';
import { ReactComponent as AccountBalanceIcon } from '../../Assests/Icons/account-balance.svg';
import { ReactComponent as TransactionIcon } from '../../Assests/Icons/transaction.svg';
import { ReactComponent as DashBoardIcon } from '../../Assests/Icons/dashboard.svg';
import { ReactComponent as NotificationIcon } from '../../Assests/Icons/notification.svg';
import { ReactComponent as UserIcon } from '../../Assests/Icons/person.svg';
import { ReactComponent as LogOutIcon } from '../../Assests/Icons/logout.svg';
import user from '../../Assests/Images/mark.jpeg';


const SideBar = () => {
    return(
        <div className={styles['fixed']}>
            <aside className={styles['sideBar']}>
                <div className={styles['fx-booms-logo']}>
                    <FacebookIcon style={{width:'35px', height:'35px', fill: 'rgb(5, 85, 5)'}}/>
                    <h4>FXBLOOMS</h4>
                </div>
                <section>
                    <DashBoardIcon />
                    <span>Dashboard</span>
                </section>
                <section>
                    <WalletIcon />
                    <span>Wallets</span>
                </section>
                <section>
                    <TransactionIcon />
                    <span>Transactions</span>
                </section>
                <section>
                    <AccountBalanceIcon />
                    <span>Bank accounts</span>
                </section>
                <section>
                    <SecurityIcon />
                    <span>Security</span>
                </section>
                <section>
                    <NotificationIcon />
                    <span>Notifications</span>
                </section>
                <div className={styles['user-details']}>
                    <section>
                        <UserIcon />
                        <span>Profile</span>
                    </section>
                    <section>
                        <LogOutIcon />
                        <span>Log Out</span>
                    </section>
                    <div className={styles['user']}>
                        <figure>
                            <img src={user} alt="current user"></img>
                        </figure>
                        <span>Garcia</span>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default SideBar;