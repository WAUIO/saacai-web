import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './layout/DefaultLayout'
import './App.css'
import { InputMessage } from './components/common/InputMessage'
import { UserList } from './components/common/UserList'
import { User } from './interfaces/user/user.interface'

function App() {
  const [count, setCount] = useState(0)

  const users: User[] = [
    {
      firstname: "Stenny",
      lastname: "Gabriel",
      avatar: "",
      activity: "Developer"
    }
  ]

  return (
    <Layout title="SaaC.AI">
      <div className="App text-3xl font-bold underline">
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <UserList users={users} />
    </Layout>
  )
}

export default App
