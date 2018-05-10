import React from 'react'
import FinalCard from './FinalCard'
import NewRestaurauntFormContainer from '../../containers/NewRestaurauntFormContainer'

const NewRestarauntFormPage = ({ showFinalCard }) => (
  <div>{showFinalCard ? <FinalCard /> : <NewRestaurauntFormContainer />}</div>
)

export default NewRestarauntFormPage
