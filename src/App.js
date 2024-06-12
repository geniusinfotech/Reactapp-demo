import "./App.css";
import Navbar from './components/Navbar.js'
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="SIT" aboutText="About Us" />
      <div className="container my-3">
        <TextForm heading="Enter The Text to Analyze Below" />
      </div>

    </>
  );
}

export default App;