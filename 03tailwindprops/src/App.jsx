import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import './index.css'
import Card from './components/Card'

// let myVarr=  [1, 2, 3]
// let myObj = {

// username : 'Ayan',
// }


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1 className=" font-bold text-orange-500 text-center ">
//         Hello Tailwind!
//       </h1>

//       <Card username ="Afnan" btnText="Click me"/>
//       <Card username="Ayan" />
//     </>
//   )
// }

function App(){
  const[counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    //idhr ak ak value h brha g kio is k reason y h k useState jo h jitna bhjta h ui m update states wo badges m bhjta h mtlb y k ak h bar bhjta h k k hr jgha ak ak kam ho rha h to wo ak ak nmbr h update ho ga..
  }

  const removeValue = function(){
    //counter = counter - 1
    setCounter(counter => counter - 1)
    setCounter(counter => counter - 1)
    setCounter(counter => counter - 1)
    setCounter(counter => counter - 1)
    setCounter(counter => counter - 1)
    //is m remove pr clk kr k dkho g to pta chla g k y akhta h kam ho g jitni bar hm n remove kia h mslan 15 s sidhr remove clk krna pr 10 ay g yha backcall use kia hn
  }
  return(
  <div className="min-h-screen bg-gray-200 p-10">
    <h1 className="bg-blue-600 text-white text-3xl font-bold p-4 text-center rounded-lg">
      Value Increment or Decrement
    </h1>
    <h2 className="text-4xl font-bold text-orange-600 text-center my-8">
      Counter Value: {counter}
    </h2>
    <div className="text-center">
      <button
        onClick={addValue}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 cursor-pointer mr-3"
      >
        Add Value
      </button>
      <button
        onClick={removeValue}
        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 cursor-pointer"
      >
        Remove Value
      </button>
    </div>

    <p className="text-center text-gray-700 font-semibold mt-8">
      Footer: {counter}
    </p>
  </div>
  )
}
export default App
