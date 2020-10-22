import React, { useState } from 'react'
import Ado from './components/Ado'
import AdoForm from './components/AdoForm'
import './App.css'

function App () {
  const [ados, setAdos] = useState([
    {
      text: 'learn react',
      isCompleted: false
    },
    {
      text: 'something',
      isCompleted: true
    },
    {
      text: 'clean kitchen',
      isCompleted: false
    }
  ])

  const addAdo = text => {
    const newAdo = [...ados, { text }]

    setAdos(newAdo)
  }

  const completeAdo = index => {
    const newAdos = [...ados]
    newAdos[index].isCompleted = true
    setAdos(newAdos)
  }

  const removeAdo = index => {
    const deleteAdos = [...ados]
    deleteAdos.splice(index, 1)
    setAdos(deleteAdos)
  }

  return (
    <div className='app'>
      <div className='ado-list'>
        {ados.map((ado, i) => (
          <Ado
            key={i}
            index={i}
            ado={ado}
            completeAdo={completeAdo}
            removeAdo={removeAdo}
          />
        ))}
        <AdoForm addAdo={addAdo} />
      </div>
    </div>
  )
}

export default App
