import React from 'react'
import Header from './Header'
import Places from './Places'

const HomePage = ({ userName, userData }) => {
  console.log(userName, userData)
  return (
    <div>
      <Header />
      <Places />
    </div>
  )
}

export default HomePage
