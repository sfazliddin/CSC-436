import { useState, useEffect } from 'react'
import './App.css'
import WithCustomHooks from './components/WithCustomHooks';
import WithoutCustomHooks from './components/WithoutCustomHooks';

function App() {
  const [showCustomHooks, setShowCustomHooks] = useState(true);
  
  return <div>
    <div><button onClick={() => setShowCustomHooks(!showCustomHooks)}>Switch</button></div>
    {showCustomHooks && <WithCustomHooks />}
    {!showCustomHooks && <WithoutCustomHooks />}
    


  </div>

  
}

export default App