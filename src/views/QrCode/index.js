import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import Qr from 'qrcode.react'

// COMPONENTES
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function QrCode() {
    const [mac, setMac] = useState()
    const [redirect, setRedirect] = useState(false)

    const navigate = useNavigate()

    async function SaveMac() {
        if(!mac) alert('Digite o macaddress')
        else
        await localStorage.setItem('@todo/macaddress', mac)
        setRedirect(true)
        window.location.reload()
    }

    return (
        <S.Container>
            { redirect && navigate("/") }
            <Header />
            <S.Content>
                <h1>Capture o QrCode pelo App</h1>
                <p>Suas atividades serão sincronizadas com seu smartphone</p>
                <S.QrCodeArea>
                    <Qr value='getmacaddress' size={300} />
                </S.QrCodeArea>

                <S.ValidationCode>
                    <span>Digite a numeração que apareceu no smartphone: </span>
                    <input type='text' onChange={e => setMac(e.target.value)} value={mac} />
                    <button type='button' onClick={SaveMac}>SINCRONIZAR</button>
                </S.ValidationCode>

            </S.Content>
            <Footer />
        </S.Container>
    )
}

export default QrCode