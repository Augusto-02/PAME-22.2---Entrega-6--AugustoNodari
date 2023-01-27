import React from 'react'
import { HeaderTitle } from '../../Pages/Adicionar/styles'
import { Headerstyle } from '../../Pages/Verifica/styles'
import Body from '../Body'
import Header from '../Header'
import './styles.css'


function ToDoList() {
  return (
    <div>
      <Headerstyle><HeaderTitle>Farmacia</HeaderTitle></Headerstyle>
      <div class="box">
        <Body></Body>
      </div>
      <Headerstyle><HeaderTitle>Farmacia</HeaderTitle></Headerstyle>
    </div>
  )
}

export default ToDoList