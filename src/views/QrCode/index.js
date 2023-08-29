import React, { useState, useEffect } from 'react'
import * as S from './styles'

// COMPONENTES
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function QrCode() {
    return (
        <S.Container>
            <Header />
            <S.Content>
                <h1>Capture o QrCode pelo App</h1>
                <S.QrCodeArea>
                    
                </S.QrCodeArea>
                <p>Suas atividades serão sincronizadas com seu smartphone</p>
            </S.Content>
            <Footer />
        </S.Container>
    )
}

export default QrCode