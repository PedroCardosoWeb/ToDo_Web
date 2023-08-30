import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { useParams, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'

import api from '../../services/api'
import isConnected from '../../utils/isConnected'

// COMPONENTES
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TypeIcons from '../../utils/typeIcons'

function Task() {
  const [type, setType] = useState()
  const [id, setId] = useState(useParams().id) 
  const [done, setDone] = useState(false)
  const [title, setTitle] = useState()	
  const [description, setDescription] = useState()
  const [date, setDate] = useState()
  const [hour, setHour] = useState()
  const [myRedirect, setMyRedirect] = useState(false)
  
  const navigate = useNavigate()
  
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
  }
}

  async function Save() {
    if(id){
      await api.put(`/task/${id}`, {
        macaddress: isConnected,
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
        macaddress: isConnected,
        type,
        title,
        description,
        when: `${date}T${hour}`,
      }).then(() => {
        setMyRedirect(true)
      })
    }
  }

  async function Remove() {
    const response = window.confirm('Deseja realmente excluir esta tarefa?') 
    if(response){
      await api.delete(`/task/${id}`)
      .then(() => {
        alert('Tarefa excluída com sucesso!') 
        setMyRedirect(true)
      }) 
    } else {
      alert('Ok, tudo bem! Não excluiremos esta tarefa neste momento...')
      setMyRedirect(false)
    }
  }

  useEffect(() => {
    if(!isConnected) setMyRedirect(true)
    LoadTaskDetails()
  }, [])

  return (
    <S.Container>
      {myRedirect && navigate('/')}
      <Header />
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
        
        <S.Input>
          <S.TextArea>
              <span>Descrição: </span>
              <textarea rows={5} placeholder="Descrição da Tarefa" 
              onChange={e => setDescription(e.target.value)} value={description}
              />
          </S.TextArea>
        </S.Input>

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
            {id && <button type="button" onClick={Remove}>EXCLUIR</button>}
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
