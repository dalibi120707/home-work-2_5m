import "./App.css";
import {Route, Routes} from "react-router-dom";
import PostList from "./pages/PostList";
import CreatePost from "./pages/CreatePost";

function App() {
  return <div className="App">
    <Routes>
      <Route index element={<PostList/>}/>
      <Route path="create" element={<CreatePost/>}/>
    </Routes>
  </div>;
}

export default App;
