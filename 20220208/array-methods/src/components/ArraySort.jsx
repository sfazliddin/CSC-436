import { useState, useEffect } from "react";

const ArraySort=()=>{

    const [numbers, setNumbers]=useState([5,5,4,8,6,413,8,12,5,4,846,32,45,685])
    const [direction, setDirection]=useState('asc')

    //useEffect listens for changes and fires when a change is made

    useEffect(()=>{

      sortNumbers();

    }, [])

    const sortNumbers=()=>{

 //take the numbers variable and sort them desc if current direction is asc and vice versa
 //change direction if it was asc vice versa
 // and set that sorted array back into numbers variable(piece of state)


 const sortedNumbers=[...numbers]
 if(direction==='asc'){
    sortedNumbers.sort((a,b)=>b-a);
    setDirection('desc')
 }else{
    sortedNumbers.sort((a,b)=>a-b);
    setDirection('asc')
 }
 setNumbers(sortedNumbers)
    }

    return <div>
        <h3>Numbers:</h3>
        <p>{numbers.join(', ')}</p>
       
        <button onClick={sortNumbers} class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
<span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Re Sort</span>
</button> <small>{direction}</small>
    </div>
}

export default ArraySort;