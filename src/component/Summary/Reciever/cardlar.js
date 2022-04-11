import React from 'react'
import { Cards } from './style'
const Cardlar = ({ v }) => {
  return (
    <Cards>
      <Cards.Price end>{v.name}</Cards.Price>
      <Cards.Price end>{v.card}</Cards.Price>
      <Cards.Price end>{v.number}</Cards.Price>
    </Cards>
  )
}

export default Cardlar
