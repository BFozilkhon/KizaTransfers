import React, { useState } from "react";
import { Box, Container, Flexing, Main__container, Wrap } from "./style";
import canada from '../../assets/imgs/canada.png'
import uzb from '../../assets/imgs/uzb.jpg'
import chinese from '../../assets/imgs/chinese.png'
import korean from '../../assets/imgs/korean.jpg'
import { Link } from "react-router-dom";

export const Receiver = () => {
  const [state, setState] = useState('canada')

  const onChange = (e) => {
    setState({[e.target.name]: e.target.value})
  }
  return (
    <Container>
      <Container.Header>Receive Information</Container.Header>
      <Wrap>
        <Box>
          <Box.Name>LEGAL FIRST NAME</Box.Name>
          <Flexing>
            <Flexing.Input placeholder="LEGAL FIRST NAME" />
          </Flexing>
        </Box>
        <Box>
          <Box.Name>Middle Name</Box.Name>
          <Flexing>
            <Flexing.Input placeholder="Middle Name" />
          </Flexing>
        </Box>
      </Wrap>
      <Wrap>
        <Box>
          <Box.Name>LEGAL LAST NAME</Box.Name>
          <Flexing>
            <Flexing.Input placeholder="Legal Last Name" />
          </Flexing>
        </Box>
        <Box>
          <Box.Name>SECOND LAST NAME</Box.Name>
          <Flexing>
            <Flexing.Input placeholder="Second Last Name" />
          </Flexing>
        </Box>
      </Wrap>
      <Wrap.AdditionalInformation>Additional Receiver Information</Wrap.AdditionalInformation>
      <Wrap>
        <Box>
          <Box.Name>RECEIVER WALLET NUMBER</Box.Name>
          <Flexing>
            <Flexing.Input placeholder="Receiver Wallet Number" />
          </Flexing>
        </Box>
        <Box>
          <Box.Name>MOBILE WALLET</Box.Name>
          <Flexing>
            <Flexing.Input placeholder="Mobile Wallet" />
          </Flexing>
        </Box>
      </Wrap>
      <Wrap>
        <Box>
          <Box.Name>MOBILE NUMBER</Box.Name>
          <Flexing>
            <Flexing.Flag src={canada} state={(state.select==='canada' || state ==='canada') && state} />
            <Flexing.Flag src={uzb} state={state.select==='uzb' && state} />
            <Flexing.Flag src={korean} state={state.select==='korean' && state} />
            <Flexing.Flag src={chinese} state={state.select==='chinese' && state} />
            <Flexing.Select__number name='select'  onChange={onChange} >
              <Flexing.Option value='canada'>+1</Flexing.Option>
              <Flexing.Option value='uzb'>+998</Flexing.Option>
              <Flexing.Option value='korean'>+82</Flexing.Option>
              <Flexing.Option value='chinese'>+86</Flexing.Option>
            </Flexing.Select__number>
            <Flexing.Input__select type='number' placeholder="Mobile number" />
          </Flexing>
        </Box>
      </Wrap>
      <Link to={'/payment'}>
      <Container.Button> Next </Container.Button>
      </Link>
    </Container>
  );
};

export default Receiver;
