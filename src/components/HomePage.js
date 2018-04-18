import React from 'react'
import Header from './Header'

const HomePage = ({ userName, userData }) => {
  console.log(userName, userData)
  return (
    <div>
      <Header />
      <h1>регистрация прошла успешно</h1>
    </div>
  )
}

export default HomePage
