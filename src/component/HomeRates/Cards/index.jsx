import React from 'react'
import { Container, Title } from './style'

export const Cards = ({name}) => {
  return (
    <Container>
        <Title>{name}</Title>
    </Container>
  )
}

export default Cards