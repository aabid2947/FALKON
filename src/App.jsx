import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='flex flex-row'>
      <div>
        hello
      </div>
      <div>
        hello
      </div>
     </div>
     <div className="bg-red-500 text-white p-4">Test Tailwind</div>


    </>
  )
}

export default App