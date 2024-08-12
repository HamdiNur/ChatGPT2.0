import React from 'react'
import './App.css'
import ChatBody from './components/ChatBody'

function App() {

  return (
    <div className='bg-[#1A232E] h-screen py-6 relative sm:px-28 text-white overflow-hidden flex flex-col      justify-between align-middle'>
       {/*gradinets*/}
       <dv className='gradient-01 z-0 absolute'></dv>
       <dv className='gradient-02 z-0 absolute'></dv>



      {/* header */}
      <div className='uppercase font-bold text-2xl text-center mb-3'>ChatGpt2.0 </div>


      {/* body */}
      <div><ChatBody/></div>

      {/* input  */}
      <div>input</div>
    </div>
  )
}

export default App
