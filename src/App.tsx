import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './layout/DefaultLayout'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <div className="App text-3xl font-bold underline">
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </Layout>
  )
}

export default App
