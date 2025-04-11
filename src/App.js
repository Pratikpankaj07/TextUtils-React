
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'



function App() {
   const [btntxt,Settxt]=useState("Enable Dark Mode")
   const [webstyle,Setwebstyle]=useState('light')
   const [alert,Setalert]=useState(null)
   
   const showAlert=(type,message)=>{
      Setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        Setalert(null);
      },1500);
   }

   const toggleMode=()=>{
    if(webstyle==='light'){
    Setwebstyle('dark')
    document.body.style.backgroundColor="grey"
    Settxt("Enable Light Mode")
    showAlert("success","Set to Dark Mode")
    document.title="TextUtils Dark Mode"
  }
    else{
      Setwebstyle('light')
      document.body.style.backgroundColor="white"
      Settxt("Enable Dark Mode")
      showAlert("success","Set to Light Mode")
      document.title="TextUtils Light Mode"
    }
   }
  return (
    <>
    <div className="container">
    <Navbar title="PratikWeb" about="About" btntxt={btntxt}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <TextForm heading="Enter your analysis here" webmode={webstyle} alert={showAlert}/>
    </div>
    </div>
    
    </>
  );
}

export default App;
