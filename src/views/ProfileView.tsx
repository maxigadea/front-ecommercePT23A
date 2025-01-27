'use client'
import { useAuth } from '@/context/AuthContext'
import React from 'react'

const ProfileView = () => {
  const {userData} = useAuth();
  return (
    <div>
        <h1>Bienvenido a tu perfil</h1>
        <h4>Tu correo: {userData?.user.email}</h4>
        <h4>Tu dirección: {userData?.user.address}</h4>
        <h4>Tu número: {userData?.user.phone}</h4>
    </div>
  )
}

export default ProfileView