import {useEffect, useState} from 'react';

const WithoutCustomHooks = () => {
    const contentLocalStorageKey = 'csi-content-local-storagebrandnewkey';
    const [content, setContent] = useState(localStorage.getItem(contentLocalStorageKey) || '');

    useEffect(() => {
        localStorage.setItem(contentLocalStorageKey, content);
    }, [content]);

    const contentUpdateHandler = (e) => {
        setContent(e.target.value);
    }

    const clearContentHandler = () => {
        setContent('');

    }

    return (
        <div style={{display:'flex', height:'100vh', width:'100vw', alignItems: 'center', justifyContent: 'center'}}>
        <textarea value={`${content}`} onChange={contentUpdateHandler} style={{height: '50vh', width: '50vw', padding:'2rem'}}></textarea>
        <button onClick={clearContentHandler}>Clear</button>


        </div>
    )
}

export default WithoutCustomHooks;