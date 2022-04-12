import React, { useState } from 'react'
import { Cards } from './style'
const Inputlar = ({ v }) => {
  const [editData, seteditData] = useState({
    a: 'patrick Muhire Muhire',
    b: '******2550',
    c: '783682550',
  })
  return (
    <Cards>
      <Cards.Input value={editData.a} onChange={(e) => seteditData(e.target.value)} />
      <Cards.Input value={editData.b} onChange={(e) => seteditData(e.target.value)} />
      <Cards.Input value={editData.c} onChange={(e) => seteditData(e.target.value)} />
    </Cards>
  )
}

export default Inputlar
