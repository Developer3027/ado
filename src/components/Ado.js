import React from 'react'

const Ado = ({ ado, index, completeAdo, removeAdo }) => {
  return (
    <div
      className='ado'
      key={index}
      style={{ color: ado.isCompleted ? 'dimgrey' : '' }}
    >
      <h4>{ado.text}</h4>
      <div>
        <button onClick={() => completeAdo(index)}>Complete</button>
        <button onClick={() => removeAdo(index)}>Delete</button>
      </div>
    </div>
  )
}

export default Ado
