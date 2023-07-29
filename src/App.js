import "./App.css";
import { AutoScrollCards } from "./components/AutoScrollCards";

function App() {
  return (
    <div>
      <div className="max-w-[1400px] px-[15px] mx-auto">
        <h2>Scrolling Card UI With CSS Grid</h2>
        <AutoScrollCards />
      </div>
    </div>
  );
}

export default App;
