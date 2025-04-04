import React, { useEffect, useState } from 'react';
import { volunteerSubmissions } from './data';
import VolunteerCard from './VolunteerCard';

function App() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    // In Stage 2, replace with real API call from ./utils/api.js
    setVolunteers(volunteerSubmissions);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Volunteer Submissions</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {volunteers.map((v) => (
          <VolunteerCard key={v.id} volunteer={v} />
        ))}
      </div>
    </div>
  );
}

export default App;
