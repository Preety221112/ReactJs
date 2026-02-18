import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
  { 
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    color:'royalblue',
    tag:'Satisfied'
    },
    { 
    img:'https://media.istockphoto.com/id/2244291353/photo/photo-of-young-businesswoman-wear-formalwear-isolated-on-yellow-background-stock-photo.jpg?s=2048x2048&w=is&k=20&c=aQ0uxNovnkhfDkjpy_VWgvuvBD_gXngRZDRp-uiFNWE=',
    intro:'',
    color:'lightseagreen',
    tag:'Satisfied'
    },
   
    { 
    img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    color:'black',
    tag:'Underbanked'
    },
   {
    img:'https://media.istockphoto.com/id/2215362213/photo/portrait-of-young-woman-wear-t-shirt-isolated-on-yellow-background-stock-photo.jpg?s=2048x2048&w=is&k=20&c=GtCFCeIM7I0jyxe5HOMqZvIWRGhwwrb2QH_uw2H3YcE=',
    intro:'',
    color:'pink',
    tag:'Average'
   }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    
    </div>
  )
}

export default App
