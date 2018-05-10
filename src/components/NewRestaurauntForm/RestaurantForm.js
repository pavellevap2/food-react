import React from 'react'
import Grid from 'material-ui/Grid'
import styled from 'styled-components'
import { TextField } from 'material-ui'
import { withStyles } from 'material-ui'
import Typography from 'material-ui/Typography'
import InputResImage from './InputResImage'
import defaultImg from './default.png'
import SelectField from './SelectField'
import Button from 'material-ui/Button'

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
const SubmitBtnBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2em;
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
    marginTop: '1em',
  },
  submitBtn: {
    fontSize: '1.2em',
    width: '100%',
    padding: '0.5em 0',
  },
})

class RestaurantForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantName: '',
      slogan: '',
      image: '',
      kitchenType: '',
      averageСheck: '',
      restaurantGeo: '',
      restaurantDesc: '',
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

  inputSlogan = e => {
    this.setState({
      slogan: e.target.value,
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

  inputRestaurauntDesc = e => {
    this.setState({
      restaurantDesc: e.target.value,
    })
  }

  submitRestData = event => {
    event.preventDefault()

    const {
      restaurantName,
      kitchenType,
      averageСheck,
      restaurantGeo,
      restaurantDesc,
      slogan,
    } = this.state

    this.props.getRestData({
      name: restaurantName,
      kitchen: kitchenType,
      check: averageСheck,
      geo: restaurantGeo,
      desc: restaurantDesc,
      imgUrl: this.props.imageData,
      slogan: slogan ? slogan : 'Любое',
      avatar: this.props.imageData,
    })

    this.props.submitData()
  }

  render() {
    const { classes, getImageData } = this.props

    const {
      restaurantName,
      image,
      kitchenType,
      averageСheck,
      restaurantGeo,
      restaurantDesc,
      slogan,
    } = this.state

    return (
      <Grid
        container
        className={classes.container}
        justify="center"
        alignItems="center"
        margin="normal"
      >
        <Grid item xs={10} lg={5}>
          <Typography
            align="center"
            variant="display2"
            className={classes.formTitle}
          >
            Новый ресторан
          </Typography>
          <NewRestaurauntFrom onSubmit={this.submitRestData}>
            <TextField
              value={restaurantName}
              onChange={e => this.setState({ restaurantName: e.target.value })}
              label="Название ресторана"
              margin="normal"
            />
            <TextField
              value={slogan}
              onChange={e => this.inputSlogan(e)}
              label="Слоган если есть"
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
              multiline={true}
              rows={1}
              rowsMax={3}
              margin="normal"
            />

            <TextField
              label="Описание ресторана"
              margin="normal"
              value={restaurantDesc}
              onChange={e => this.inputRestaurauntDesc(e)}
              multiline={true}
              rows={3}
              rowsMax={6}
            />
            <InputResImage onChange={getImageData} onLoad={this.takeImage} />
            <PreviewImage src={image ? image : defaultImg} alt="preview" />
            <SubmitBtnBlock>
              <Button
                type="submit"
                className={classes.submitBtn}
                variant="raised"
                color="primary"
              >
                Добавить ресторан
              </Button>
            </SubmitBtnBlock>
          </NewRestaurauntFrom>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(RestaurantForm)
