import React from 'react'
import styled from 'styled-components'
import SelectField from '../components/NewRestaurauntForm/SelectField'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui'
import Grid from 'material-ui/Grid'
import Close from '@material-ui/icons/Close'
import IconButton from 'material-ui/IconButton'

const VOTE_DATES = [0.5, 5, 10, 15, 25, 30, 60, 90]

const PopupBlock = styled.div`
  z-index: 4;
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
  left: 5%;
  right: 5%;
  top: 10%;
  bottom: 10%;
  background-color: white;
  border: 2px solid #3f51b5;
  margin: 0 5%;
  z-index: 5;
`
const PopupTitleBlock = styled.div`
  display: flex;
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
    width: '90%',
  },
  closeBtn: {
    float: 'right',
  },
}

class ConfigVotePopup extends React.Component {
  render() {
    const {
      startVote,
      classes,
      timeRange,
      selectTimeRange,
      showVoteConfig,
    } = this.props
    return (
      <PopupBlock>
        <PopupInner>
          <Grid container justify="center">
            <Grid item xs={12} lg={6}>
              <PopupTitleBlock>
                <PopupTitle>Конфигурация голосования</PopupTitle>
                <IconButton
                  className={classes.closeBtn}
                  onClick={() => showVoteConfig(false)}
                >
                  <Close />
                </IconButton>
              </PopupTitleBlock>

              <SelectField
                selectName="длительность в минутах"
                data={VOTE_DATES}
                value={timeRange}
                onChange={e => selectTimeRange(e.target.value)}
              />
              <Button
                onClick={startVote}
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
