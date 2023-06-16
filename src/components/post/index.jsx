import "./style.css";
import React, { useState } from "react";
const Post = ({ post }) => {
  const { content, like } = post;
  const [Like, setLike] = useState(like);
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [commentnum , setCommentnum ] = useState(0)
 
  const handleLikeClick = () => {
    setLike((prevLike) => prevLike + 1);
  };

  const handleCommentSubmit = () => {
   

    if (comment.trim() === "") {
      return;
    }
    setCommentnum((num)=>(num = num+1))

    const newComment = {
      text: comment,
    };

    const updatedComments = [...commentList, newComment];
    setCommentList(updatedComments);
    setComment("");
  };

  return (
    <>
    <div>
    

    </div>
      <div className="post-container">
        <div className="post-header">
          <img className="post-avatar" src={post.profile} alt="Avatar" />
          <div>
            <div className="post-author">{post.author}</div>
            <div className="post-date">{post.date}</div>
          </div>
        </div>
        <div className="post-content">{content}</div>
        <div className="post-image-container">
          <img className="post-image" src={post.image} alt="Post" />
        </div>
        <div className="post-actions">
          <div>
            <div onClick={handleLikeClick}>Like: {Like}</div>
          </div>
          <div>
            <div>Comment: {commentnum}</div>
          </div>
        </div>
      </div>

      <div className="post-container comments-post">
        {commentList.map((comment, index) => (
          <div className="display-comments" key={index}>
            <div>
              <img className="post-avatar" src={post.profile} alt="Avatar" />
            </div>
            <div className="comment-form">
              <h4>{comment.text}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="post-container comment-post" id="comment">
        <div>
          <img className="post-avatar" src={post.profile} alt="Avatar" />
        </div>
        <div className="comment-form">
          <input
            className="comment-input"
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
          <button
            className="comment-button"
            type="button"
            onClick={handleCommentSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Post;
