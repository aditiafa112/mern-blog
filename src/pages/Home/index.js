import React, { useState, useEffect } from "react";
import { Button, BlogItem, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const { dataBlogs } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "UPDATE_NAME" })
    }, 3000);

    Axios.get("http://localhost:4000/v1/blog/posts?page=1&perPage=4")
      .then((result) => {
        console.log("data api: ", result.data);
        const responseApi = result.data;

        // setDataBlog(responseApi.data);
        dispatch({ type: 'UPDATE_DATA_BLOG', payload: responseApi.data });
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, []);
  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="create blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {
          dataBlogs.map((blog, index) => {
            return <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.nama}
              date={blog.createdAt}
            />;
          })
        }
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
