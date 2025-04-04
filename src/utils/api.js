// src/utils/api.js

// Simulating an async fetch of volunteer data
export async function fetchVolunteerData() {
  // Replace this with actual fetch when LGL integration is ready
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Jane Smith",
          email: "jane.smith@example.com",
          phone: "(555) 123-4567",
          tags: ["New", "Weekend Availability"],
        },
        {
          id: 2,
          name: "Michael Johnson",
          email: "michael.j@example.com",
          phone: "(555) 987-6543",
          tags: ["Experienced", "Youth Programs"],
        },
        {
          id: 3,
          name: "Sarah Williams",
          email: "sarah.w@example.com",
          phone: "(555) 456-7890",
          tags: ["Weekday Availability"],
        },
      ]);
    }, 500);
  });
}
