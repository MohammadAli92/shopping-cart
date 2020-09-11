import React from 'react';
import ProductItem from './productItem';
import { Row } from 'react-bootstrap';

export default function Products({ products }) {
    const items = products.map(item => {
        console.log(item.imageUrl)
        return <ProductItem
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            id={item.id}
        />
    })
    return (
        <Row>
            {items}
        </Row>
    )
}