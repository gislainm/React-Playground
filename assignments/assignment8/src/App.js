import Posts from "./pages/Posts";
import Post from "./pages/Post";
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Posts/>}/>
        <Route path='post/:id' element={<Post/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
