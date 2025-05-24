import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Inbox from './components/Inbox'

const App = () => {
  return (
    <div className='bg-[#DFDFDF] w-full h-screen' >
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/inbox' element={<Inbox/>} />
      </Routes>
     
    </div>
  )
}

export default App

