import styled from "styled-components";
import imagem from "../../Assest/Remedios4.jpg"

export const Background = styled.div`
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
background-color: white;

`

export const Headerstyle = styled.div`
      display: flex;
      flex-direction: row;
      width: 100vw;
      height: 10vh;
      background-color: rgb(128,0,0);
      justify-content: center;
      align-items: center;

`

export const HeaderTitle = styled.text`
font-size: 50px;
color: rgb(255,255,255);
`

export const MediumBox = styled.div`
      display: flex;
      flex-direction: column;
      background-color: white;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 80vh;
      background-image: url(${imagem});


`

export const Box = styled.div`

      display: flex;
      flex-direction: column;
      border: 5px solid gray;
      background-color: white;
      justify-content: start;
      align-items:center;
      width: 50vw;
      height: 50vh;
`

export const MiniBox = styled.div`

      display: flex;
      flex-direction: row;
      background-color: white;
      justify-content: center;
      align-items:center;
      width: 25vw;
      height: 5vh;
`

