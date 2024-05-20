import React from 'react';



function CharityPage() {
  return (
    <div className="charity-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Tuinue Wasichana</h1>
          <p>Empowering school-going girls with sanitary towels, clean water, and proper sanitation facilities.</p>
          <button className="btn btn-primary">Donate Now</button>
        </div>
      </header>
      <section className="impact-section">
        <div className="container">
          <h2>Our Charity Impact</h2>
          <div className="impact-cards">
            <div className="impact-card">
              <h3>Sanitary Towels Distributed</h3>
              <p>Over 10,000 girls provided with sanitary towels annually.</p>
            </div>
            <div className="impact-card">
              <h3>Clean Water Projects</h3>
              <p>20 schools equipped with clean water facilities.</p>
            </div>
            <div className="impact-card">
              <h3>Sanitation Facilities</h3>
              <p>15 schools provided with new sanitation facilities.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="donation-section">
        <div className="container">
          <h2>Make a Difference</h2>
          <p>Your donation helps us continue our mission to support girls' education and health.</p>
          <button className="btn btn-secondary">Donate Monthly</button>
        </div>
      </section>
    </div>
  );
}

export default CharityPage;
