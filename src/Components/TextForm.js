import React,{useState} from "react";


export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success");
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleCopy = () => {
    var text = document.getElementById("box");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
  }

  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
  }

  const handleOnChange = (event) =>{
    //console.log("On change");
    setText(event.target.value);
  }

  
  const[text,setText] = useState('');
  

  return (
    <>
    <div>
        <h1>{props.heading}</h1>
      <form>
        <div className="form-group">
          <textarea
            className="form-control"
            id="box"
            value = {text}
            rows="8"
            onChange = {handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Upper Case</button>
        <button className="btn btn-primary mx-4" onClick={handleLoClick}>Lower Case</button>
        <button className="btn btn-primary mx-4" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-4" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-4" onClick={handleExtraSpace}>Remove Extra Space</button>

      </form>
    </div>
    <div className="container my-3">
      <h3>Text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes for reading this text</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}
