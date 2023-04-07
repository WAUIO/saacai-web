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
      <div className="">
        <div className="flex items-center mb-4">
          <div className="flex-none flex flex-col items-center space-y-1 mr-4">
            <img className="rounded-full w-10 h-10"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <a href="#" className="block text-xs hover:underline">John Doe</a>
          </div>
          <div className="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
          </div>
        </div>

        <div className="flex items-center flex-row-reverse mb-4">
          <div className="flex-none flex flex-col items-center space-y-1 ml-4">
            <img className="rounded-full w-10 h-10"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <a href="#" className="block text-xs hover:underline">Jesse</a>
          </div>
          <div className="flex-1 bg-indigo-100 text-gray-800 p-2 rounded-lg mb-2 relative">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.</div>
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100"></div>
          </div>
        </div>        

      </div>
      <InputMessage/>
    </Layout>
  )
}

export default App
