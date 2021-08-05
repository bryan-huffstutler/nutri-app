import React from 'react'

export default function searchByName () {

  return (
    <div>
      <form>
        <input name='recipeName' value={recipeName} type='text' placholder='Enter Recipe Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}