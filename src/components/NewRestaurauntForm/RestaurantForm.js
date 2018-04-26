import React from 'react'
import Grid from 'material-ui/Grid'
import styled from 'styled-components'
import { TextField } from 'material-ui'
import { withStyles } from 'material-ui'
import Typography from 'material-ui/Typography'
import InputResImage from './InputResImage'
import defaultImg from './default.png'
import SelectField from './SelectField'

const KITHENS = [
  'Фаст-фуд',
  'Домашняя еда',
  'Восточная кухня',
  'Азиатская кухня',
  'Непонятно',
]

const CHECK_RAGE = ['100-200', '200-300', '300-400', '400 +']

const NewRestaurauntFrom = styled.form`
  display: flex;
  flex-direction: column;
`

const PreviewImage = styled.img`
  width: 100%;
  height: 22em;
  margin: 1em 0;
`
const SelectBlock = styled.div`
  margin-top: 1em;
  display: flex;
`

const styles = theme => ({
  container: {
    marginBottom: '5em',
  },
  formTitle: {
    color: theme.palette.primary.dark,
    textShadow: '1px 1px 0px #fff, 4px 4px 0px rgba(0,0,0,0.15)',
    margin: '0.7em 0 ',
  },
  selectEnter: {
    margin: '0 5%',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 0.2,
  },
  textField: {
    width: '100%',
  },
})

class RestaurantForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantName: '',
      image: '',
      kitchenType: '',
      averageСheck: '',
      restaurantGeo: '',
    }
  }

  takeImage = imageUrl => {
    this.setState({
      image: imageUrl,
    })
  }

  selectKitchenType = e => {
    this.setState({
      kitchenType: e.target.value,
    })
  }

  selectAverageCheck = e => {
    this.setState({
      averageСheck: e.target.value,
    })
  }

  inputRestaurauntGeo = e => {
    this.setState({
      restaurantGeo: e.target.value,
    })
  }

  render() {
    const { classes, getImageData, imageData } = this.props
    const {
      restaurantName,
      image,
      kitchenType,
      averageСheck,
      restaurantGeo,
    } = this.state

    return (
      <Grid
        container
        className={classes.container}
        justify="center"
        alignItems="center"
        margin="normal"
      >
        <Grid item lg={4}>
          <Typography
            align="center"
            variant="display2"
            className={classes.formTitle}
          >
            Добавить новый ресторан
          </Typography>
          <NewRestaurauntFrom autoComplete="off">
            <TextField
              value={restaurantName}
              onChange={e => this.setState({ restaurantName: e.target.value })}
              label="Название ресторана"
              margin="normal"
            />
            <SelectBlock>
              <SelectField
                data={KITHENS}
                value={kitchenType}
                selectName="Кухня"
                onChange={this.selectKitchenType}
              />
              <div className={classes.selectEnter} />
              <SelectField
                data={CHECK_RAGE}
                value={averageСheck}
                selectName="Средний чек"
                onChange={this.selectAverageCheck}
              />
            </SelectBlock>

            <TextField
              value={restaurantGeo}
              onChange={e => this.inputRestaurauntGeo(e)}
              label="Месторасположение заведения"
              className={classes.textField}
              margin="normal"
            />

            <TextField
              label="Описание ресторана"
              margin="normal"
              multiline={true}
              rows={3}
              rowsMax={6}
            />
            <InputResImage onChange={getImageData} onLoad={this.takeImage} />
            <PreviewImage src={image ? image : defaultImg} alt="preview" />
          </NewRestaurauntFrom>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(RestaurantForm)
