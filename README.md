# CINQ

CINQ is a web-based cinema booking system designed to streamline the process of discovering movies, selecting seats, and booking tickets online. The platform provides users with an intuitive and visually interactive experience, allowing them to browse current movie listings, view available showtimes, and select seats through a real-time seating layout.

The system also includes an administrative dashboard that enables cinema staff to manage movies, screening schedules, halls, and seat layouts efficiently. By implementing role-based access control, CINQ ensures secure separation between customer-facing features and administrative operations.

This project aims to demonstrate practical full-stack development skills, including user authentication, database management, RESTful APIs, and responsive UI design, while simulating a real-world cinema booking workflow.

## Features

### User Features
- Browse currently showing movies
- View movie details and available showtimes
- Select seats using an interactive seating layout
- Book and cancel tickets
- View upcoming and past bookings

### Admin Features
- Add, update, and remove movies
- Manage showtimes and screening halls
- Configure seat layouts per hall
- Restrict admin access using role-based authorization

## Tech Stack

### Frontend
- React + Typescript (Vite)
- Tailwind CSS
- React Router
- TanStack Query

### Backend
- Node.js
- Express
- Prisma ORM
- PostgreSQL
- Multer

### Authentication & Security
- JSON Web Tokens (JWT)
- Role-based Access Control (RBAC)

### Testing
- Playwright

### Tooling & DevOps
- Azure
- Github Actions (CI)
- RESTful API Architecture

## System Architecture

CINQ follows a **client-server architecture**:
- The frontend communicates with the backend through RESTful APIs
- The backend handles authentication, business logic, and database transactions
- Prisma manages database accesss and data consistency
- PostgreSQL stores persistent application data

Seat booking operations are handled carefully to prevent double-booking and ensure data integrity. 

## Installation & Setup

### Prerequisites
- Node.js (v18 or above)
- PostgreSQL

### Setup Steps
1. Clone the repository
2. Install dependencies for both frontend and backend
3. Configure environment variables
4. Run database migrations using Prisma
5. Start the development servers 

## Testing

End-to-end tests are written using Playwright to validate critical user flows such as: 
- User login and registration
- Seat selection
- Ticket booking
Tests are integrated into the CI pipeline to ensure application stability

## Future Enhancements

- Real-time seat availability using WebSockets
- Online payment gateway integration
- Booking available for unregistered users
- Email confirmations for booking
- Cinema analytics and reporting dashboard
- Accessibility improvements
- Personalized profile for community engagement
- Reviews so users can rate movies
- Audit log to track user activity
- Ability to reset passwords

## 👤 Author / Purpose 

This project was develeoped by VERUM as a learning-focused full-stack web application to explore real-world system design, booking logic, and modern web technologies. 