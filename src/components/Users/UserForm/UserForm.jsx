import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../../UI/Card/Card'
import Button from '../../UI/Button/Button'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  font-size: large;
  font-weight: bold;
`

const UserForm = props => {
  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')

  const addUserHandler = (e) => {
    e.preventDefault()
    props.addUserList(userName, userAge)
    setUserName('') // para limpiar el input, añadir el atributo value al input devolviendo el state 
    setUserAge('')
  }
  
  const usernameHandler = (e) => {
    setUserName(e.target.value)
  }

  const userAgeHandler = (e) => {
    setUserAge(e.target.value)
  }

  return (
    <Card>
      <Form onSubmit={addUserHandler}>
        <Label htmlFor='username'>Username</Label>
        <input id='username' type="text" value={userName} onChange={usernameHandler} />
        <Label htmlFor='age'>Age (Years)</Label>
        <input id='age' type="number" value={userAge} onChange={userAgeHandler}/>
        <Button type='submit' style={{marginTop: '10px'}}>Add new user</Button>
      </Form>
    </Card>
  )
}

export default UserForm
