import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
      <TextForm heading="Enter text for analysis" />

      </div>
      
    </>
  );
}

export default App;
