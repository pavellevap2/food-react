import React from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Check from '@material-ui/icons/CheckCircle'
import { IconButton } from 'material-ui'
import styled from 'styled-components'

const IconBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.5em;
`

const styles = theme => ({
  container: {
    height: '90vh',
  },
  content: {
    padding: 0,
    margin: 0,
    height: '100%',
  },
  card: {
    minHeight: 300,
    margin: 0,
    padding: 0,
  },
  title: {
    textAlign: 'center',
    padding: '0.5em 0',
    background: theme.palette.primary.dark,
    color: 'white',
  },
  icon: {
    width: '5em',
    height: '5em',
  },
})

const FinalCard = ({ classes }) => {
  return (
    <Grid
      className={classes.container}
      container
      justify="center"
      alignItems="center"
    >
      <Grid item lg={6} xs={10}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography
              className={classes.title}
              variant="headline"
              component="h2"
            >
              Ресторан добавлен
            </Typography>
          </CardContent>
          <IconBlock>
            <IconButton>
              <Check color="primary" className={classes.icon} />
            </IconButton>
          </IconBlock>
        </Card>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(FinalCard)
