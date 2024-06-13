import { useState } from "react";
import "./App.css";
import Navbar from './components/Navbar'
import About from "./components/about";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enbled or not 
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message, 
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const[btnText, setTextbtn]= useState("Enable Dark Mode");

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      setTextbtn("Enable Light Mode")
      document.body.style.background = 'gray';
      document.title = 'SIT - Dark Mode'
      showAlert("Dark Mode has Been Enable", "success")
      // setInterval(() => {
      // document.title = 'SIT - Admission Open'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'SIT - B.sc.IT'
      //   }, 1500);
    }else{
      setMode('light');
      setTextbtn("Enable Dark Mode")
      document.body.style.background = 'white';
      document.title = 'SIT - Light Mode'
      showAlert("Light Mode has Been Enable", "success")

    }
  }
  return (
    <>
      <Navbar title="SIT" aboutText="About Us" mode= {mode} toggleMode={toggleMode}  btnText={btnText} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter The Text to Analyze Below" mode={mode}  showAlert={showAlert} />
        <About />
      </div>

    </>
  );
}

export default App;
