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
   json-server --watch db.json --port 5000
   ```

2. **Start the Frontend Development Server:**
   Open a new terminal window and run:
   ```bash
   npm start
   ```

3. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000` to start using InternIT.

---

With this initial setup, you can post and discover internship opportunities using a JSON file for data storage. Further features and enhancements will be implemented as the project evolves.

## Table of Contents

1. [Overview](#1-overview)
2. [Tech Stack](#2-tech-stack)
3. [Features](#3-features)
4. [Getting Started](#4-getting-started)


## 1. Overview

InternIT is a straightforward web application designed to streamline the process of finding and posting internship opportunities. The platform connects interns with companies, offering a simple and user-friendly experience. The project is built using React.js for the frontend and Tailwind CSS for styling. In the initial stage, the application uses a JSON file and JSON server for storing and managing data.

## 2. Tech Stack

- **Frontend:** React.js with Tailwind CSS
- **Backend:** Node.js
- **Database:** MongoDB

## 3. Features

- **Internship Listings:** Post, discover, and apply for internship opportunities.
- **User-Friendly Interface:** Clean and intuitive UI for a seamless user experience.
- **CV Submission:** Applicants can submit their CVs along with internship applications.
- **Search and Apply:** Users can search for internships based on preferences and apply easily.
- **Admin Management:**
  - Create, update, and delete internship opportunities.
  - Download user CVs from the admin dashboard.
  - Send confirmation emails to applicants.

## 4. Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Clone the Repository

```bash
git clone https://github.com/your-username/internit.git
cd internit
