import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const post = ({ post }) => {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="postImage" src={PF + post.photo} alt="post pic" />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat, index) => (
            <span key={index} className="postCat">
              {cat}
            </span>
          ))}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default post;
