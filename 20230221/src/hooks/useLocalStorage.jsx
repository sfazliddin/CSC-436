import { useEffect, useState } from "react";


const useLocalStorage=(key, initialValue)=>{
const [value, setValue]= useState(localStorage.getItem(key)||initialValue)

useEffect(()=>{
    localStorage.setItem(key, value)
}, [value])


const clear = () => {
    setValue('');

}

return [
    value,
    setValue,
    clear
]
}

export default useLocalStorage