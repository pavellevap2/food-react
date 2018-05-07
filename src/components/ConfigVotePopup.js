import React from 'react'
import styled from 'styled-components'
import SelectField from '../components/NewRestaurauntForm/SelectField'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui'
import Grid from 'material-ui/Grid'

const VOTE_DATES = [5, 10, 15, 25, 30, 60, 90]

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
  left: 10%;
  right: 10%;
  top: 10%;
  bottom: 10%;
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

const styles = {
  submitBtn: {
    marginTop: '3em',
    width: '60%',
  },
}

class ConfigVotePopup extends React.Component {
  render() {
    const { showVoteCongig, classes, timeRange, selectTimeRange } = this.props
    return (
      <PopupBlock>
        <PopupInner>
          <Grid container alignItems="center">
            <Grid item xs={12} lg={12}>
              <PopupTitleBlock>
                <PopupTitle>Конфигурация голосования</PopupTitle>
              </PopupTitleBlock>

              <SelectField
                selectName="длительность"
                data={VOTE_DATES}
                value={timeRange}
                onChange={e => selectTimeRange(e.target.value)}
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
