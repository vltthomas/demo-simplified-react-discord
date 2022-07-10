import { Outlet } from 'react-router-dom'
import './App.css'
import IndexServers from './component/IndexServers'

function App() {
  return (
    <div>
      <IndexServers />
      <Outlet />
    </div>
  )
}

export default App
