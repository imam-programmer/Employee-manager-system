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

useEffect(() => {
  const loggedInUser=localStorage.getItem("loggedInUser","")

if(loggedInUser){
  const userData=JSON.parse(loggedInUser)
  setUser(userData.role)
  setloggedInUserData(userData.data)
}
},[])



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
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:employee}))
      }
    }else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" && <AdminDashboard changeUser={setUser}/>}
      {user == "employee" && <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>}
    </>
  );
};

export default App;
