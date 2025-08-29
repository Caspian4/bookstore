# MERN Book Manager

This project is a simple Book Manager application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, view, update, and delete books from a collection.

## Features

- **List Books:** View all books in a table.
- **Add Book:** Fill out a form to add a new book.
- **Update Book:** Edit details of an existing book.
- **Delete Book:** Remove a book from the collection.

## Technologies Used

- **Frontend:** React, React Router, Axios, Bootstrap, Vite
- **Backend:** Express, Mongoose, MongoDB, CORS

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

#### Backend

1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start MongoDB locally.
4. Start the backend server:
   ```sh
   npm start
   ```

#### Frontend

1. Navigate to the `frontend` folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```

## Usage

- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Use the navigation buttons to view, add, or update books.

## Folder Structure

```
backend/
  models/
    books.js
  index.js
  id.js
  package.json
frontend/
  src/
    components/
      Create.jsx
      List.jsx
      Update.jsx
    App.jsx
    main.jsx
    App.css
    index.css
  public/
  package.json
  vite.config.js
  README.md
```

## License

This project is licensed under the ISC License.
