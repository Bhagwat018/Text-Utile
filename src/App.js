
import { useState } from 'react';
import './App.css';
import Alerts from './Components/Alerts';
import Frist from './Components/Frist';
import Header from './Components/Header';

function App() {
  const[mode,setmmode]=useState('light') 
  const [alert,setalert]=useState(null)


  const setname= (massege,type)=>{

setalert({
  msg: massege,
  type: type
})
setTimeout(() => {
  setalert(null)
}, 1000);

  }
  
  const togglemode =()=> {
    
  if(mode==='light'){
 setmmode('dark');
 document.body.style.backgroundColor = 'gray'
 setname("Dark mode has been Enable","success")
  }
  else {
  setmmode('light');
  document.body.style.backgroundColor = 'white'
  setname("Light mode has been Enable","success")
   }
  }

  return (
    
      <div>

        <Header    title={"Text Utiles"} mode={mode} togglemode={togglemode} />  
        <Alerts alert={alert}/>  
        <div className="container">
         <Frist setname={setname} title={'Enter the text to analyze below'}/>
         </div>

    </div>
  );
}

export default App;
