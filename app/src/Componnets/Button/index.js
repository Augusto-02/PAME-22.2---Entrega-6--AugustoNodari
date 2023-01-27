import React from 'react'
import { Buttonarea, Tag} from './styles'
import { Link } from 'react-router-dom'

function Button({name, link}) {
  return (
    <Link to={link} style={{textDecoration: "none"}}>
      <Buttonarea><Tag>{name}</Tag></Buttonarea>
    </Link>
  )
}

export default Button