import React, { useState } from 'react'
import { getProfile } from '../../Services/auth'
import ProfileComponent from '../../Components/Profile/ProfileComponent'

const Profile = (id) => {
  return (
    <div>
      <ProfileComponent props = {id}/>
    </div>
  )
}

export default Profile