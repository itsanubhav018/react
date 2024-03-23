
import './App.css'

import UserContext from './context/UserContext';
import UserContextProvider from './context/UserContextProvider';
import Login from './component/Login';
import Profile from './component/Profile';
function App() {
  
/* ek se jayada context bhi toh sakte hai jaise

  ki <UserApiProvider>
 TOH Uske andar hum ko 

  </UserApiProvider>

*/
  return (
    <UserContextProvider>

      <h1>Login Page</h1>

      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
