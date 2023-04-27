import React, { useState } from 'react'
import SliderContainer from '../components/home/SliderContainer'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'

const Home = ({setCategory,setSort}) => {
  const [sort,changeSort] = useState("")
  const [category,changeCategory]= useState("")
  return (
    <div>
      <SliderContainer/>
      <Sorting setSort={changeSort}/>
      <div className='flex'>
         <Category setCategory={changeCategory}/>
         <Products category={category} sort={sort}/>
      </div>
    </div>
  )
}

export default Home