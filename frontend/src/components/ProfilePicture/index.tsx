import React, { useState } from 'react';

import defaultAvatar from '../../assets/default-avatar.jpg';

const ProfilePictureUploader: React.FC = () => {

  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (event) => {
          if (event.target?.result) {
            setProfilePicture(event.target.result as string);
          }
        };

        reader.readAsDataURL(file);
      } else {
        alert('Por favor, selecione um arquivo de imagem.');
      }
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          overflow: 'hidden',
          margin: '0 auto',
          border: '2px solid #ccc',
          position: 'relative',
          cursor: 'pointer',
        }}
      >
        <img
          src={profilePicture || defaultAvatar} 
          alt="Profile"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        <input
          type="file"
          accept="image/*" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'pointer',
          }}
          onChange={handleFileChange}
        />

      </div>
      <p style={{ marginTop: '10px', fontSize: '14px', color: '#666', opacity: profilePicture ? 0 : 1 }}>
        Clique na foto para fazer o upload.
      </p>
    </div>
  );
};

export default ProfilePictureUploader;