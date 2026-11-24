import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

//usecallback hook
function App() {
  const [length, setlength] = useState('8')
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef (hook)
  const passwordRef = useRef()

  //Password generator bnana h ab ... (( usecallback hook use kra g ))
  //const functionname = useCallback(fn,[])
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += '{}+=)(*&^%$#@!'
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])//setPassword //Y DNA ZRORI H KIO K useState hm log cache k lia use krta hn  ..(agr hm yha dependencies m setPassword k jgha password d da ga to hm indefinite loop m phns jae g)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();//is s jb copy ho g to wo hisa pr blue bold ho jay g takhe pta to chla k kia copy hoa h or hoa bh h y ni
    // passwordRef.current?.setSelectionRange(1,3); // y range dna k lia k kis length s l kr kis lenth tk values select ho kr copy hn g 
    window.navigator.clipboard.writeText(password.slice(0, length))//is s copy ho jay g
  }, [password])

  //useEffect(Hook)
  //useEffect(() => {}, [])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (   
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3 bg-amber-50'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>   
  )
}
export default App