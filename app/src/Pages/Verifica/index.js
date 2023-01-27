import React from 'react'
import { Background, Box, Headerstyle, HeaderTitle, MediumBox, MiniBox } from './styles'
import { BoxTitle } from '../Adicionar/styles'
import Button from '../../Componnets/Button'


function Verifica() {
      const buts = [{name:"Sair", link:"/Homepage"}]
  return (
      <Background>
            <Headerstyle>
                  <HeaderTitle>Farmacia</HeaderTitle>
            </Headerstyle>

            <MediumBox>
                  <Box>
                        <BoxTitle>Entregas sendo realizdas</BoxTitle>
                              <MiniBox>
                              <input type="checkbox"></input>
                              <label>Remedio 1</label>
                              </MiniBox>
                              <MiniBox>
                              <input type="checkbox"></input>
                              <label>Remedio 2</label>
                              </MiniBox>
                              <MiniBox>
                              <input type="checkbox"></input>
                              <label>Remedio 3</label>
                              </MiniBox>
                              <MiniBox>
                              <input type="checkbox"></input>
                              <label>Remedio 4</label>
                              </MiniBox>
                              <MiniBox>
                              <input type="checkbox"></input>
                              <label>Remedio 5</label>
                              </MiniBox>
                              <MiniBox>
                              <input type="checkbox"></input>
                              <label>Remedio 6</label>
                              </MiniBox>
                              {buts.map((item)=>(<Button name={item.name} link={item.link}></Button>))} 
                        
                  </Box>
            </MediumBox>

            <Headerstyle>
                  <HeaderTitle>Farmacia</HeaderTitle>
            </Headerstyle>
    </Background>
  )
}

export default Verifica