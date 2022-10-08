import './App.css';
import UserForm from './components/Users/UserForm/UserForm';
import UserData from './components/Users/UserData/UserData';
import Modal from './components/UI/Modal/Modal';
import { useState } from 'react';

const App = () => {
  const [userList, setUserList] = useState([])
  const [validUser, setValidUser] = useState(true)
  const [error, setError] = useState('')

  const userListHandler = (userName, userAge) => {
    if (userName.trim().length === 0 || userAge === 0){
      setError({
        title: 'Invalid input',
        content: 'Enter a valid name and age (non-empty inputs)'
      })      
      setValidUser(false)
      return
    }
    if (+userAge <=0 ){
      setError({
        title: 'Invalid input',
        content: 'Enter a valid age (age >= 0)'
      })      
      setValidUser(false)
      return
    }

    setValidUser(true)
    const newUser = `${userName} (${userAge} Years)`
    // setUserList(userList => {userList.concat(newUser)}) // para actualizar el stado de useState hay que hacerlo con la callback

    setUserList(users => {
      // const updatedUsers = [...users];
      // updatedUsers.unshift({ text: newUser, id: Math.random().toString() });
      // return updatedUsers;
      return [
        ...users,
        { text: newUser, id: Math.random().toString() }
      ]
    })
  }

  const deleteUserHandler = (userId) => {
    setUserList(users => {
      const updatedUsers = users.filter(user => user.id !== userId);
      return updatedUsers;
    });
  }
  

  const closeModal = (action) => {
    setValidUser(action)
  }

  return (
    <div className='App'>
      <UserForm addUserList={userListHandler} />
      <UserData onDelete={deleteUserHandler} users={userList}/>
      {!validUser && <Modal error={error} closeModal={closeModal}/>}
    </div>
  );
}

export default App;
