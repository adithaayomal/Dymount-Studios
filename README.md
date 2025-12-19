# Dymount Studios - 3D Asset Studio Website

A full-stack web application built with React (frontend) and Express (backend) for a 3D asset studio.

## Project Structure

- `client/` - React frontend application
- `server/` - Express backend server

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies for both client and server:

```bash
npm install
cd client && npm install
cd ../server && npm install
```

### Running the Application

To run both the client and server concurrently:

```bash
npm start
```

This will start:
- React development server on http://localhost:3000
- Express server on http://localhost:5000

### Individual Commands

- Start client only: `npm run client`
- Start server only: `npm run server`

## Technologies Used

- Frontend: React, Three.js
- Backend: Express.js
- Development: Concurrently for running both services

## License

ISC