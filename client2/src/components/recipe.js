import React from 'react'

export default function Recipe (props) {

  return (
    <div>
      <img src = {props.image}/>
      <h4>{props.title}</h4>
    </div>
  )
}