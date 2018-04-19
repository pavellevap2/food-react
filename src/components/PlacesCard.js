import React from 'react'
import { withStyles } from 'material-ui/styles'
import Card, {
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import red from 'material-ui/colors/red'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Grid from 'material-ui/Grid'
import KFC from './KFC.png'
import Star from '@material-ui/icons/Star'
import styled from 'styled-components'
import List, { ListItem, ListItemText } from 'material-ui/List'
import ImageIcon from '@material-ui/icons/Image'
import WorkIcon from '@material-ui/icons/Work'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import Food from '@material-ui/icons/RoomService'
import Money from '@material-ui/icons/AttachMoney'
import Walk from '@material-ui/icons/DirectionsWalk'
import kfcBack from './kfc.jpg'

const InfoBlock = styled.div`
  margin: 1em 0;
`
const InfoImg = styled.img`
  width: 100%;
  height: 10em;
  margin: 1em 0;
`

//overflow - elipses

const styles = theme => ({
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
  container: {
    marginTop: '1em',
  },
  media: {
    height: 0,
    margin: '2em 0',
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

class PlacesCard extends React.Component {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { classes } = this.props

    return (
      <Grid item md={12} lg={7} xs={10} className={classes.container}>
        <Card className={classes.card}>
          <CardHeader
            className={classes.header}
            avatar={<Avatar src={KFC} className={classes.avatar} />}
            title="KFC"
            subheader="БЦ Кавказ"
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
                <ListItemText primary="Кухня" secondary="Фаст-фуд" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Money color="primary" />
                </Avatar>
                <ListItemText primary="Средний чек" secondary="230 рублей" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Walk color="primary" />
                </Avatar>
                <ListItemText primary="Расположение" secondary="БЦ Кавказ" />
              </ListItem>
            </List>
            <InfoImg src={kfcBack} />

            <Typography className={classes.par} component="p">
              В основе всех блюд из курицы два оригинальных вкуса панировки –
              острый «Hot and Spicy» и оригинальный «11 специй и трав». Рецепты
              этих вкусов хранятся в строжайшем секрете и известны только узкому
              кругу посвященных лиц из руководителей компании KFC.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon color="error" />
            </IconButton>
            <IconButton aria-label="Stars">
              <Star />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}

export default withStyles(styles)(PlacesCard)
