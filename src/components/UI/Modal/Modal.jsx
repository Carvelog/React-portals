import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import Button from '../Button/Button'
import classes from'./Modal.module.css'

const ModalContent = styled.div`
  background-color: white;
  width: 40%;
  position: absolute;
  top: 30%;
  border-radius: 10px;
  z-index: 11;
`

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClickCloseModal} />
}

const ModalOverlay = (props) => {
  return (
    <ModalContent>
      <div className={classes.modalHeader}><h2>{props.error.title}</h2></div>
      <div className={classes.modalContent}><p>{props.error.content}</p></div>
      <div className={classes.modalFooter}>
        <Button className='closeModal' onClick={props.onClickCloseModal}>Okey</Button>
      </div>
    </ModalContent>
  )
}

const Modal = props => {
  const closeModalHandler = (e) => {
    props.closeModal(true)
  }

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClickCloseModal={closeModalHandler}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay error={props.error} onClickCloseModal={closeModalHandler}/>, document.getElementById('overlay-root'))}
    </Fragment>
  )
}

export default Modal
