import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

import api from '../../services/api'
import isConnected from '../../utils/isConnected'
import clearForm from '../../utils/clearFieldsTaskDetails'

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState()
  const [isNotHome, setIsNotHome] = useState(false)

  const url = window.location.pathname

  async function lateVerify() {
    await api.get(`/task/filter/late/${isConnected}`)
    .then(response => {
      setLateCount(response.data.length)
    })
  }

  function overdueTasks(e) {
    window.location.pathname = '/'
    e.preventDefault()
}

  async function Logout() {
    await localStorage.removeItem('@todo/macaddress')
    window.location.reload()
  }

  function currPath(){
    setIsNotHome(window.location.pathname !== '/' ? true : false)
  }

  useEffect(() => {
    lateVerify()
    currPath()
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
        {
          url === '/' ?
        <Link to="/task">NOVA TAREFA</Link>
        :
        <button type='button' onClick={clearForm}>NOVA TAREFA</button>
        }
          <span className="separator"></span>
        { 
          isConnected ?
          <button type='button' onClick={Logout}>SAIR</button> :
          <Link to="/qrcode">SINCRONIZAR SMARTPHONE</Link>
        }
        { 
          lateCount &&
          <> {/*fragment*/}
            <span className="separator"></span>
            <button onClick={ 
              isNotHome ? overdueTasks : clickNotification 
              } id="notification">
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
