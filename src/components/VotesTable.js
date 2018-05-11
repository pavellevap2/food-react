import React from 'react'
import { withStyles } from 'material-ui/styles'
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Replay from '@material-ui/icons/DataUsage'
import styled from 'styled-components'

const PreloaderIcon = styled(Replay)`
  animation: preloader-logo-spin infinite 5s linear;
  @keyframes preloader-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hidden',
  },
  resultTable: {
    color: theme.palette.primary.dark,
  },
})

class VotesTable extends React.Component {
  componentDidMount() {
    this.props.takeVotesTable()
  }

  render() {
    const {
      votesTable,
      classes,
      isVoteEnding,
      endTime,
      showPreloader,
    } = this.props

    return (
      <Grid container justify="center">
        <Grid item md={8} lg={8} xs={10}>
          <Paper className={classes.root}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.resultTable}>
                    Статус голосования
                  </TableCell>
                  <TableCell numeric className={classes.resultTable}>
                    {isVoteEnding
                      ? 'Голосование завершено'
                      : `Окончание в ${endTime}`}
                  </TableCell>
                </TableRow>
                {isVoteEnding ? (
                  <TableRow>
                    <TableCell>Результаты предыдущего голосования</TableCell>
                    <TableCell numeric>Голоса</TableCell>
                  </TableRow>
                ) : (
                  <TableRow>
                    <TableCell>Ресторан</TableCell>
                    <TableCell numeric>Голоса</TableCell>
                  </TableRow>
                )}
              </TableHead>
              <TableBody>
                {votesTable.map((x, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>{x.name}</TableCell>
                      <TableCell numeric>
                        {showPreloader ? (
                          <PreloaderIcon color="primary" />
                        ) : (
                          x.vote
                        )}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(VotesTable)
