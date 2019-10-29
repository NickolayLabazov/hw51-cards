import React from 'react';
import Card from './Card.jsx';
import im from '../img/card.png';

export default function Cards() {

    let text1 = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    let text2 = "With supporting text below as a natural lead-in to additional content.";


    return (
        <>
            <Card title='Card title' text={text1}>
                <img src={im} className="card-img-top" alt="..." />
            </Card>
            <Card title='Special title treatment' text={text2}/>
        </>
    );
}