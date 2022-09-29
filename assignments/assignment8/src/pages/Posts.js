import withPosts from "../HOC/withPost";
import {Link} from 'react-router-dom'
function Posts({ posts, deletePost }) {
  return (
    <div className="container">
        <div className="m-5">
    <Link to='/posts/add' className="btn btn-outline-info m-5">Add a post</Link>
        </div>
      <table className="table table-striped table-dark">
        
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <th scope="row">{post.id}</th>
                <td>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                </td>
                
                <td><Link to={`/post/${post.id}`}>Details</Link></td>
                <td><Link to={`/post/${post.id}/edit`}>Edit</Link></td>
                <td><button className="btn btn-outline-danger m-5" onClick={()=>deletePost(post.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default withPosts(Posts);
