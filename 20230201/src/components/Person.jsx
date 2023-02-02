

const Person=({firstName,lastName, middleName})=>{


    return <p>

Hello, {firstName} {middleName} {lastName}

    </p>
}

Person.defaultProps={
    firstName:'ye without a name'
}

export default Person;