import React from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import red from 'material-ui/colors/red'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Grid from 'material-ui/Grid'
import styled from 'styled-components'
import List, { ListItem, ListItemText } from 'material-ui/List'
import KFC from './KFC.png'
import kfcBack from './kfc.jpg'
import Finger from '@material-ui/icons/ThumbUp'
import Food from '@material-ui/icons/RoomService'
import Money from '@material-ui/icons/AttachMoney'
import Walk from '@material-ui/icons/DirectionsWalk'

const InfoImg = styled.img`
  width: 100%;
  height: 10em;
  margin: 1em 0;
  padding: auto;
`

const styles = theme => ({
  container: {
    margin: '0.6em 0',
  },
  card: {
    width: '100%',
  },

  title: {
    fontSize: '1.5em',
    color: theme.palette.primary.dark,
  },
  subheader: {
    lineHeight: '0',
  },
  content: {
    paddingTop: 0,
  },

  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
    width: '4em',
    height: '4em',
  },
})

//лайки?

class PlacesCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLikeClicked: false,
      isFingerUpClicked: false,
    }
  }

  clickOnBtnLike = () => {
    this.setState({
      isLikeClicked: !this.state.isLikeClicked,
    })
  }

  clickOnBtnFinger = () => {
    this.setState({
      isFingerUpClicked: !this.state.isFingerUpClicked,
    })
  }

  render() {
    const { classes, data } = this.props
    const { isFingerUpClicked, isLikeClicked } = this.state

    return (
      <Grid item md={12} lg={7} xs={10} className={classes.container}>
        <Card className={classes.card}>
          <CardHeader
            className={classes.header}
            avatar={<Avatar src={data.avatar} className={classes.avatar} />}
            title={data.name}
            subheader={data.slogan}
            classes={{
              title: classes.title,
              subheader: classes.subheader,
            }}
          />
          <CardContent className={classes.content}>
            <List>
              <ListItem>
                <Avatar>
                  <Food color="primary" />
                </Avatar>
                <ListItemText primary="Кухня" secondary={data.kitchen} />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Money color="primary" />
                </Avatar>
                <ListItemText primary="Средний чек" secondary={data.check} />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Walk color="primary" />
                </Avatar>
                <ListItemText primary="Расположение" secondary={data.geo} />
              </ListItem>
            </List>
            <InfoImg src={data.secondBack} alt="back" />
            <Typography className={classes.par} component="p">
              {data.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              onClick={this.clickOnBtnLike}
              aria-label="Add to favorites"
            >
              <FavoriteIcon color={isLikeClicked ? 'error' : 'disabled'} />
            </IconButton>
            <IconButton onClick={this.clickOnBtnFinger} aria-label="Stars">
              <Finger color={isFingerUpClicked ? 'error' : 'disabled'} />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}

export default withStyles(styles)(PlacesCard)
