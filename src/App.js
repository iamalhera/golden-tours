import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/TourList";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Navbar />
        <div className="content">
          <TourList />
        </div>
      </div>
    </div>
  );
}

export default App;
