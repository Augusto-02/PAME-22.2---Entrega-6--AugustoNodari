
import React from 'react'
import { Background, Box, Headerstyle, HeaderTitle, MediumBox } from './styles'




import Button from '../../Componnets/Button'


function Homepage() {
      const buts = [{name:'Adicionar e Remover Itens', link:"/Adicionar"},
      {name: "Verificar Entregas", link:"/Verifica"},
      {name:"Sair", link:"/"}]
  return (
    <Background>
      <Headerstyle>
            <HeaderTitle>Farmacia</HeaderTitle>
      </Headerstyle>

      <MediumBox>
            <Box>
                  {buts.map((item)=>(<Button name={item.name} link={item.link}></Button>))} 
            </Box>
      </MediumBox>

      <Headerstyle>
            <HeaderTitle>Farmacia</HeaderTitle>
      </Headerstyle>
    </Background>
  )
}

export default Homepage