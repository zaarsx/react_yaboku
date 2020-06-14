import React from 'react';

import Card from 'react-bootstrap/Card';


export default function WishItem({ wish }) {
    return (
        <Card>
            <Card.Img src={ wish.author.image } className="card-img-top" alt="..." />
            <Card.Body>
                <Card.Title>
                    { wish.author.name }
                </Card.Title>
                <Card.Text>
                    { wish.text }
                </Card.Text>
            </Card.Body>
        </Card>
    );
}