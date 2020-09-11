import React from 'react';
import { Button, Col } from 'react-bootstrap';
import styles from './productItem.module.scss'

export default function ProducItem({ title, imageUrl, price, id }) {
    console.log(imageUrl)
    return (
        <Col md={3}>
            <div className={styles['card']}>
                <img src={imageUrl} alt="" />
                <div className="text-center">
                    {title}
                </div>
                <button>salam</button>
            </div>
        </Col>
    )
}