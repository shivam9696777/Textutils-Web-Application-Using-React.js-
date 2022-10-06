import React , {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
 // console.log("Uppercase was clicked"+text);
  let newText=text.toUpperCase();
  setText(newText)
  }
  const handleLowClick=()=>{
    // console.log("Uppercase was clicked"+text);
     let newText=text.toLowerCase();
     setText(newText)
     }
  const handleOnChange=(event)=>{
    //console.log("On Change");
    setText(event.target.value)
    }
  const [text,setText]=useState('Enter Text Here');
return (
<>
    <div className="container">
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>   
  <button type="button" className="btn btn-success mx-2"onClick={handleLowClick} >Convert To LowerCase</button>
  <button type="button" className="btn btn-primary mx-2"   onClick={handleUpClick}>Convert To UpperCase</button>
</div>
<div className="container my-3">
<h1> Your Text Summery</h1>
<p> {text.split(" ").length} Words and {text.length} Characters</p>
<p>{0.008*text.split(" ").length} Minutes To Read</p>
<h2> Preview</h2>
<p>{text}</p>
   </div>
   </>
  )
}
