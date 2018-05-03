import React from 'react'
import styled from 'styled-components'
import SelectField from '../components/NewRestaurauntForm/SelectField'
import Button from 'material-ui/Button'

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
  left: 15%;
  right: 15%;
  top: 15%;
  bottom: 15%;
  background-color: white;
  border: 2px solid #3f51b5;
`
const PopupTitleBlock = styled.div`
  width: 100%;
`

const PopupTitle = styled.h2`
  width: 100%;
  color: #3f51b5;
`

const VOTE_DATE = Array(24)
  .fill(1)
  .map((_, i) => (i < 10 ? `0${i}:00` : `${i} : 00`))

const ConfigVotePopup = ({ showVoteCongig }) => {
  return (
    <PopupBlock>
      <PopupInner>
        <PopupTitleBlock>
          <PopupTitle>Конфигурация голосования</PopupTitle>
        </PopupTitleBlock>

        <SelectField data={VOTE_DATE} value={'любое'} />
        <Button onClick={() => showVoteCongig(false)} color="inherit">
          Закрыть настройки
        </Button>
      </PopupInner>
    </PopupBlock>
  )
}

//доделать попап,экшены и разрешения
export default ConfigVotePopup
