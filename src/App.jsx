import React, { useContext, useEffect, useState } from "react";
import Login from "./conponents/Auth/Login";
import EmployeeDashboard from "./conponents/Dashboard/EmployeeDashboard";
import AdminDashboard from "./conponents/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
    const AuthData= useContext(AuthContext);
    const [loggedInUserData, setloggedInUserData] = useState(null)

// useEffect(() => {

//   if(AuthData){
//     const loggedInUser=localStorage.getItem("loggedInUser")
//     if(loggedInUser){
//       setUser(loggedInUser.role)
//     }
//   }
// }, [AuthData])


  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
    } 
    else if (AuthData) {
      const employee=AuthData.employee.find((e)=>email==e.email && e.password == password)
      if(employee){ 
        setUser("employee");
        setloggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee"}))
      }
    }else {
      alert("Invalid Credentials");
    }
  };

  // handleLogin("user@me.com",123)
  // useEffect(() => {
  //   // setLocalStorage()
  // getLocalStorage()

  // },)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" && <AdminDashboard />}
      {user == "employee" && <EmployeeDashboard data={loggedInUserData}/>}
    </>
  );
};

export default App;
