import logo from "./logo.svg";
import './components/post/style.css'
import "./App.css";
import Post from "./components/post";
import { useState } from "react";
import PostList from "./Data/PostList";

function App() {
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState(PostList);

  const handlePostSubmit = () => {
    if (postText.trim() === "") {
      return;
    }

    const newPost = {
      author: "John Doe",
      date: "June 9, 2023",
      content: postText,
      profile: "profile-picture.png",
      image: "placeholder.svg",
      like: 0,
      comments: [],
    };

    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    setPostText("");
  };

  return (
    <div className="App">
      <div className="post-container comment-post">
        <div>
          <img className="post-avatar" src={logo} alt="Avatar" />
        </div>
        <div className="comment-form">
          <input
            className="comment-input"
            type="text"
            placeholder="Add a post"
            value={postText}
            onChange={(event) => setPostText(event.target.value)}
          />
          <button
            className="comment-button"
            type="button"
            onClick={handlePostSubmit}
          >
            Add
          </button>
        </div>
      </div>

      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}

export default App;
