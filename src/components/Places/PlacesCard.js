import React from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import red from 'material-ui/colors/red'
import Grid from 'material-ui/Grid'
import styled from 'styled-components'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Finger from '@material-ui/icons/ThumbUp'
import Food from '@material-ui/icons/RoomService'
import Money from '@material-ui/icons/AttachMoney'
import Walk from '@material-ui/icons/DirectionsWalk'

const PlacesItem = styled(Grid)`
  &:first-child {
    margin-top: 2em;
    margin-bottom: 0.6em;
  }
`

const InfoImg = styled.div`
  width: 100%;
  background: url(${({ background }) => background});
  height: 400px;
  background-position: center;
  background-size: cover;
  margin: 1em 0;
  padding: auto;

  @media (min-width: 300px) and (max-width: 850px) {
    height: 250px;
  }
`

const styles = theme => ({
  container: {
    margin: '1em 0',
  },
  card: {
    width: '100%',
  },
  iconsList: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  cardText: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1.3em',
    },
  },
  primary: {
    [theme.breakpoints.up('1310')]: {
      fontSize: '1.3em',
    },
  },
  secondary: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1.1em',
    },
  },
  icon: {
    height: '3em',
    width: '3em',
  },
  title: {
    fontSize: '1.5em',
    color: theme.palette.primary.dark,
    [theme.breakpoints.up('md')]: {
      fontSize: '3em',
    },
  },
  header: {
    [theme.breakpoints.up('md')]: {
      alignItems: 'normal',
    },
  },
  subheader: {
    lineHeight: '0',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5em',
    },
  },
  content: {
    paddingTop: 0,
  },
  actionBtn: {
    [theme.breakpoints.up('md')]: {
      height: '1.5em',
      width: '1.5em',
      paddingRight: '1em',
    },
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
    width: '4em',
    height: '4em',
    [theme.breakpoints.up('md')]: {
      height: '7em',
      width: '7em',
    },
  },
})

const PlacesCard = ({ classes, data, index, makeVote, voteEnding }) => {
  const ListInfoData = [
    {
      Icon: <Food color="primary" />,
      secondary: data.kitchen,
      primary: 'Кухня',
    },
    {
      Icon: <Money color="primary" />,
      secondary: data.check,
      primary: 'Средний чек',
    },
    {
      Icon: <Walk color="primary" />,
      secondary: data.geo,
      primary: 'Расположение',
    },
  ]

  return (
    <PlacesItem item md={8} lg={8} xs={10} className={classes.container}>
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
          <List className={classes.iconsList}>
            {ListInfoData.map((item, i) => (
              <ListItem key={i}>
                <Avatar className={classes.icon}>{item.Icon}</Avatar>
                <ListItemText
                  className={classes.iconItem}
                  primary={item.primary}
                  secondary={item.secondary}
                  classes={{
                    primary: classes.primary,
                    secondary: classes.secondary,
                  }}
                />
              </ListItem>
            ))}
          </List>
          <InfoImg background={data.secondBack} />
          <Typography className={classes.cardText} component="p">
            {data.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            disabled={voteEnding ? true : false}
            onClick={() => {
              makeVote({
                voteStatus: data.voteStatus,
                index,
              })
            }}
            aria-label="Stars"
          >
            <Finger color={data.voteStatus ? 'error' : 'disabled'} />
          </IconButton>
        </CardActions>
      </Card>
    </PlacesItem>
  )
}

export default withStyles(styles)(PlacesCard)
