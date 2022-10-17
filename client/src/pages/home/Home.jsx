import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setpost] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + search);
      setpost(res.data);
    };
    fetchPosts();
  }, [search]);

  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const el1 = useRef();
  const el2 = useRef();
  return (
    <div className="homeContainer">
      <Header reference={el1} click={() => scrollToDiv(el2)} />

      <div className="home">
        <Posts posts={posts} key={posts._id} reference={el2} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
