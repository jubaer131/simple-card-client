import { useLoaderData } from "react-router-dom";


const Users = () => {

    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            <h1>{users.length}</h1>
            {/* <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email}</p>)
                }
            </div> */}

        </div>
    );
};

export default Users;