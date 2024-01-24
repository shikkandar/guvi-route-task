import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

const CustomCard = ({ data }) => {
    console.log(data);

    return (
        <BootstrapCard style={{ width: '22rem' }} className='m-3'>
            <BootstrapCard.Img variant="top" src={data.src} />
            <BootstrapCard.Body>
                <BootstrapCard.Title>{data.title}</BootstrapCard.Title>
                <BootstrapCard.Text style={{ fontSize: '0.8rem', color: "gray" }}>{data.description}</BootstrapCard.Text>
                <BootstrapCard.Text style={{ color: "green" }}>READ MORE </BootstrapCard.Text>
            </BootstrapCard.Body>
        </BootstrapCard>
    );
}

export default CustomCard;
