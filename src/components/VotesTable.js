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

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
})

class VotesTable extends React.Component {
  componentDidMount() {
    this.props.takeVotesTable()
  }

  render() {
    const { votesTable, classes } = this.props
    return (
      <Grid container justify="center">
        <Grid item xs={12} lg={6}>
          <Paper className={classes.root}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Ресторан</TableCell>
                  <TableCell numeric>Голоса</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {votesTable.map((x, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>{x.name}</TableCell>
                      <TableCell numeric>{x.vote}</TableCell>
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
