import React, { useState, Fragment } from 'react'
import { Reciever } from '../../../data/receiver'
import { Container, Card, Cards } from './style'
import Input from './inputlar'
import Cardlar from './cardlar'
const Ratese = () => {
  const [click, setClick] = useState(false)
  const [data] = useState(Reciever)

  return (
    <Container>

      <Card>
        <Card.Navbar>
          <Card.Td>Receiver</Card.Td>
          {click ?
            <Card.Btn onClick={() => setClick(!click)}>save</Card.Btn>
            :
            <Card.Btn onClick={() => setClick(!click)}>edit</Card.Btn>
          }
        </Card.Navbar>
      </Card>


      <Card flex>

        <Cards>
          <Cards.Price>Legal Name</Cards.Price>
          <Cards.Price>Account Number</Cards.Price>
          <Cards.Price>Phone Number</Cards.Price>
        </Cards>
        < Cards>
          {data.map((v) => {
            return <Fragment>
              {
                click ?
                  <Input v={v} />
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
