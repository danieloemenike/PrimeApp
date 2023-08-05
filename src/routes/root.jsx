
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import "./root.css"
function RootLayout() {
  return (

          <div>
          <Sidebar />
       
    
          <div className="main-content">
              <Outlet />
          </div>
         
    </div>
  )
}

export default RootLayout