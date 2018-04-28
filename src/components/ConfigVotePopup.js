import React from 'react'
import styled from 'styled-components'
import SelectField from '../components/NewRestaurauntForm/SelectField'

const PopupBlock = styled.div`
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
`
const PopupInner = styled.div`
  position: absolute;
  margin: auto;
  left: 18%;
  right: 18%;
  top: 20%;
  bottom: 20%;
  background-color: white;
  border: 2px solid #3f51b5;
`
const PopupTitle = styled.h2`
  width: 100%;
  color: #3f51b5;
`
const VOTE_DATE = Array(24)
  .fill(1)
  .map((_, i) => (i < 10 ? `0${i}:00` : `${i} : 00`))

const ConfigVotePopup = props => {
  return (
    <PopupBlock>
      <PopupInner>
        <PopupTitle>Конфигурация голосования</PopupTitle>
        <SelectField data={VOTE_DATE} value="sd" />
      </PopupInner>
    </PopupBlock>
  )
}

export default ConfigVotePopup
