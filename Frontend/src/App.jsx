import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Users from './components/Users'
import CreaterUser from './components/CreaterUser'
import UpdateUser from './components/UpdateUser'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Users/>}/>
         <Route path="/create" element={<CreaterUser/>}/>
         <Route path="/update/:id" element={<UpdateUser/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
