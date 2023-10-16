import React, { useState } from "react";
import { usePostContext } from "./PostContext";
import { BiNews } from "react-icons/bi";
import { fontSize } from "@mui/system";

const CreatePost = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    category: { name: "" },
    published_date: "",
  });
  const { posts, setPosts } = usePostContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([postData, ...posts]);
    setPostData({
      title: "",
      description: "",
      category: "",
      published_date: "",
      photo: "",
    });
  };
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="mt-2">
      <button
        onClick={toggleFormVisibility}
        style={{ display: "flex", alignItems: "center" }}
      >
        <i style={{ fontSize: "30px" }}>
          <BiNews />
        </i>
        <span className="ml-5" style={{ fontSize: "20px" }}>
          {" "}
          Yeni xəbər yaratmaq üçün bu iconun üzərinə tıklayın
        </span>
      </button>

      {isFormVisible && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 max-w-2xl mx-auto rounded shadow-md mt-5"
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Description"
              value={postData.description}
              onChange={(e) =>
                setPostData({ ...postData, description: e.target.value })
              }
              className="mt-1 p-2 w-full border rounded-md h-20"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-600"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              placeholder="Category Name"
              value={postData.category.name}
              onChange={(e) =>
                setPostData({ ...postData, category: { name: e.target.value } })
              }
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="published_date"
              className="block text-sm font-medium text-gray-600"
            >
              Published Date
            </label>
            <textarea
              id="published_date"
              placeholder="Published Date"
              value={postData.published_date}
              onChange={(e) =>
                setPostData({ ...postData, published_date: e.target.value })
              }
              className="mt-1 p-2 w-full border rounded-md h-20"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-600"
            >
              Photo
            </label>

            <div className="mb-4">
              <input
                type="file"
                id="photo"
                accept="image/*"
                onChange={(e) => console.log(e)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Create Post
          </button>
        </form>
      )}
    </div>
  );
};

export default CreatePost;
