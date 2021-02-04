import React, {useState} from 'react';
import NameListItem from "../CommonComponent/NameListItem";

const UseStateEx = () => {
    // state is a temporary storage in side the .jsx
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
        const newUser = {
            id: 3,
            name: {title: 'Mrs', first: 'Toivo', last: 'Toivo'},
            location: {city: 'Madrid'},
            email: 'toivo.toivo@example.com',
            dob: {date: '1967-11-12T06:26:38.812Z', age: 53},
            picture: {
                medium: 'https://randomuser.me/api/portraits/med/women/79.jpg',
            },
        }

        /*Option 1*/
        // setNameList(nameList.concat(newUser)); // This is not a recommended way. In here directly return the array to function. we can fixed it by using wrapper function like below
        // setNameList((nameList) => nameList.concat(newUser));

        /*Option 2 - Spread Operator*/
        // setNameList([...nameList, newUser]); // This is not a recommended way. In here directly return the array to function. we can fixed it by using wrapper function like below
        setNameList((nameList) => [...nameList, newUser]);
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

export default UseStateEx;
