import React from 'react'
import Grid from 'material-ui/Grid'
import styled from 'styled-components'
import { TextField } from 'material-ui'
import { withStyles } from 'material-ui'
import Typography from 'material-ui/Typography'
import InputResImage from './InputResImage'

const NewRestaurauntFrom = styled.form`
  display: flex;
  flex-direction: column;
`

const styles = theme => ({
  formTitle: {
    color: theme.palette.primary.dark,
    textShadow: '1px 1px 0px #fff, 4px 4px 0px rgba(0,0,0,0.15)',
    margin: '0.7em 0 ',
  },
})

class RestaurantForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantName: '',
      image: '',
    }
  }

  takeImage = imageUrl => {
    this.setState({
      image: imageUrl,
    })
  }

  render() {
    const { classes, getImageData, imageData } = this.props
    const { restaurantName } = this.state

    return (
      <Grid container justify="center" alignItems="center" margin="normal">
        <Grid item lg={6}>
          <Typography
            align="center"
            variant="display2"
            className={classes.formTitle}
          >
            Добавить новый ресторан
          </Typography>
          <NewRestaurauntFrom>
            <TextField
              value={restaurantName}
              onChange={e => this.setState({ restaurantName: e.target.value })}
              label="Название ресторана"
              margin="normal"
            />
            <InputResImage onChange={getImageData} onLoad={this.takeImage} />
            <img src={this.state.image} alt="preview" />
          </NewRestaurauntFrom>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(RestaurantForm)
