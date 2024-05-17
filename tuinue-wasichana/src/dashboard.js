import React from 'react';
import './dashboard.css';
import DonationSection from './donationsection';
import ProfileSection from './profilesection';
import RecurringDonationsSection from './recurringdonationsection';
import Spinner from './spinner';
import { useFetch } from './useFetch';

const Dashboard = () => {
  const { data: userData, loading, error } = useFetch('/api/user-data');

  if (loading) return <Spinner />;

  if (error) {
    if (error instanceof Error) {
      return <div>Error: {error.message}</div>;
    } else {
      return <div>Error: {error}</div>;
    }
  }

  return (
    <div className="dashboard-container">
      <ProfileSection profile={userData.profile} />
      <DonationSection donations={userData.donations} />
      <RecurringDonationsSection recurringDonations={userData.recurringDonations} />
    </div>
  );
};

export default Dashboard;