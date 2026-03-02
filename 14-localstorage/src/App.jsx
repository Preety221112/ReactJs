import axios from 'axios'

const App = () => {

  const getData = async () => {

   const response = await axios.get('https://picsum.photos/v2/list')

   console.log(response.data);

  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App


//API CALLING
//TWO METHOD - 1. FETCH , 2.AXIOS
// FETCH IS INBUILT


// localStorage.setItem('agr','19')
// const age = localStorage.getItem('age')
// const user = localStorage.getItem('user')

//console.log(age,user);

// localStorage.removeItem('age')

// for fetch - niche hai code

//const App = () => {

  // async function getData(){
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    // console.log(response);
  // }
  // return (
  //   <div>
  //     <button onClick={getData}>Get Data</button>
  //   </div>