
import './App.css';

import { useState } from 'react';
import Alert from './components/Alert'
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';


function App() {

  const[mode,setMode] = useState("light") 
  const [alert,setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
     setAlert(null)
    },1500);
  }
 

  const togglemode = ()=>{

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='Utils - Light Mode';
    }
  }
  return ( 
    <>

 <Navbar title="Textutils" mode={mode}  togglemode={togglemode} />
<Alert alert={alert}/>  
{/* <Route path="/about" element={<About  mode={mode}/>} >  </Route> */}
<div className="container ">
<TextForm showAlert={showAlert} heading="Enter the text to analyze below   " mode={mode}/>

</div> 
   </>
  );
}

export default App;
