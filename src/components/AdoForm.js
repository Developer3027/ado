import React, { useState } from 'react'

const AdoForm = ({ addAdo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addAdo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        placeholder='add ado to do'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

export default AdoForm
