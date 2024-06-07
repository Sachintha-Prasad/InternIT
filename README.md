# InternIT

![logo](https://github.com/Sachintha-Prasad/InternIT/blob/main/logo%20banner.png)

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Setting Up JSON Server](#setting-up-json-server)
  - [Running the Application](#running-the-application)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Overview
InternIT is a web application designed to streamline the process of finding and posting internship opportunities. The platform connects interns with companies, offering a simple and user-friendly experience. This project is built using React.js for the frontend and Tailwind CSS for styling. In the initial stage, the application uses a JSON file and JSON server for storing and managing data.

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
      "internships": [],
       "users": []
    }
    ```
2. Install JSON server globally if not already installed:
    ```bash
    npm install -g json-server
    ```

### Running the Application
1. **Start JSON Server:** Open a terminal window and run:
    ```bash
    npm run server
    ```
2. **Start the Frontend Development Server:** Open a new terminal window and run:
    ```bash
    npm run dev
    ```
3. **Access the Application:** Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to start using InternIT.

## Future Enhancements
- **Backend Development:** Implement a separate backend server using Node.js/Express.js.
- **Database Integration:** Replace the JSON file with a more robust database solution such as MongoDB or PostgreSQL.
- **Authentication:** Add user authentication and authorization features.
- **Advanced Search and Filter:** Implement advanced search and filtering capabilities for internship listings.
- **Notifications:** Add notification features for new internship postings and application updates.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
