import React, { useState, useEffect } from 'react'
import * as S from './styles'
import api from '../../services/api'

// COMPONENTES
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TypeIcons from '../../utils/typeIcons'

function Task() {
const [lateCount, setLateCount] = useState()
const [type, setType] = useState()

    async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response => {
      setLateCount(response.data.length)
    })
  }

  useEffect(() => {
    lateVerify();
  }, [])

  return (
    <S.Container>
      <Header lateCount={lateCount}/>
      <S.Form>
        <S.TypeIcons>
         {
           TypeIcons.map((icon, index) => (
               index > 0 && 
               <button type="button" onClick={() => setType(index)}>
                    <img src={icon} alt="Tipo da Tarefa"
                    className={type && type != index && 'inative'} />
               </button>
           ))
         }
        </S.TypeIcons>

        <S.Input>
            <span>Título: </span>
            <input type="text" placeholder="Título da Tarefa" />
        </S.Input>

        <S.TextArea>
            <span>Descrição: </span>
            <textarea rows={5} placeholder="Descrição da Tarefa" />
        </S.TextArea>

        <S.Input>
            <span>Data: </span>
            <input type="date" placeholder="data" />
        </S.Input>

        <S.Input>
            <span>Hora: </span>
            <input type="time" placeholder="hora" />
        </S.Input>

        <S.Options>
            <div>
                <input type="checkbox" />
                <span>CONCLUÍDO</span>
            </div>
            <button type="button">EXCLUIR</button>
        </S.Options>

        <S.Save>
            <button type="button">SALVAR</button>
        </S.Save>

      </S.Form>
      <Footer />
    </S.Container>
  )
}
export default Task
