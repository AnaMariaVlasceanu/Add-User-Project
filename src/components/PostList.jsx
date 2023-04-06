
import React, { useState }  from 'react';
import PostItem from './PostItem';


function PostList(props) {
    const {posts} = props;
    const [showList, setShowList] = useState(false);

    function handleClick() {
        setShowList(!showList);
      }

    return(
        <div>
            <h2>Lista postari</h2>
            <button onClick={handleClick}>Afiseaza Postarile</button>
            {showList && (
             <ul>
          {
            posts.map((post, index,id) => {
                return <PostItem  
                  id={post.id}
                  title={post.title}
                  key={index}
                />
                    
            })}
            </ul>
          )}
        </div>
    );
}

export default PostList;