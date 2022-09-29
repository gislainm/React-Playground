import React, { useEffect, useState } from "react";
import axios from "axios";


export default function withPost(Comp) {

    function NewComp() {
        const [posts, setposts] = useState([]);


function deletePost(id){
    setposts((prev)=> prev.filter((e)=> e.id !== id))
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
}

        useEffect(() => {
            async function fetchPosts() {
              const res = await axios.get("https://jsonplaceholder.typicode.com/posts/");
              setposts(res.data);
            }
            fetchPosts();
          }, []);

          return <Comp posts={posts} deletePost={deletePost} />;
  }

  return NewComp;
}
