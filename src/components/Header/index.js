import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

function Header({lateCount, clickNotification}) {
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
