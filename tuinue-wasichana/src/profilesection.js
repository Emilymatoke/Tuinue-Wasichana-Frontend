import React from 'react';

const ProfileSection = ({ profile }) => {
  return (
    <div className="profile-section">
      <h2>Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>
      <p>Address: {profile.address}</p>
    </div>
  );
};

export default ProfileSection;