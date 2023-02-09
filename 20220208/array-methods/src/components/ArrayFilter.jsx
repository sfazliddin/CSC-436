import { list } from "postcss";

const ArrayFilter=()=>{
    const items=[
        {
            id:1,
            name:'Item 1',
        },
        {
            id:2,
            name: 'Item 2',
        },
        {
            id:3,
            name:'Item 3',
        },
        {
            id:4,
            name:'Item 4',
        },
        {
            id:5,
            name:'Item 5',
        },
    ]

    const filteredItems=items.filter(({id})=> id %2===1);
 
    return <ol>{
        filteredItems.map(({id, name})=><li key={id}>{name}</li>)
    }
    </ol>
}

export default ArrayFilter;