import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
 import './App.css'
 import './index.css' 
// import { buildErrorMessage } from 'vite'


//usestate hook
function App() {
  const [color, setColor] = useState("pink")

  return (
    <div className='w-full h-screen m-0.5  duration-200' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap bg-yellow-100 rounded-2xl w-full justify-center shadow-lg m-1 py-3 gap-3'>
            <button onClick={() => setColor("Red")} // y asa h arrow function k sath lgae ga.. kio k on clk ko function chia
             className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor: "red"}}>Red</button>
             <button onClick={() => setColor("Green")} 
             className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor: "Green"}}>Green</button>
             <button onClick={() => setColor("Blue")} 
             className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor: "blue"}}>Blue</button>
          </div>
        </div>
    </div>
     
    
  )
}

export default App
