import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Post() {
  const { id } = useParams();
  const [post, setpost] = useState({});
  const [cmnts, setCmnts] = useState([]);
  const [show, setShow] = useState(false)
  function showCmnt(){
    setShow((prev)=> !prev)
  }
  useEffect(() => {
    (async function fetchpost() {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setpost(res.data);
    })();

    (async function fetchCmnts() {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      setCmnts(res.data);
    })();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
      <Link to={`/`} className="btn btn-outline-info m-5">Posts</Link>
      <div className="bg-success text-white border p-3 post">
        <div>
          <h4>{post.title}</h4>
        </div>
        <div>
          <p>{post.body}</p>
        </div>
        <span className="num">{cmnts.length}</span><span className="show-cmnts" onClick={showCmnt}> Comments</span>
      </div>
      {show && <div className="cmnt">
      {cmnts.map((cmnt) => {
        return (
          <div className="comments ">
            
              <span>Name: {cmnt.name}</span>
              <span>Email: {cmnt.email}</span>
              <p>{cmnt.body}</p>
            </div>
          
        );
      })}
      </div>}
    </div>
  );
}

export default Post;
