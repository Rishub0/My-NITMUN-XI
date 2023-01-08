import React from 'react'
import { Router } from 'react-router-dom'
import GlobalStyle from '../../globalStyles'
import AnimatedRoutes from '../animatedRoutes/AnimatedRoutes'
const Landing = () => {
  return (
    <div>
      <Router>
      <GlobalStyle />
      <AnimatedRoutes/>
      </Router>
    </div>
  )
}

export default Landing