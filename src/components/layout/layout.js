import React from 'react';
import styles from './layout.module.scss';
import Header from './header';


export default function Layout({children}){
    return(
        <div className={styles['layout-container']}>
            <Header />
            <div>
                {children}
            </div>
        </div>
    )
}