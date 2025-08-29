import {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Update() {
  const {id} = useParams()
  const API_URL = "http://localhost:5001/books"
  const [form,setForms] = useState({
      title: "",
      author: "",
      year: ""

  })
  const navigate=useNavigate()
  useEffect(() => {
    axios.get(`${API_URL}/${id}`).then(res => setForms(res.data))
  }, [id])
  const handleUpdate = async (e) => {
      e.preventDefault();
      await axios.put(`${API_URL}/${id}`,form).then(setForms({title: "", author: "", year: ""}));
      navigate("/")
      
  }
  return (
    <>
      <div style={{margin:"20px 0px", fontSize:"40px", fontWeight:"bold", textAlign:"center"}}>Update Book:-</div>
            <form onSubmit={(e)=>{handleUpdate(e)}} className='form card p-3 shadow'  >
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' className="form-control" value={form.title} onChange={(e)=>{setForms({...form,title:e.target.value})}} placeholder="Enter Book Title" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" id='author' className="form-control" value={form.author} onChange={(e)=>{setForms({...form,author:e.target.value})}} placeholder="Enter Book Author" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input type="number" id='year' className="form-control" value={form.year} onChange={(e)=>{setForms({...form,year:e.target.value})} } placeholder="Enter Book Year" required/>
                </div>
                <button type="submit" className="btn btn-warning mt-4">Update</button>
            </form>
    </>
  )
}
