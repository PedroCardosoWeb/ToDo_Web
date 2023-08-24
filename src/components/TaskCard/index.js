import React from 'react'
import * as S from './styles'

import iconDefault from '../../assets/default.png'

function TaskCard() {
  return (
    <S.Container>
      <S.TopCard>
        <img src={iconDefault} alt="ícone da tarefa" />
        <h3>Título da tarefa</h3>
      </S.TopCard>
    <S.BottomCard>
        <strong>23/08/2023</strong>
        <span>22:00</span>
    </S.BottomCard>
    </S.Container>
  )
}
export default TaskCard
