import { Customizer, Homepage } from "./pages";
import CanvasModel from "./canvas/CanvasModel.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <BrowserRouter>
        <Homepage />
        <CanvasModel />
        <Customizer />
      </BrowserRouter>
    </div>
  );
}

export default App;