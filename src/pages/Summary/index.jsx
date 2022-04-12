import React from 'react'
import Opener from '../../component/Summary/Opener'
import Rates from '../../component/Summary/Rates'
import Reciever from '../../component/Summary/Reciever'
import Cost from '../../component/Summary/Cost'
import { Container, Wrap } from "./style";
const Summary = () => {
  return (
    <Container>
      <Wrap>
        <Opener />
        <Rates />
        <Reciever />
        <Cost />
      </Wrap>
    </Container>
  )
}

export default Summary
