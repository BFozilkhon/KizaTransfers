import React from 'react'
import { Cards } from './style'
const Cardlar = ({ v }) => {
  return (
    <Cards>
      <Cards.Price end>{v.name}</Cards.Price>
      <Cards.Price end>{v.price}</Cards.Price>
      <Cards.Price end>{v.price2}</Cards.Price>
      <Cards.Price end>{v.interac}</Cards.Price>
      <Cards.Price end>{v.mobile}</Cards.Price>
      <Cards.Price end>{v.pricenull}</Cards.Price>
    </Cards>
  )
}

export default Cardlar
