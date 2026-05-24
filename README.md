# DocAppoint - (Doctor Appointment Management System)

A modern, beautiful, and fully functional Doctor Appointment Booking System built with React and Next.js.  
Access premium healthcare specialists, view detailed profiles, and manage appointments all in one sleek platform.

## About the Project

DocAppoint is a modern, responsive web application built with the Next.js App Router. It features a dynamic doctor catalog, a seamless appointment scheduling system via modals, and a dedicated private dashboard designed to supercharge patient doctor management workflow. The design focuses on seamless user experience, clear call to actions, and pixel perfect responsiveness.

---

## 🔗 Links

* 🌐 Live Site: [View Live Site](https://docappointment-client.vercel.app/)
* 💻 GitHub Client Repo: [View Client Repo](https://github.com/HSBHasib/DocAppoint-A9)

## 🛠 Technologies Used

* Framework: Next.js (App Router)
* Styling: Tailwind CSS
* Authentication: Better Auth (with JWT/Session state preservation)
* Icons: Lucide React, React Icons
* Database: MongoDB Atlas

---

## 📦 Dependencies
* Next.js
* Swiper.js
* BetterAuth
* Tailwind CSS
* Lucide React
* React Icon
* React Form Hook
* React Hot Toast
* MongoDB (Backend Database)

---

## 🚀 Key Features

### Dynamic Doctor Catalog & Search
* Displays top rated doctors dynamically in a clean 3 column layout on the Home page.
* Features an instant search functionality on the All Appointments page using the doctor's name.

### Comprehensive Details View
* Each doctor has a dedicated details page designed in a clean, user friendly 2 column dashboard layout displaying specialty, experience, fees, and institution.

### Interactive Appointment Booking
* Open an interactive booking form modal by clicking "Book Appointment" to instantly save appointment details straight to MongoDB with dynamic toast notifications.

### Secure Authentication & Profile Management
* Powered by Better Auth, keeping users securely logged in even after hard page refreshing.
* Users can update their profile information, name, and profile photo instantly from their personal dashboard.

### Secure Dashboard CRUD Operations
* Dedicated private route for users to manage bookings, allowing real time schedule updates (keeping core doctor data secure/read only) or canceling appointments with instant UI updates.

---

## ⚙️ How to Run Locally

```bash
# Clone the repository
git clone [  ]

# Go into the project folder
cd DocAppoint-A9

# Setup your Environment Variables (.env)
# BETTER_AUTH_SECRET=your_secret
# MONGODB_URI=your_mongodb_connection_string

# Install dependencies
npm install

# Run the project locally
npm run dev
```

## Developer
* Name: Hasibur Rahman
* GitHub: [HSBHasib](https://github.com/HSBHasib)
