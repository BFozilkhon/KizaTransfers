import React, { useState } from 'react'
import { Cards } from './style'
const Inputlar = ({ v }) => {
  const [editData, seteditData] = useState({
    a: 'Rvanda',
    b: '100.00',
    c: '79,084.05',
    d: 'Interac',
    e: 'Mobile Wallet',
    f: '0.00',
  })
  return (
    <Cards>
      <Cards.Input value={editData.a} onChange={(e) => seteditData(e.target.value)} />
      <Cards.Input value={editData.b} onChange={(e) => seteditData(e.target.value)} />
      <Cards.Input value={editData.c} onChange={(e) => seteditData(e.target.value)} />
      <Cards.Input value={editData.d} onChange={(e) => seteditData(e.target.value)} />
      <Cards.Input value={editData.e} onChange={(e) => seteditData(e.target.value)} />
      <Cards.Input value={editData.f} onChange={(e) => seteditData(e.target.value)} />
    </Cards>
  )
}

export default Inputlar
