import './App.css';
import React, {useState} from 'react';

const App = () => {
   
  const url="https://api.quotable.io/random";
  let quoteData={
    content:"Let time be your only competitor.",
    author:"Ahmed Saber"
  }
  let [quote,setQuote]=useState(quoteData);

  const generateQuote=()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
      setQuote(data);
    })
  }

  const copy=()=>{
    navigator.clipboard.writeText(quote.author+" once said "+quote.content);
    alert("Quote Copied..!");
  }
  return(
    <>
     <h1>Quote Generator React App</h1>
     <div className='container'>
     <p>{quote.content}</p>
     <span>{quote.author}</span>
     <div className='btns'>
     <button onClick={copy} >Copy</button>
     <button onClick={generateQuote}>Generate Quote</button>
     </div>
     </div>
    </>
  )
}


export default App;
