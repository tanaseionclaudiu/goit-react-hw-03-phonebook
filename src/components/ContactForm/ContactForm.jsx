import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

// const PHONEBOOK_KEY = 'phone-book';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }); 
  }; 

handleSubmit = e => {
  e.preventDefault();
  this.props.onSubmit(this.state);
  e.currentTarget.reset();
};



async componentDidMount() {
  console.log(`ContactForm componentDidMount ...`);
};

async componentDidUpdate(prevProps, prevState) {
  console.log('ContactForm componentDidUpdate ... ')
};

async componentWillUnmount() {
  console.log('ContactForm componentWillUnmount ... ')
}



render () {
  return (
    <form className={css.form} onSubmit={this.handleSubmit}>
      <div className={css.formFields}>
        <label>
          Name
        <input
            type="text"
            name="name"
            pattern="^[a-zA-Z \-]*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
        />
        </label>
        <label>
          Number
        <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
        />
        </label>
      </div>
      <button type="submit" className={css.formBtn}>Add contact</button>
    </form>
    );
  }
};
  
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;