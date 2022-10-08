import React from 'react'
import styled from 'styled-components'
import Card from '../../UI/Card/Card'
import Wrapper from '../../Helpers/Wrapper/Wrapper'

const Div = styled.div`
  border: 1px solid lightgray;
  width: auto;
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 5px 10px;
  font-size: large;
  font-weight: bold;
  cursor: pointer;
`

const UserData = (props) => {
  const deleteUserHandler = e => {
    props.onDelete(e.target.id)
  }
  
  return (
    <Wrapper> {/* en este caso el componente wrapper sustituye al div */}
      {props.users.length > 0 && <Card>
        {
          props.users.map(user => {
            return <Div key={user.id} id={user.id} onClick={deleteUserHandler}>{user.text}</Div>
          })
        }
      </Card>}
    </Wrapper>
  )
}

export default UserData
