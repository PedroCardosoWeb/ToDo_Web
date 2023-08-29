import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'


function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState()

  async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response => {
      setLateCount(response.data.length)
    })
  }

  useEffect(() => {
    lateVerify()
  })

  return (
    <S.Container>
      <S.LeftSide>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">INÍCIO</Link>
          <span className="separator"></span>
        <Link to="/task">NOVA TAREFA</Link>
          <span className="separator"></span>
        <Link to="/qrcode">SINCRONIZAR SMARTPHONE</Link>
        {
          lateCount &&
          <> {/*fragment*/}
            <span className="separator"></span>
            <button onClick={clickNotification} id="notification">
              <img src={bell} alt="Notificações" />
              <span>{lateCount}</span>
            </button>
          </>
        }
      </S.RightSide>
    </S.Container>
  )
}
export default Header
