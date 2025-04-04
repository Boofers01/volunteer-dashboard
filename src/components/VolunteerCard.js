import React from 'react';

function VolunteerCard({ volunteer }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '250px' }}>
      <h4>{volunteer.firstName} {volunteer.lastName}</h4>
      <p><strong>Email:</strong> {volunteer.email}</p>
      <p><strong>Phone:</strong> {volunteer.phone}</p>
      <p><strong>Availability:</strong> {volunteer.availability}</p>
      <p><small>Submitted: {volunteer.submittedAt}</small></p>
    </div>
  );
}

export default VolunteerCard;
