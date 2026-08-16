import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Rohit' age={21} img='https://images.unsplash.com/photo-1783154955296-3afcd019da24?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Sarthak' age={18} img='https://images.unsplash.com/photo-1782796474844-92cc237e9550?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8'/>
    </div>
  )
}

export default App