import { NavLink } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";

function AssideCenterSpans() {
  const items = [
    { path: "/business", span1: "All" },
    { path: "/Android", span1: "Android" },
    { path: "/Cricket", span1: "Cricket" },
    { path: "/iphone", span1: "iphone" },
    { path: "/Google", span1: "Google" },
    { path: "/Technology", span1: "Nano Technology" },
    { path: "/Health", span1: "Mental Health" },
    { path: "/abc", icon4: <TbPointFilled /> },
  ];

  return (
    <div className="ml-7 md:ml-10">
      <h2 className="mb-4 text-lg md:text-xl font-bold">Top stories for you</h2>
      <div className="flex space-x-4 md:space-x-6 overflow-x-auto">
        {items.map((item, index) => (
          <span key={index}>
            <NavLink className="text-sm md:text-lg no-underline text-black flex items-center" to={item.path}>
              <span>{item.span1}</span>
              {item.icon4 && (
                <span className="ml-2 flex">
                  {Array(3)
                    .fill(item.icon4)
                    .map((icon, idx) => (
                      <i key={idx}>{icon}</i>
                    ))}
                </span>
              )}
            </NavLink>
          </span>
        ))}
      </div>
    </div>
  );
}

export default AssideCenterSpans;
