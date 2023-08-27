import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

function Header({lateCount, clickNotification}) {
  return (
    <S.Container>
      <S.LeftSide>
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">INÍCIO</Link>
          <span className="separator"></span>
        <Link to="/task">NOVA TAREFA</Link>
          <span className="separator"></span>
        <a href="#">SINCRONIZAR SMARTPHONE</a>
          <span className="separator"></span>
        <button onClick={clickNotification} id="notification">
          <img src={bell} alt="Notificações" />
          <span>{lateCount}</span>
        </button>
      </S.RightSide>
    </S.Container>
  )
}
export default Header
