import React,{useState}from 'react'

export default function TextForm(props) {
    const [text,SetText]=useState("Enter text here")


    const handleonchange=(event)=>{
        console.log("Text changed");
        SetText(event.target.value);
    }
    const handleupclick=()=>{
        console.log("clicked");
        let newtext=text.toUpperCase();
        SetText(newtext);
        props.alert("success",":Converted to UpperCase");
    }

    const handletcclick=()=>{
        console.log("clicked");
        let newtext=text.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');

        SetText(newtext);
        props.alert("success",":Converted to TitleCase");
    }
    const handleclrclick=()=>{
        console.log("cleared");
        let newtext="";

        SetText(newtext);
        props.alert("success",":Cleared")
    }

    const words=(sample)=>{
        let word=sample.split(' ');
        let cnt=0;
        word.forEach(element => {
            if(element!==""){
                cnt++;
            }
        });
        return cnt;
    }
  return (
    <>
    <div className="container my-3" style={{color:props.webmode==='dark'?'white':'black'}}>
    <div className='container my-3'>
    <h1 style={{color:props.webmode==="dark"?'white' :'black'}}>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" onChange={handleonchange} value={text} id="myBox" rows="10" style={{backgroundColor:props.webmode==='dark'?'grey':'white',color:props.webmode==='dark'?'white':'black'}}></textarea>
   </div>
   <button className="btn btn-primary mx-3" onClick={handleupclick}>Click For UpperCase</button>
   <button className="btn btn-primary mx-3" onClick={handletcclick}>Click For TitleCase</button>
   <button className="btn btn-primary mx-3" onClick={handleclrclick}>Clear</button>
    </div>
    <div className="container my-4">
        <h2>Text Summary</h2>
        <p>{words(text)} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </div>
    </>
  )
}

//split here creates array of words


// .map() creates a new array by modifying each word.

// The new array gets stored in capitalizedWords.

// The original array words remains unchanged.

// .forEach() only loops through elements but does not return anything.

// Changing word inside .forEach() doesn't update the original array.