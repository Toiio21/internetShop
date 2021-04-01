import React from 'react'
import BasketCard from './basketCard'
import Categories from './Categories'
import Search from './Search'

const Sidebar = () => {
  return (
    <div>
      <BasketCard />
      <Search />
      <Categories />
    </div>
  )
}

export default Sidebar