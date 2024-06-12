import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('light')

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = "black"
      document.body.style.color = "white"
      setmyText("Enable Light Mode");
    } else {
      setMode('light')
      document.body.style.background = "white"
      document.body.style.color = "black"
      setmyText("Enable Dark Mode");
    }
  }

  const [myText, setmyText] = useState('Enable Dark Mode');

  return (
    <>
      <Navbar title="SIT" aboutText="Abour Us" mode={mode} toogleMode={toogleMode} myText={myText} />
      <TextForm heading="Enter your text" mode={mode} toogleMode={toogleMode} />
    </>
  );
}

export default App;
