import React from 'react';
import './UserAddForm.css';

class UserAddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      isGoldClient: false,
      nameError: '',
      emailError: '',
    };

    
  }

  handleNameChange(event) {
    const inputValue = event.target.value;
    this.setState({ name: inputValue, nameError: '' });
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    this.setState({ email: inputValue, emailError: '' });
  }

  handleIsGoldClientChange(event) {
    const inputValue = event.target.checked;
    this.setState({ isGoldClient: inputValue });
  }

  validateName() {
    const { name } = this.state;
    let error = '';

    if (!name.trim()) {
      error = 'Numele este obligatoriu';
    }

    this.setState({ nameError: error });
  }

  validateEmail() {
    const { email } = this.state;
    let error = '';

    if (!email.trim()) {
      error = 'Email-ul este obligatoriu';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error = 'Email-ul nu este valid';
    }

    this.setState({ emailError: error });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const { name, email, isGoldClient } = this.state;

    this.validateName();
    this.validateEmail();

    if (this.state.nameError || this.state.emailError) {
      return;
    }

    const newUser = {
      name,
      email,
      isGoldClient,
    };

    this.props.updateUsersList(newUser);
    this.setState({ name: '', email: '', isGoldClient: false });
  }

  render() {
    const { nameError, emailError } = this.state;

    return (
      <form
        className="user-add-form"
        onSubmit={(event) => {
          this.handleFormSubmit(event);
        }}
      >
        <h2>Adauga un utilizator nou</h2>

        <label htmlFor="name">Nume:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={(event) => {
            this.handleNameChange(event);
          }}
          onBlur={() => {
            this.validateName();
          }}
        />
        {nameError && <i className="error">{nameError}</i>}

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={(event) => {
            this.handleEmailChange(event);
          }}
          onBlur={() => {
            this.validateEmail();
          }}
        />
        {emailError && <i className="error">{emailError}</i>}

        <label htmlFor="gold-client">E client gold</label>
        <input
          type="checkbox"
          name="gold-client"
          checked={this.state.isGoldClient}
          onChange={(event) => {
            this.handleIsGoldClientChange(event)}}
           />

          <input type="submit"  value="Submite formularul!"/>

          


          
        </form>
    )
  }
}

export default UserAddForm;