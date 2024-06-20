import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light')

  const [myText, setmyText] = useState('Enable Dark Mode');

  const [alert, setAlert] = useState (null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message, 
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  
  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = "black";
      document.body.style.color = "white";
      setmyText("Enable Light Mode");
      showAlert("Dark Mode Has Been Enable", "success" )
      setInterval(() => {
        document.title = 'SIT - Admission'
        }, 2000);
      setInterval(() => {
          document.title = 'SIT - B.sc.IT'
          }, 1500);
    } else {
      setMode('light');
      document.body.style.background = "white";
      document.body.style.color = "black";
      setmyText("Enable Dark Mode");
      showAlert("Light Mode Has Been Enable", "success" )
      document.title= "SIT - Light Mode"
    }
  }

  return (
    <>
      <Navbar title="SIT" aboutText="Abour Us" mode={mode} toogleMode={toogleMode} myText={myText} />
      <Alert alert={alert} />
      <TextForm heading="Enter your text" mode={mode} toogleMode={toogleMode} showAlert={showAlert} />
    </>
  );
}

export default App;
