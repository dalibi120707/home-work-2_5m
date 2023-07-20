import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const PostList = () => {
  const [post, setPost] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => setPost(response.data))
      .catch(error => console.error(error))
  },[])

  return (
    <div>
      <Link to="/create">
        <button>create</button>
      </Link>
      {post.map(post => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                {post.post && post.post.map(nestedPost => (
                    <div key={nestedPost.id}>
                        <h3>{nestedPost.title}</h3>
                        <p>{nestedPost.body}</p>
                    </div>
                ))}
            </div>
        ))}

    </div>
  );
};

export default PostList;
