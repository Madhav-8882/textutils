import React, { useState } from 'react'

export default function TextForm(props) {
  const clicked = () => {
    console.log("Clicked" + text)
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase", "success");
    
  }
  const clickedU = () => {
    console.log("Clicked" + text)
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase", "danger");

  }

  const HandleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value)
  }
  // const [color, setColor] = useState('black');

  // Step 2: Handle the button click
  // const handleChangeColor = () => {
    // setColor(color === 'black' ? 'red' : 'black');
  // };


  const [text, setText] = useState('  ');
 
  
  return (
    <>
    <div className="container" style={{ color:props.mode==='dark'?'white':'black'}}>
        
        <h1>{props.heading} </h1>
      <div className="mb-3">

        <textarea className="form-control" value={text} style={{ backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='dark'?'white':'black'}}  onChange={HandleOnChange} id="Mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={clicked}>convert to uppercase</button>
      <button className="btn btn-primary mx-3" onClick={clickedU}>convert to lowercase</button>
      {/* <button className="btn btn-primary mx-3" onClick={handleChangeColor}>change color</button> */}
    </div>
    <div className="container my-3" style={{ color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary </h1>
      <p> {text.split(" ").length} Words and {text.length} Characters</p>
      <p> {0.008* text.split(" ").length} Minutes to read</p>

      <h2>preview</h2>
      <p>{text.length>0?text:"Enter Text Above."}</p>
    </div>

   


    </>
  )
};
