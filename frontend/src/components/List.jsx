import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'   
import {Link} from 'react-router-dom' 

export default function List() {
    const [books,setBooks] = useState([])
    const API_URL = "http://localhost:5001/books"
    useEffect(() => {
        axios.get(API_URL).then(res => setBooks(res.data))
    },[])
    const handleDelete = async (id) => {
        await axios.delete(`${API_URL}/${id}`).then(setBooks(books.filter(book => book._id !== id)))
    }
  return (
    <table className="table table-dark table-striped table-hover table-bordered shadow ">
        <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Year</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {books.map(book => (
                <tr key={book._id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.year}</td>
                    <td> <button className="btn btn-danger btn-sm" onClick={() => {handleDelete(book._id)}}>Delete</button> <Link to={`/update/${book._id}`} className='btn btn-warning btn-sm' >Edit</Link> </td>
                </tr>
            ))}
        </tbody>
            
        
    </table>
  )
}
