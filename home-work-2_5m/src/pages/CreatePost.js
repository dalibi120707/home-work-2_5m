import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitile] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  const titileChange = (e) => {
    setTitile(e.target.value)
  }
  const descriptionChange = (e) => {
    setDescription(e.target.value)
  }
  const submit = (e) => {
    e.preventDefault()
    axios.post("https://jsonplaceholder.typicode.com/posts")
      .then(() => {
        navigate("/")
      })
      .catch(error => console.error(error))
  }
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="title">title</label>
        <input id="title" type="text" value={title} onChange={titileChange}/>
        <label htmlFor="">description</label>
        <input type="text" value={description} onChange={descriptionChange}/>
        <button type="submit">создать</button>
      </form>
      <Link to="/">отменить</Link>
    </div>
  );
};

export default CreatePost;
