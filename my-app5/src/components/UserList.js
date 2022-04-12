import React, {useEffect, useState} from 'react'
import UserCard from "./UserCard"

const url="https://api.github.com/users";

function UserList() {
    const[users, setUser] = useState([]);
 
    const getUsers = async () => {
        const response = await fetch (url);
        const users = await response.json();
        setUser(users);
        console.log(users);
    };

    useEffect(() => {
        getUsers();
    }, []);

    let usersList = users.map((user) =>{
        return (
            <UserCard
                key={user.id}
                id={user.id}
                avatar_url={user.avatar_url}
                login={user.login}  
            />
        )
    });

    return (
    <div className='container'>
        <div className='row'>{usersList}
        </div>
    </div>
    );
};

export default UserList;