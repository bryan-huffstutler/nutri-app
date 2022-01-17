import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

export default function Recipe(props) {

  return (
    <div>
      {/* <img src = {props.image}/> */}
      <h4>{props.title}</h4>
      <span>
        <a href={props.sourceUrl}>See Recipe</a>
        <input type='checkbox'/>
        <FontAwesomeIcon icon={faHeart} />
      </span>
    </div>
  )
}