import { RxHand } from "react-icons/rx";
import { FaDollarSign } from "react-icons/fa";

function AssideLeftButton() {
  return (
    <div className="mt-12 bg-blue-600 p-5 w-58">
      <div className="flex items-center text-white">
        <RxHand className="mr-4"/>
        <span>Subscribe to premium</span>
      </div>
      <div className="flex items-center mt-8 text-white">
        <FaDollarSign className="text-2xl"/>
        <span className="text-2xl ml-2">$8/m</span>
        <button className="bg-blue-800 ml-10 w-24 h-9 text-white text-lg rounded-md">
          Upgrade
        </button>
      </div>
    </div>
  );
}

export default AssideLeftButton;
