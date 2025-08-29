//import { useState } from 'react'
import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List'
import Create from './components/Create'
import Update from './components/Update'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className='text-center mb-4'>Book-Manager</h1>
        <nav className='mb-4'>
          <Link to="/" className='btn btn-primary'>Books List</Link> {/* to prevent reload */}
          <Link to="/create" className='btn btn-success '>Add Book</Link>
        </nav>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </div>
    </Router>
  )
}
