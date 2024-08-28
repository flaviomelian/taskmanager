import React, { useEffect, useState } from 'react';
import { getProfile } from '../../Services/auth';

const ProfileComponent = () => {

  const [profileData, setProfileData] = useState([]); 
  const handleGetProfile = async () =>{
    const data = await getProfile();
    setProfileData(data);
  }

  useEffect(() => {
   handleGetProfile()
  }, []); // Ejecutar solo cuando el ID cambie


    return (
        <div>
          <h1>{profileData.nick}</h1>
          <h2>{profileData.surnames}, {profileData.name}</h2>
          <p>Email: {profileData.email}</p>
          {/* Renderiza otros datos del perfil */}
        </div>
      );
}

export default ProfileComponent
