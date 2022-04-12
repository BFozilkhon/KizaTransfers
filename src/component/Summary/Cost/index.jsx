import React from 'react'
import { Container, Card, Cards } from './style'
const Ratese = () => {

  return (
    <Container>

      <Card>
        <Card.Navbar>
          <Card.Td>Receiver</Card.Td>
        </Card.Navbar>
        <Card.Td > Enter a Promo/Coupon Code <span>R</span></Card.Td>
        <Cards.Price > (OPTIONAL)</Cards.Price>
      </Card>

      <Card flex>
        <Cards><Cards.Input /></Cards>
        <Cards>
          <Card.Btn onClick={() => alert('success appyled!!')}>Apply</Card.Btn>
          </Cards>
      </Card>

      <div>
        <Cards.Row small>
          <Cards.Price >Send Amount</Cards.Price>
          <Cards.Price end>100.00 CAD</Cards.Price>
        </Cards.Row>

        <Cards.Row>
          <Cards.Price>Fees</Cards.Price>
          <Cards.Price end>0.00 CAD</Cards.Price>
        </Cards.Row>
      </div>

      <Cards.Input b></Cards.Input>

      <Cards flex>
        <Card.Td margin > Total Cost <sup>2</sup>:</Card.Td>
        <Card.Td margin end> 100.00 CAD</Card.Td>
      </Cards>
      <Cards flex>
        <Card.Td margin > Total Receive Amount<sup>3</sup>:</Card.Td>
        <Card.Td margin end> 79.084.05 RWF</Card.Td>
      </Cards>
      <Card.Text margin >Lorem Ipsum <b>is simply dummy</b> text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to<b> make a type</b> </Card.Text>

      <Cards end><Card.Btn onClick={() => alert('saved!!')} small>Prepare Transaction</Card.Btn></Cards>

      <Card.Text>1 Lorem Ipsum is simply dummyto make a type text of the printin gtext of the printing</Card.Text>
      <Card.Text>2 Lorem Ipsum is simply dummyto make a type</Card.Text>
      <Card.Text>3 Lorem Ipsum is simply dummyto make a type text of the printing</Card.Text>

    </Container >
  )
}

export default Ratese
