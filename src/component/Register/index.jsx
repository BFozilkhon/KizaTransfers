import React from 'react'
import { Container, Wrapper } from './style'
import register from '../../assets/imgs/register.jpg'

export const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Wrapper.Left>
                <Wrapper.Image src={register} />
            </Wrapper.Left>
            <Wrapper.Right>
                <Wrapper.Title>First, we'll need to collect the essentials</Wrapper.Title>
            </Wrapper.Right>
        </Wrapper>
    </Container>
  )
}
