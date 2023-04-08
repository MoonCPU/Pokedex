import React from 'react'

const Pokeball = (props) => {
  return (
    <div className='h-8 flex items-center justify-center  mx-3'>
        <img id={props.ID} className='w-full h-full flex' src="/pokeball.svg" alt="pokeball" />
    </div>
  )
}

export default Pokeball