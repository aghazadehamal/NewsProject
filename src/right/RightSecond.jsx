import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function RightSecond() {
  const items = [
    {
      path: "/topstories",
      icon: <AiOutlineHome className="text-lg" />,
      span: "Become a Story Writer",
      span2: "Contribute stories and start earning",
      button: (
        <button className="bg-white text-blue-500 mt-2 h-7 px-8 border border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300">
          More
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-4 mt-15">
      {items?.map((item, index) => (
        <div className="bg-white p-5 rounded shadow" key={index}>
          <NavLink
            className="flex flex-col no-underline text-black"
            to={item.path}
          >
            <div className="flex items-center mb-3">
              <span className="mr-3">{item.icon}</span>
              <span className="text-sm font-medium">{item.span}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-xs w-44">{item.span2}</span>
              <span>{item.button}</span>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default RightSecond;
