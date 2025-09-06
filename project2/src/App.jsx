import { useState, useCallback,useEffect, useRef } from 'react'

//import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const [length, setlenght] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, Setpassword] = useState('')

  //useref hhok
  const passwordRef = useRef(null)
  const copyToClipBoard = useCallback(()=>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,7);
        window.navigator.clipboard.writeText(password);
  },[password])

  const passwordGenerator = useCallback(function () {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*_-+=[]{}~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    Setpassword(pass);
  }, [length, numberAllowed, characterAllowed,Setpassword])
  
  useEffect(()=>{
       passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4
        py-8 my-8 text-orange-500 bg-gray-800'>
          <h1 className='text-white text-center my-3'>Password Generator</h1>
           <div className=' classname="flex shadow rounded-lg overflow-hidden mb-4"'>
                <input type="text"
                       value={password}
                       className='outline-none w-full py-1 px-3'
                       placeholder='Password Generator'
                       readOnly
                       ref={passwordRef}
               />
               <button onClick={copyToClipBoard}
               className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
          </div> 
          <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlenght(e.target.value)}} 
        />
          <label>Length: {length}</label>
      </div> 
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setnumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={characterAllowed}
          id="characterInput"
          onChange={() => {
              setCharacterAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="characterInput">Character</label>
      </div>
      </div>
  </div>
    
  )
}

export default App
