import { NavLink } from "react-router-dom";

function RightFourth() {
  const items = [
    {
      path: "/topstories",
      span: "Subscribe to our newsletter",
      placeholder: "Enter Email",
    },
  ];

  return (
    <div className="mt-10">
      {items?.map((item, index) => (
        <div
          style={{ height: "189px" }}
          className="mt-15 bg-white p-5 rounded-lg shadow-md"
          key={index}
        >
          <NavLink
            className="text-black no-underline flex flex-col items-center"
            to={item.path}
          >
            <span
              style={{ fontSize: "16px" }}
              className="text-sm mb-4 block font-medium"
            >
              {item.span}
            </span>
            <input
              className="w-60 mt-5 h-7 p-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
              type="text"
              placeholder={item.placeholder}
            />
            <button className="w-60 mt-8 h-7 bg-blue-500 text-white border border-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:border-blue-500">
              Subscribe
            </button>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default RightFourth;
