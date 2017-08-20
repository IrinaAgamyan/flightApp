import React from 'react'
import { TextField } from 'material-ui'

const style = {
  width: '40%',
  margin: 'auto'
}

const Filter = ({ onChange }) => {
  return (
    <div style={style}>
      <TextField label="Filter flights by destination" onChange={e => {
        e.preventDefault()
        onChange(e)
      }} fullWidth/>
    </div>
  )
}

export default Filter