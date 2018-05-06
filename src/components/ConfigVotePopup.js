import React from 'react'
import styled from 'styled-components'
import SelectField from '../components/NewRestaurauntForm/SelectField'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui'
import Grid from 'material-ui/Grid'

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
  display: flex;
  flex-direction: column;
  margin: 0 5%;
`
const PopupTitleBlock = styled.div`
  width: 100%;
  margin-bottom: 3em;
`

const PopupTitle = styled.h2`
  width: 100%;
  color: #3f51b5;
`
const EndTimeBlock = styled.div`
  margin: 1em 0;
`

const styles = {
  submitBtn: {
    marginTop: '3em',
    width: '60%',
  },
}

const VOTE_DATE = Array(24)
  .fill(1)
  .map((_, i) => (i < 10 ? `0${i}:00` : `${i} : 00`))

class ConfigVotePopup extends React.Component {
  render() {
    const {
      showVoteCongig,
      classes,
      endTime,
      startTime,
      selectStartTime,
      selectEndTime,
    } = this.props
    return (
      <PopupBlock>
        <PopupInner>
          <Grid container alignItems="center">
            <Grid item xs={12} lg={12}>
              <PopupTitleBlock>
                <PopupTitle>Конфигурация голосования</PopupTitle>
              </PopupTitleBlock>

              <SelectField
                selectName="старт голосования"
                data={VOTE_DATE}
                value={startTime}
                onChange={e => selectStartTime(e.target.value)}
              />
              <EndTimeBlock />

              <SelectField
                selectName="окончание голосования"
                data={VOTE_DATE}
                value={endTime}
                onChange={e => selectEndTime(e.target.value)}
              />

              <Button
                onClick={() => showVoteCongig(false)}
                type="submit"
                variant="raised"
                color="primary"
                className={classes.submitBtn}
              >
                Стартануть голосование
              </Button>
            </Grid>
          </Grid>
        </PopupInner>
      </PopupBlock>
    )
  }
}

export default withStyles(styles)(ConfigVotePopup)
