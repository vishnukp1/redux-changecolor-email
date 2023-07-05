import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

function Profil() {
   
    const user=useSelector((state) =>state.user.value )
   const themeColor = useSelector((state)=>state.theme.value)
    return (
    <div style={{color: themeColor}}>
         <h1>Profile Page</h1>
         <p>Name:{user.name} </p>
         <p>Age: {user.age} </p>
         <p>Email: {user.email}</p>
    </div>
  )
}

export default Profil;