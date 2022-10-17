import Post from "../post/Post";
import "./Posts.css";

const Posts = ({ posts, reference }) => {
  return (
    <div className="posts" ref={reference}>
      {posts.map((post, index) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Posts;
