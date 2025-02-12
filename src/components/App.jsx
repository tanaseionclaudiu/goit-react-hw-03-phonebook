import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

const PHONEBOOK_KEY = 'phone-book';

class App extends Component {
  state = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  addContact = ({name,number}) => {
    const arrayContacts = this.state.contacts;

    if(arrayContacts.some(arrayContacts => arrayContacts.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    } 
    else {
      arrayContacts.push({
        name: name,
        number: number,
        id: nanoid(),
        });
    
      this.setState({ contacts: arrayContacts}); 

      //  if (prevState?.contacts.length !== this.state.contacts.length) {
      // console.log(arrayContacts.length);
      // localStorage.setItem(PHONEBOOK_KEY, JSON.stringify(this.state.contacts));
      // ADDITIN AAUPDATE
    }
  }; 

  deleteContact = name => {
    const arrayContacts = this.state.contacts;
    const index = arrayContacts.findIndex(contact => contact.name === name);
    arrayContacts.splice(index,1);
    this.setState({ contacts: arrayContacts});
  };

  changeFilter = e => {
    this.setState({filter: e.target.value});
  };

  getVisibleContacts () {
    const {contacts, filter} = this.state;
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(({name}) => 
    name.toLowerCase().includes(normalizedFilter));
  };


  async componentDidMount() {
    console.log(`App componentDidMount ...`);
    try {
      if (localStorage.getItem(PHONEBOOK_KEY)) {
        // console.log(localStorage.getItem(PHONEBOOK_KEY));
        const parseContacts = JSON.parse(localStorage.getItem(PHONEBOOK_KEY));
        this.setState({contacts: parseContacts});
      } 
    }
    catch (error) {
      alert(`Get state error: ${error.message}`);
    }
  };



  async componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate ... ')
    
    // console.log('componentDidUpdate');
    // console.log(prevState); console.log(this.state)
    // console.log(`prevProps`);  console.log(prevProps);
    // if (prevState?.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(PHONEBOOK_KEY, JSON.stringify(this.state.contacts));
    // }
  };

  render () {
    // const {filter} = this.state;  
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        
        <ContactForm onSubmit={this.addContact}/>   

        <h2>Contacts</h2>
        
        <Filter onChange={this.changeFilter} />

        <ContactList arrayNames={visibleContacts} onClick={this.deleteContact}  />
          
      </div>
    );
  }
};

export default App;