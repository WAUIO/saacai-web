import {PropsWithChildren} from 'react'
import ChatListItem from '../components/ChatListItem'
import {PlayIcon} from '../icons'

interface LayoutProps {
  title: string | React.ReactNode
}

export default ({children, title}: PropsWithChildren<LayoutProps>) => (
  <div className="container container-2xl h-screen w-screen max-w-full bg-gray-100 flex">
    <div className="w-1/4 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 bg-blue-500 text-white">
        <h1 className="text-xl font-semibold">
          {title}
        </h1>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul role="list" className="p-6 divide-y divide-slate-200">
          <ChatListItem
            title="User 1"
            subtitle="user@email.co"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <ChatListItem
            title="User 2"
            subtitle="user@email.co"
            image="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
        </ul>
      </div>
    </div>
    <div className="w-3/4 flex flex-col">
      <div className="flex-1 bg-gray-50 overflow-y-auto p-4">
        {children}
      </div>
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="relative shadow-lg">
          <input
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Type your message..."
          />
          <button
            className="absolute right-0 py-2 top-0 border-0 text-blue-500"
            type="submit"
          >
            <PlayIcon className="fill-black" />
          </button>
        </div>
      </div>
    </div>
  </div>
)