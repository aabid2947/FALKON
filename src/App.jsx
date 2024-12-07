import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Introduction from './components/Introduction'
import KeyFeatures from './components/KeyFeatures'

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
     {/* <div className="bg-red-500 text-white p-4">Test Tailwind</div> */}
      <Introduction/>
      <KeyFeatures/>

    </>
  )
}

export default App
