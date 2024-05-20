import React from 'react';

const Donor = ({ donorInfo }) => {
  return (
    <div className="donor-profile">
      <h2>Donor Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {donorInfo.name}</p>
        <p><strong>Username:</strong> {donorInfo.username}</p>
        <p><strong>Email:</strong> {donorInfo.email}</p>
        <p><strong>Password:</strong> {donorInfo.password}</p>
        
      </div>
    </div>
  );
};

export default Donor;
