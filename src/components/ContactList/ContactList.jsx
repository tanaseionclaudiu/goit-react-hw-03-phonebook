import { Component } from "react";
import PropTypes from 'prop-types';
import css from "./ContactList.module.css";

import Contact from "../Contact/Contact";


class ContactList extends Component {

  async componentDidMount() {
    console.log(`ContactList componentDidMount ...`);
  };

  async componentDidUpdate(prevProps, prevState) {
    console.log('ContactList componentDidUpdate ... ')
  };

  async componentWillUnmount() {
    console.log('ContactList componentWillUnmount ... ')
  }

  render () {
    return (
    <ul className={css.list}>
    {this.props.arrayNames.map(({id, name, number}) => (
      <Contact
      key={id}
      name={name}
      number={number}
      onClick={this.props.onClick}
      />
    ))}
    </ul>
    );       
  };
};
        
ContactList.propTypes = {
    arrayNames: PropTypes.arrayOf(PropTypes.shape({
    })),
    onClick: PropTypes.func.isRequired,
  };

export default ContactList;