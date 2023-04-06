import React from 'react';



function UserItem(props) {
  
    const {name, email, isGoldClient,id} = props;

  

    return (
        <div>
           
            <h2><img 
      src="https://cdn.pixabay.com/photo/2017/01/31/12/10/anonymous-2023760__340.jpg"
      alt="profile"
      />  { name }</h2>
            <p>Email: { email }</p>
            <p>salary: { id }</p>
           
            { isGoldClient 
                ? <h3>Client GOLD</h3>
                : null
            }
            
            
            
        </div>
    );
}

export default UserItem;


