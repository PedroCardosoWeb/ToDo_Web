import React, { useState, useEffect } from 'react'
import * as S from './styles'
import api from '../../services/api'
import { useParams, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'


// COMPONENTES
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TypeIcons from '../../utils/typeIcons'

function Task() {
  const [lateCount, setLateCount] = useState()
  const [type, setType] = useState()
  const [id, setId] = useState(useParams().id) 
  const [done, setDone] = useState(false)
  const [title, setTitle] = useState()	
  const [description, setDescription] = useState()
  const [date, setDate] = useState()
  const [hour, setHour] = useState()
  const [macaddress, setMacaddress] = useState('11:11:11:11:11:11')
  const [myRedirect, setMyRedirect] = useState(false)
  
  async function LateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response => {
      setLateCount(response.data.length)
    })
  }
  
  // const { id: matchId } = useParams()
  const navigate = useNavigate()
  // setId(useParams().id)
  
  async function LoadTaskDetails() {
    if(id){
      await api.get(`/task/${id}`)
      .then(response => {
        setType(response.data.type)
        setTitle(response.data.title)
        setDescription(response.data.description)
        setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
        setHour(format(new Date(response.data.when), 'HH:mm:ss'))
        setDone(response.data.done)
    })
  } else {
    navigate('/task')
  }
}

  async function Save() {
    if(id){
      await api.put(`/task/${id}`, {
        macaddress,
        done,
        type,
        title,
        description,
        when: `${date}T${hour}`,
      }).then(() => {
        setMyRedirect(true)
      })
    } else {
      if(!type)
      return alert("Favor informar o tipo desta tarefa! (selecione um ícone no topo...)")
        else if(!title)
        return alert("Favor informar o título da tarefa")
          else if(!description)
          return alert("Favor informar a descrição da tarefa")
            else if(!date)
            return alert("Favor informar a data desta tarefa")
              else if(!hour)
              return alert("Favor informar o horário desta tarefa")
      await api.post('/task', {
        macaddress,
        type,
        title,
        description,
        when: `${date}T${hour}`,
      }).then(() => {
        setMyRedirect(true)
      })
    }
  }

  useEffect(() => {
    LateVerify();
    LoadTaskDetails();
  }, [])

  return (
    <S.Container>
      {myRedirect && navigate('/') }
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
            <input type="text" placeholder="Título da Tarefa" 
            onChange={e => setTitle(e.target.value)} value={title}
            />
        </S.Input>

        <S.TextArea>
            <span>Descrição: </span>
            <textarea rows={5} placeholder="Descrição da Tarefa" 
            onChange={e => setDescription(e.target.value)} value={description}
            />
        </S.TextArea>

        <S.Input>
            <span>Data: </span>
            <input type="date" placeholder="data" 
            onChange={e => setDate(e.target.value)} value={date}
            />
        </S.Input>

        <S.Input>
            <span>Hora: </span>
            <input type="time" placeholder="hora" 
            onChange={e => setHour(e.target.value)} value={hour}
            />
        </S.Input>

        <S.Options>
            <div>
                <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
                <span>CONCLUÍDO</span>
            </div>
            <button type="button">EXCLUIR</button>
        </S.Options>

        <S.Save>
            <button type="button" onClick={Save}>SALVAR</button>
        </S.Save>

      </S.Form>
      <Footer />
    </S.Container>
  )
}
export default Task
