import React,{useState} from "react";

const[text,setText] = useState('Enter text here');

export default function TextForm(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
      <form>
        <div className="form-group">
          <textarea
            className="form-control"
            id="box"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary">Upper Case</button>
      </form>
    </div>
  );
}
