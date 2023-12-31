import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () =>{
        let newText=text.toLowerCase();
        setText(newText)
    }

    const clearClick = ()=>{
        let newText='';
        setText(newText)
    }

    const clickOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text,setText]=useState('');
  return (
    <>
    <div className='container'>
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={clickOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={clearClick} >Clear</button>
</div>
<div className='container my-3'>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>

  )
}
