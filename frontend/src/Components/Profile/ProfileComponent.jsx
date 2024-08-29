import React, { useEffect, useState } from 'react';
import { getProfile } from '../../Services/auth';
import './ProfileComponent.css'

const ProfileComponent = () => {

  const [profileData, setProfileData] = useState([]); 
  const handleGetProfile = async () =>{
    console.log("handleGetProfile")
    const data = await getProfile();
    console.log("data", data);
    setProfileData(data);
  };

  useEffect(() => {
    console.log("UseEffect");
    handleGetProfile();
  }, []);  // Se ejecuta solo una vez cuando el componente se monta

  // Debugging: verifica los datos en cada render
  useEffect(() => {
    console.log("profile-data en render:", profileData);  // Verifica que el estado se haya actualizado correctamente
  }, [profileData]);

    return (
        <div id="profile-dev">
          <div className='profile-data'>
            <h1>{profileData[0].nick}</h1>
            <h2>{profileData[0].surnames}, {profileData[0].name}</h2>
            <p>Email: {profileData[0].email}</p>
            <p>Phone: {profileData[0].phone}</p>
            <p>Role: {profileData[0].role}</p>
          </div>
          <hr/>
        </div>
      );
}

export default ProfileComponent
