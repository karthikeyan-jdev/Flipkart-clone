import React from 'react'
import Category from '../components/category'
import Banner from '../components/Banner'
import Products from './Products'

const Home = () => {
  return (
    <div className='section-con'>
      <Category/>
      <Banner />
      <Products/>
    </div>
  )
}

export default Home