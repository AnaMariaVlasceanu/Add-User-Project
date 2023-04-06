import React from 'react';

import UserItem from './UserItem';



class UserList extends React.Component{
 

    render() {
      
       
        const { users } = this.props;
        return (
            <div>
                <h2>Lista utilizatori:</h2>
               
                
                {users.map((user, index) => {
                   
                    return( <UserItem
                        
                        name={user.name}
                        email={user.email}
                        id={user.id * 1000 + index}
                        isGoldClient={user.isGoldClient}               
                        key={index}
                    />
                    )
                })}
                
            </div>
        );
    }
}

export default UserList;