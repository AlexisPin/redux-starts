import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../actions/post.action";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && content) {
      const data = {
        title,
        author: user[0].pseudo,
        content,
        likes: 0,
      };
      dispatch(addPost(data));
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Titre du poste"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Quoi de neuf ?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input type="submit" value="Poster" />
      </form>
    </div>
  );
};

export default PostForm;
