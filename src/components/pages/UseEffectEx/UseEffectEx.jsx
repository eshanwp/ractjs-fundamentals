import React, {useEffect, useState} from 'react';

import NameListItem from '../CommonComponent/NameListItem';

const UseEffectEx = () => {
    const [loadData, setLoadData] = useState(new Date());
    const [nameList, setNameList] = useState([
        {
            id: 1,
            name: {title: 'mr', first: 'Eva', last: 'Baarssen'},
            location: {city: 'kilcoole'},
            email: 'eva.baarssen@example.com',
            dob: {date: '1993-07-20T09:44:18.674Z', age: 26},
            picture: {medium: 'https://randomuser.me/api/portraits/med/men/71.jpg'},
        },
        {
            id: 2,
            name: {title: 'Mrs', first: 'Ana', last: 'Moya'},
            location: {city: 'Madrid'},
            email: 'ana.moya@example.com',
            dob: {date: '1967-11-12T06:26:38.812Z', age: 53},
            picture: {
                medium: 'https://randomuser.me/api/portraits/med/women/78.jpg',
            },
        }
    ]);

    /**
     * When we pass a value(loadData) to the array, it tells to useEffect to run only if the value change.
     */
    useEffect(() => {
        fetch('https://randomuser.me/api')
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                setNameList((nameList) => [...nameList, responseData.results[0]]);
            });
        console.log('componentDidUpdate');
    }, [loadData]);

    /**
     * If we don't pass an empty array to useEffect, it will run on every change.
     */
    useEffect(() => {
        console.log('Hello World');
    })

    /**
     * If we passed an empty array to useEffect, It tells to React that your effect doesn’t depend
     * on any values from props or state, so it never needs to re-run,
     * useEffect will run only once after the component is created.
     */
    useEffect(() => {
        console.log('componentDidMount');
    }, [])

    const nameListComponent = () => {
        return nameList.map((aName) => {
            return (
                <NameListItem
                    key={aName.id}
                    name={`${aName.name.first} ${aName.name.last}`}
                    city={aName.location.city}
                    email={aName.email}
                    birthday={aName.dob.date}
                    avatar={aName.picture.medium}
                />
            );
        });
    };

    const addUserHandler = () => {
        setLoadData(new Date());
    };

    return (
        <React.Fragment>
            <div className="container mt-4">
                <button className="btn btn-primary mb-2" onClick={addUserHandler}>
                    Add Name
                </button>
                <ul className="list-group">{nameListComponent()}</ul>
            </div>
        </React.Fragment>
    );
}

export default UseEffectEx;
