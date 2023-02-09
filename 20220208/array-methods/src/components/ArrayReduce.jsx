const ArrayReduce=()=>{

    const movies=[
        {
            title:'Puss In Boots:The Last Wish',
            runTime: 100,
        },
        {
            title:'Army of Thieves',
            runTime:127,
        },
        {
            title:'Army of the Dead',
            runTime:148,
        },
    ]

    const totalRunTime=movies.reduce((accumulator,movie)=>{
        return accumulator+movie.runTime;
    },0);

    const movieNames=movies.reduce((accumulator,movie)=>{
        return `${accumulator}, ${movie.title}`;
    },'');

    return  <div>
        <p className="text-center">Movie total length is {totalRunTime} minutes</p>
        <p className="text-center">The movies, by the way are {movieNames}</p>
    </div>
}

export default ArrayReduce;