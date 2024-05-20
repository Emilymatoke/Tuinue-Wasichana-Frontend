import React from 'react';

const DonationSection = ({ donations }) => {
  return (
    <div className="donation-section">
      <h2>Donations</h2>
      <ul>
        {donations.map((donation) => (
          <li key={donation.id}>
            <p>Amount: {donation.amount}</p>
            <p>Date: {donation.date}</p>
            <p>Campaign: {donation.campaign}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationSection;