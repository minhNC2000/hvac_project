import React from 'react'
import { Home } from '../Pages/Home/Home'
import {About} from '../Pages/About/About'
import { Route } from 'react-router-dom'
export const publicRoutes = () => {
  return (
    <> 
    <Route path="/" element= {<Home />} />
    <Route path="/gioi-thieu" element = {<About />} />
    </>
  )
}
