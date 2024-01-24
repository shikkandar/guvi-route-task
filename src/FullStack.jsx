import React, { useContext } from 'react'
import { Data } from './data'
import {  Card, Container } from 'react-bootstrap';
const FullStack = () => {
  const { fullStack } = useContext(Data);
  return (
    <Container>
    <div className='d-flex flex-wrap  justify-content-center p-0 m-0 '>
    {fullStack.map((data, i) => (
      <Card key={i} style={{ width: '22rem' }} className='m-3'>
        <Card.Img variant="top" src={data.src} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text  style={{ fontSize: '0.8rem',color:"gray" }}>{data.description}</Card.Text>
          <Card.Text style={{color:"green"}}>READ MORE >></Card.Text>
        </Card.Body>
      </Card>
    ))}
  </div>
  </Container>
  )
}

export default FullStack