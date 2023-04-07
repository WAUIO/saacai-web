import {PropsWithChildren} from 'react'

interface LayoutProps {
  
}

export default ({children}: PropsWithChildren<LayoutProps>) => (
  <div className="layout h-screen">
    <div>
      sidebar
    </div>
    <div>
      {children}
    </div>
  </div>
)