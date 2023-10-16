import "./App.css";
import Container from "./components/Container";
import { TbLetterA } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

function App() {
  return (
    <div>
      <div>
        <i className="iconA">
          <TbLetterA />
        </i>
        <span className="spanAster">Aster News</span>
        <input type="text" />
        <button></button>
        <i className="iconCg">
          <CgProfile />
        </i>
      </div>

      <Container />
    </div>
  );
}

export default App;
