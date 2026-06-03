import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [userData, setuserData] = useState(null)

useEffect(() => {
  setLocalStorage(AuthContext)
 const {employee,admin}=getLocalStorage()
 setuserData({employee,admin})
},[])


  return (
    <AuthContext.Provider value={userData}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider