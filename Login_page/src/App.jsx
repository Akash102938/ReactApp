import { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      <div className="logo-box">
        <div className="logo-Twitter">
          < FaTwitter className='icon'/>
          <h2>Sign In with Twitter</h2>
          <button>
              <FcGoogle className='goog'/>
              Sign in with Google
          </button>
          <button>
             <IoLogoApple className='apple'/> 
              Sign in with Apple
          </button>
        </div>
        <hr />
      </div>
     </div>
    </>
  )
}

export default App
