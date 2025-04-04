Volunteer Dashboard App

This is a custom-built internal tool to help track and manage volunteer onboarding at Family Nurturing Center.

Features

Displays submissions from the FNC Volunteer Application form

Organized Kanban-style workflow (New Applicants → Background Check → Training → Active Volunteers)

Checklist progress per volunteer

Tagging for availability, experience, and interests

Plans for future volunteer milestone tracking (e.g., hours served, start dates)

Folder Structure

volunteer-dashboard/ public/ index.html (HTML entry point) src/ App.js (Main app layout) data.js (Sample data to be replaced with live API data) components/ VolunteerCard.js (UI component for volunteer cards) utils/ api.js (In progress, LGL API integration) README/ README.md (This file)

Getting Started (Local Setup)

Clone this repo:

git clone https://github.com/Boofers01/volunteer-dashboard.git
cd volunteer-dashboard

Install dependencies:

npm install

Start the development server:

npm start

App will open at http://localhost:3000

Maintained by

Tim Hardy
Volunteer Coordinator
Family Nurturing Center
tim.hardy@rvfnc.org

License

This project is for internal use only at Family Nurturing Center. Please do not distribute without permission.
