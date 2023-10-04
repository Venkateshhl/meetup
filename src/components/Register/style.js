import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`

export const RegisterImg = styled.img`
  height: 500px;
  width: 400px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const RegisterHeading = styled.h1`
  color: #334155;
  font-size: 33px;
  font-family: 'Roboto';
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Label = styled.label`
  color: #7b8794;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 6px;
`

export const Input = styled.input`
  border: 1px solid #cbd5e1;
  width: 370px;
  padding: 17px;
  color: #000000;
  font-family: 'Roboto';
  outline: none;
  margin-bottom: 9px;
`

export const Select = styled.select`
  border: 1px solid #cbd5e1;
  width: 350px;
  padding: 17px;
  color: #000000;
  font-family: 'Roboto';
  outline: none;
  margin-bottom: 9px;
`

export const RegisterButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  border: none;
  outline: none;
  padding-top: 16px;
  padding-bottom: 14px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 8px;
  margin-top: 23px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 18px;
  font-family: 'Roboto';
`

export default RegisterContainer
