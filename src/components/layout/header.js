import React from 'react';
import styles from './header.module.scss'
import BergurMenu from './bergurMenu';
import Cart from './cart';

export default function Header() {
    return (
        <div className={styles['header-container']}>
            <span> <BergurMenu /> </span>
            <span>Name</span>
            <span><Cart /> </span>
        </div>
    )
}