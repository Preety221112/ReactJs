import React from 'react'
import Card from './components/card.jsx'

const App = () => {
  return (
  <div className='parent'> 
    <Card user='preety' age={25} img="https://images.unsplash.com/photo-1763986665850-6e66549aa8e0?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    <Card user='john' age={30} img="https://images.unsplash.com/photo-1769084644249-ad3e8b8ba730?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"/>
  </div>

  )
}

export default App
