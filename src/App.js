import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import DeleteButton from './components/DeleteButton';
import PostList from './components/PostList';
import './App.css';

class App extends React.Component {
  constructor() {

    super();
    this.state = {
      background: 'white',
      color: 'black',

      users: [],
      posts: [],
      fields: {},
      errors: {},
    };
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
 .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
          
        });
        this.setState({users: data});
      })

      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        data = data.filter(post => post.id < 11);
        // Dupa ce transformam rezultatul request-ului in JSON, putem sa actualizam state-ul cu datele primite.
        this.setState({posts: data});
      })
  }

  

 
  componentDidUpdate() {

  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }

  handleColorChange(event) {
    const userColor = event.target.value;
    this.setState({color: userColor});
    }
  

  handleDelete = (index) => {
    const users = [...this.state.users];
    users.splice(index, 1);
    this.setState({users});
  }



  

  updateUsersList(user){


  this.setState((previousState)=> {
     return {users: [
      ...previousState.users,
      user
    ]}
  });

  


  }

  render() {

 
    return(
      <div className="app" style={{background: this.state.background, color: this.state.color}}>
        <h1>Proiect 1</h1>

       <UserAddForm  updateUsersList={(user) => {this.updateUsersList(user)}}/>
       <DeleteButton onClick={() => this.handleDelete()} />
        { this.state.background !== '#000000'
            ? <UserList users={this.state.users}/>
            : null
        }
        { this.state.background !== '#000000'
            ? <PostList posts={this.state.posts}/>
            : null
        }
        <p>Schimba background: <input type="color" onChange={(event) => this.changeColor(event)}/></p>
        <p>Schimba culoarea textului: <input type="color" onChange={(event) => this.handleColorChange(event)}/></p>
        
       
        
      </div>
    );
  }
}

export default App;