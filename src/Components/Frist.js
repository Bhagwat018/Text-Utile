import './Frist.css'
import { useState } from 'react'

const Frist = (props) => {

     const btnClinck=()=>{
      props.setname("Converted to Uppercase", "Success")
     let newtext=data.toUpperCase();
    setdata(newtext)
  
 
   }
   const changef=(e)=>{

    setdata(e.target.value)

   }
   const small=()=>{
    props.setname("Converted to LowerCase", "Success")
    let rama= data.toLowerCase()
    setdata(rama)
   }
   const selecttext=()=>{
    props.setname("Converted to Split", "Success")
      let newt= data.split(/[ ]+/);
      setdata(newt.join(" "))
   }
   const cleantext=()=> {
    props.setname("Converted to Clean", "Success")
setdata("")
   }
   const textyoushow= ()=> {
    props.setname("About Devloper..", "Success")
    setdata("Hello !  this side , I am a web devloper ...........")
   }




    const[data, setdata]=useState("")
  return (
    <div>

      <div className="mb-3">
  <label className="form-label contener"  >{props.title}</label>
  <textarea className="form-control" onChange={changef}  value={data} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button  className="btn btn-secondary my-3 my-1  "onClick={btnClinck} >Convert Capital</button>
  <button  className="btn btn-secondary my-3 my-1 mx-4"onClick={small} >Convert Lower</button>
  <button  className="btn btn-secondary my-3 my-1 mx-2"onClick={selecttext} >Remove Speces</button>
  <button  className="btn btn-secondary my-3 my-1 mx-3 "onClick={cleantext} >Clean Data</button>
  <button  className="btn btn-secondary my-3 my-1 mx-3"onClick={textyoushow} >About Devloper</button>
  

</div>
     

      <div>
        <p className='contener'>No of words {data.length} and No of Char {data.split(" ").filter((e)=>{ return e.length!==0}).length} </p>
        
      </div>
      <h1 className='contener'>Preview
      </h1>
      <p className='contener'>{data.length>0?data:"Enter something to preview it here.."}</p>

    </div>
  )
}

export default Frist
