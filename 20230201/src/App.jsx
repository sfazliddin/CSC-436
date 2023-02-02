import { useState } from "react";
import Person from "./components/Person";

const App=()=>{


  const [theText, setTheText]=useState('')
  const [firstName, setFirstName]=useState('')

  const clickHandler=()=>{
    setTheText('it changed!');
  }

  const theTextHandler=(e)=>{
    setTheText(e.target.value);
  }
 
  return <div>

    <label htmlFor="the-text">Text</label>
    <input type="text" id="the-text" className="text-class" value={theText} onChange={theTextHandler}/>
<label htmlFor="firs-name" >First Name</label>
<input type="text" id="first-name" value={firstName} onChange={e=>setFirstName(e.target.value)} />

{!theText&&!firstName&&<p>TYPE TO GET STARTED</p>}
{(!!theText||!!firstName)&&theText===firstName&& <p style={{color:'green'}}>MATCH</p>}
{theText!==firstName&& <p style={{color:'red'}}>NO MATCH</p>}

    {/* <button onClick={clickHandler}>Click me!</button>
<p>What is in the input is {theText}</p>
<p>{theText} is in the input</p>

    <p>Hello World</p>
    <Person firstName='Samariddinkhon' lastName='Fazliddinov' middleName='Jamaliddin'/>
    <Person firstName='Samariddinkhon'/>
    <Person firstName='Samariddinkhon'/>
    <Person firstName='Samariddinkhon'/>

    <Person />
    <Person /> */}
  </div>
}

export default App;