import React from 'react'
import storage from '../../firebase/firebase'
import styled from 'styled-components'
import Button from 'material-ui/Button'

const InputBlock = styled.div`
  position: relative;
  margin: 2em 0;
`
const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`
const AddBtn = styled(Button)`
  z-index: -1;
`

class InputResImage extends React.Component {
  addImageToStorage = event => {
    const file = event.target.files[0]
    const imgUrl = URL.createObjectURL(file)
    this.props.onLoad(imgUrl)

    const storageRef = storage.ref()
    const userImageRef = storageRef.child('images' + file.name)
    userImageRef.put(file)
    userImageRef.getDownloadURL().then(url => this.props.onChange(url))
  }

  render() {
    return (
      <InputBlock>
        <AddBtn variant="raised" color="default">
          Добавить изображение
        </AddBtn>
        <InputFile onChange={this.addImageToStorage} type="file" />
      </InputBlock>
    )
  }
}

export default InputResImage
