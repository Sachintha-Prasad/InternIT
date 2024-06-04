# InternIT

![logo](https://github.com/Sachintha-Prasad/InternIT/blob/main/logo%20banner.png)

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)

## Overview
InternIT is a straightforward web application designed to streamline the process of finding and posting internship opportunities. The platform connects interns with companies, offering a simple and user-friendly experience. The project is built using React.js for the frontend and Tailwind CSS for styling. In the initial stage, the application uses a JSON file and JSON server for storing and managing data.

## Tech Stack
- **Frontend:** React.js with Tailwind CSS
- **Data Management:** JSON file with JSON server

## Features
- **Internship Listings:** Post and discover internship opportunities.
- **User-Friendly Interface:** Clean and intuitive UI for a seamless user experience.

## Getting Started

### Prerequisites
- Node.js installed

### Clone the Repository
```bash
git clone <repository-url>
cd internit
```

### Install Dependencies
```bash
npm install
```

### Setting Up JSON Server
1. Create a `db.json` file in the root directory of your project with the initial data structure. For example:
   ```json
   {
     "internships": []
   }
   ```

2. Install JSON server globally if not already installed:
   ```bash
   npm install -g json-server
   ```

### Running the Application
1. **Start JSON Server:**
   Open a terminal window and run:
   ```bash
   npm run server
   ```

2. **Start the Frontend Development Server:**
   Open a new terminal window and run:
   ```bash
   npm run dev
   ```

3. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000` to start using InternIT.

---

With this initial setup, you can post and discover internship opportunities using a JSON file for data storage. Further features and enhancements will be implemented as the project evolves.
