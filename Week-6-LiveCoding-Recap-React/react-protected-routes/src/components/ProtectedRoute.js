import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children,user}) {
if(user){
    return {children}
}else{
    return <Navigate to="/login"/>
} 
}

