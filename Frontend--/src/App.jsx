import react from 'react'
import viteLogo from '/vite.svg'
import AppRouter from './AppRouter'
import "./style.scss"
import { Authprovider } from './features/auth/Auth.Context'


function App() {

  return (

  
    <Authprovider>
      <AppRouter />
    </Authprovider>
  
  )
}

export default App
