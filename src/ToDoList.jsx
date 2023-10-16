import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);

  const deleteItem = (index) => {
    const updatedList = [...listItems];
    updatedList.splice(index, 1);
    setListItems(updatedList);
  };

  return (
    <div className="Addyourcomment p-4 ">
      <p className="Addyourcomment text-lg font-bold">Add your comment</p>
      <div className="Addyourcomment my-4">
        <textarea
          style={{ backgroundColor: "#ECF5F8" }}
          className=" ToDoListInput p-2 h-24 border-0 bg-#ECF5F8 resize-none focus:outline-none focus:ring focus:border-blue-300"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your comment here..."
          value={inputValue}
        />
      </div>
      <button
        style={{ width: "170px", fontSize: "12px", borderRadius: "4px" }}
        className=" ToDoListButton mmt-4 px-4 py-2 w-full md:w-auto bg-blue-400 text-white border-blue-400 "
        onClick={() => {
          if (inputValue.trim() !== "") {
            setListItems((prevItems) => [...prevItems, inputValue]);
            setInputValue("");
          }
        }}
      >
        Post Comment
      </button>
      <ul className="mt-6 space-y-2">
        {listItems.map((item, index) => (
          <li key={index} className="flex items-center space-x-4">
            <p className="flex-1">{item}</p>
            <button
              className="py-1 px-3 bg-red-500 text-white rounded-md"
              onClick={() => deleteItem(index)}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
