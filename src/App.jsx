
import './App.css'
import AppLayout from './components/Layout'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <AppLayout>
        <Outlet />
    </AppLayout>
    </>
  )
}

export default App
