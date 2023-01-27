import React, { useState } from 'react'
import { Background, Box, BoxTitle, Headerstyle, HeaderTitle, MediumBox, MiniBox, TextBox } from './styles'

import Button from '../../Componnets/Button';

function Adiciona() {

      const buts = [{name:"Sair", link:"/Homepage"}]
      const [NewItem, SetNewItem] = useState("");
      const [Arraydetodos, Setarraydetodos] = useState([]);

      function AdditemtoList() {
            const newTodo = {
                  id: Math.floor(Math.random() *1000),
                  value: NewItem,
            };

            Setarraydetodos((arrayantigo) => { 
                  return [...arrayantigo, newTodo];
            });

            SetNewItem("");
      }

      function DeleteItem(id) {
            const newArray = Arraydetodos.filter((item)=> {
                  return item.id !== id
            });
            Setarraydetodos(newArray);
      }

  return (
      <Background>
      <Headerstyle>
            <HeaderTitle>Farmacia</HeaderTitle>
      </Headerstyle>

      <MediumBox>
            <Box>
                  <BoxTitle>Adicione e Remova itens</BoxTitle>
                  <MiniBox>
                  <input onChange={(evento) => SetNewItem(evento.target.value)} type="text" value={NewItem} placeholder='Nome*'></input>
                  <button onClick={AdditemtoList}>Adicionar Item</button>
                  </MiniBox>
                  <MiniBox>
                  <TextBox>
                        {Arraydetodos.map((item)=>{
                        return <div>{item.value} <button onClick={() => DeleteItem(item.id)}>X</button></div>
                        })}</TextBox>;
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

export default Adiciona