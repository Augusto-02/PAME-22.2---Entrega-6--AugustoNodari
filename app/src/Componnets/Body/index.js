import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { Inputs } from '../Inputs/styles'
import email from '../../Assest/Email.png'

function Body() {
  return (
      <div class ='container'>
            <div class='body'>
              <h1 class="texth1">Login:</h1>
              <Inputs type="text" placeholder='Email*' src={email}></Inputs>
              <Inputs type="password" placeholder='Senha*'></Inputs>
              <Link to='/Homepage'><button>Logar</button></Link>
            </div>
      </div>
  )
}

export default Body