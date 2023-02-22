import useLocalStorage from "../hooks/useLocalStorage"

const WithCustomHooks=()=>{

    const [name,setName]=useLocalStorage('csi436-name', '')
    const [age, setAge]=useLocalStorage('csi436-age', 29)
    const [content, setContent, clearContent]=useLocalStorage('csi436-content', '')

    const handleNameChange=e=>setName(e.target.value)
    return <div>
        With Custom Hooks
        <p>
            <label >Name</label>
            <input type="text" value={name}onChange={handleNameChange} />
        </p>
        <p>
            <label htmlFor="">Age</label>
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} />
        </p>
        <p>
            <label htmlFor="">Content</label>
            <textarea value={content } onChange={e=>setContent(e.target.value)}/>
            <button onClick={clearContent}>Clear Content</button>
        </p>
    </div>
}

export default WithCustomHooks