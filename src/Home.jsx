import React from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import myContext from './components/MyContext'
import LearnMultipleFrom from './components/LearnMultipleFrom'
import FetchData from './api/FetchData'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <div>
        <myContext.Provider value="Hello World!">
            <About/>
        </myContext.Provider>
        <Contact/>
        <LearnMultipleFrom/>
        <div className='container-fluids'>
            <div className='row'>
                <div className=''>
                    <FetchData/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home