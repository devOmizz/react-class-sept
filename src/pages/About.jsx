import React, { useContext } from 'react'
import myContext from '../components/MyContext'

function About() {
    const contextData = useContext(myContext)
  return (
    <div>
        <p>My name is:{contextData}</p>
    </div>
  )
}

export default About