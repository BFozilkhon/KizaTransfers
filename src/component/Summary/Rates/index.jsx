import React, { useState, Fragment } from 'react'
import { rates } from '../../../data/rates'
import { Container, Card, Cards } from './style'
import Input from './inputlar'
import Cardlar from './cardlar'
const Ratese = () => {
  const [click, setClick] = useState(false)
  const [data] = useState(rates)


  return (
    <Container>

      <Card>
        <Card.Navbar>
          <Card.Td>Rates & Fees</Card.Td>
          {click ?
            <Card.Btn onClick={() => setClick(!click)}>save</Card.Btn>
            :
            <Card.Btn onClick={() => setClick(!click)}>edit</Card.Btn>
          }
        </Card.Navbar>
      </Card>

      <Card.Td price>1.0000 CAD = 790.8404 RWF <sup>1</sup></Card.Td>

      <Card flex>

        <Cards>
          <Cards.Price>Receive Country</Cards.Price>
          <Cards.Price>Send Amount</Cards.Price>
          <Cards.Price>Receive Amount</Cards.Price>
          <Cards.Price>Payment Method</Cards.Price>
          <Cards.Price>Receive Method</Cards.Price>
          <Cards.Price>Free</Cards.Price>
        </Cards>
        < Cards>
          {data.map((v) => {
            return <Fragment>
              {
                click ?
                  <Input v={v} s />
                  :
                  <Cardlar v={v} />
              }
            </Fragment>

          })}
        </Cards>

      </Card>

    </Container >
  )
}

export default Ratese
