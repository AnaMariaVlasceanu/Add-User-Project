import React from 'react';


function PostItem(props) {

    const {title, id} = props;

    return(
        <div>
           
            <p>{id}. { title }</p>
           
        </div>
    );
}


export default PostItem;