import React, { useState } from 'react'
import Login from './conponents/Auth/Login'
import EmployeeDashboard from './conponents/Dashboard/EmployeeDashboard'
import AdminDashboard from './conponents/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {
const [user, setUser] = useState(null)
const handleLogin=(email,password)=>{
if(email == "admin@me.com" && password=="123"){
  // console.log(user)
  setUser("admin")
}else if(email == "user@me.com" && password=="123"){
// console.log(user)
setUser("employee")
}
else{
  alert("Invalid Credentials")
}
}
// handleLogin("user@me.com",123)
  // useEffect(() => {
  //   // setLocalStorage()
  // getLocalStorage()
  
  // },)
  
  return (
    <>
{!user?<Login handleLogin={handleLogin}/>:""}
{user=="admin"?<AdminDashboard/> : <EmployeeDashboard/>}
{/* <EmployeeDashboard/> */}
{/* <AdminDashboard/> */}
    </>
  )
}

export default App