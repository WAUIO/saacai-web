import {PropsWithChildren} from 'react'
import ChatListItem from '../components/chat/ChatListItem'

interface LayoutProps {
  title: string | React.ReactNode
}

export default ({children, title}: PropsWithChildren<LayoutProps>) => (
  <div className="h-screen bg-gray-100 flex">
    <div className="w-1/5 bg-white border-r border-gray-200 flex flex-col">
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
    <div className="w-4/5 flex flex-col">
      <div className="flex-1 bg-gray-50 overflow-y-auto p-4">
        {children}
      </div>
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="relative">
          <input
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Type your message..."
          />
          <button
            className="absolute right-0 top-0 mt-2 mr-4 text-blue-500"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
)