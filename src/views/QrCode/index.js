import React, { useState, useEffect } from 'react'
import * as S from './styles'
import Qr from 'qrcode.react'

// COMPONENTES
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function QrCode() {
    return (
        <S.Container>
            <Header />
            <S.Content>
                <h1>Capture o QrCode pelo App</h1>
                <p>Suas atividades serão sincronizadas com seu smartphone</p>
                <S.QrCodeArea>
                    <Qr value='getmacaddress' size={300} />
                </S.QrCodeArea>

                <S.ValidationCode>
                    <span>Digite a numeração que apareceu no smartphone: </span>
                    <input type='text' />
                    <button type='button'>SINCRONIZAR</button>
                </S.ValidationCode>

            </S.Content>
            <Footer />
        </S.Container>
    )
}

export default QrCode