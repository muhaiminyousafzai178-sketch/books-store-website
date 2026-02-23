import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Sale from './components/sale'

const App = () => {
  return (
    <div >
        <Navbar/>
        < Hero/>
        <Menu/>
        <Sale/>
       </div>
  )
}

export default App