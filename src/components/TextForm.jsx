import React, { useState } from "react";

export default function Textform(props) {


  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    console.log("uppercase was clicked " + text);
    props.showAlert("Converted to uppercase!", "sucess");
  };

  const handleloclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // console.log("lowercase was clicked " + text);
      props.showAlert("Converted to lowercase!", "sucess");
  };
  const handleclearclick = () => {
    let newText ="";
    setText(newText);
    props.showAlert("Text cleared!", "sucess");
    // console.log("lowercase was clicked " + text);
  };


  // const handlesentenceclick = () => {

  //   // let newText ="";
  //   setText(Text.split(''));
  //   // console.log("lowercase was clicked " + text);
  // };

  // function titleCase(text) {
  //   text = text.toLowerCase().split(' ');
  //   for (var i = 0; i < text.length; i++) {
  //     text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1); 
  //     return text;
  //   }}

  const handlOnChange = (event) => {
    setText(event.target.value);
    console.log("on change");
  };
  const [text, setText] = useState("");

  const handleCopy =()=>{

    // console.log("i am copy")
    // var text = document.getElementById('myBox')
    // text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges(); 
    props.showAlert("Text copied!", "sucess");

    
  }

const hnadleExtraSpaces =()=>{
  let newText = text.split(/[ ]+/)
  setText(newText.join(" "))
  props.showAlert("Space removed!", "sucess");

}

  return (
    <>
    <div className='container ' style={{color:props.mode==='dark'?'white':"black"}}>
      <h1 className='mb-4'>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
      
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handlOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':"white",color:props.mode==='dark'?'white':"black"}}
          id="myBox"
          rows="8"
          ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my" onClick={handleUpclick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-2 my" onClick={handleloclick}>
        Convert to lowerCase
      </button>
      <button className="btn btn-primary mx-2 my" onClick={handleclearclick}>
        Clear Text</button>
      <button className="btn btn-primary mx-2 my" onClick={handleCopy}>
        Copy Text</button>
      <button className="btn btn-primary mx-2 my" onClick={hnadleExtraSpaces}>
        Remove Extra Spaces </button>

      {/* <button className="btn btn-primary mx-2" onClick={handlesentenceclick}>
        Sentene Case</button> */}


      <div className="container my-3" style={{color:props.mode==='dark'?'white':"black"}}>
        <h2>Your text summary</h2>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        {/* although it wasn't previously showing an empty word don't why i correct */}
        <p>{0.008* text.split("").filter((element)=>{return element.length!==0}).length} Minutes read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Nothing to preview"}</p>
   


      </div>

    </div>
    
          </>
  );
}

