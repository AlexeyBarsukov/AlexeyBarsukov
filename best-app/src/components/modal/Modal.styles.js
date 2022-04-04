import styled from 'styled-components';
import done from '../../assets/done.svg'


export const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  

`
export const ModalContent = styled.div.attrs({ className: 'ModalContent' })`
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width:304px;
  height: 394px;
`
export const BlockOfRegistation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  margin-bottom: 25px;

`
export const ErrorMessage = styled.div`
  color: #E5261E;
  font-weight: 400;
  font-family: sans-serif;
  margin-bottom: 3px;
`

export const BlockOfRemember = styled.div`
  display: flex;
  align-items: center;
`

export const Entrance = styled.h4`
  margin: 0;
  padding:0;
  font-family: Sans-serf;
  font-weight: 600;
  font-size: 28px;
  color: #333;
`

export const Login = styled.input`
  width: 232px;
  font-family: Sans-serif;
  font-weight: 400 Regular;
  font-size: 16px;
  margin-bottom: 25px;
  padding-bottom: 6px;
  border: none;
  border-bottom: 1px solid #333;
  &:focus {
    outline: none;
  }
`

export const Password = styled.input`
width: 232px;
font-family: Sans-serif;
font-weight: 400 Regular;
font-size: 16px;
margin: 0;
padding-bottom: 6px;
border: none;
border-bottom: 1px solid #333;
&:focus {
  outline: none;
}
`
export const Remember = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

+label::before{
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 75%;
}
:checked+label::before {
    border-color: #333;
    background-image: url(${done});
}


`

export const SingRemember = styled.label`
  margin-top: 20px;
  font-family: Sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #333;
`