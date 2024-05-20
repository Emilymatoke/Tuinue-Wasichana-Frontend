import React from 'react';

const RecurringDonationsSection = ({ recurringDonations }) => {
  return (
    <div className="recurring-donations-section">
      <h2>Recurring Donations</h2>
      <ul>
        {recurringDonations.map((donation) => (
          <li key={donation.id}>
            <p>Amount: {donation.amount}</p>
            <p>Frequency: {donation.frequency}</p>
            <p>Campaign: {donation.campaign}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecurringDonationsSection;