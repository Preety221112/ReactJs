import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {

  const user = 'Preety kumari'
  const age = 22
  return (
    <div>
      <Navbar />
      <div className="card">
        <h1>Preety kumari</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reprehenderit alias, ratione qui maiores quibusdam adipisci culpa exercitationem fugit repellendus facilis, dolore inventore aliquam provident quod voluptate aspernatur placeat laboriosam!</p>
      </div>
      <Navbar />
    <Card />
    </div>
  )
}

export default App
