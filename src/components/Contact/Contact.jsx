import { Component } from "react";
import PropTypes from 'prop-types';
import css from './Contact.module.css';

class Contact extends Component {
  handleClick = e => {
    this.props.onClick(e.target.name); 
  };


  async componentDidMount() {
    // console.log(`Contact componentDidMount ...`);
  };

  async componentDidUpdate(prevProps, prevState) {
    // console.log('Contact componentDidUpdate ... ')
  };

  async componentWillUnmount() {
    console.log('Contact componentWillUnmount ... ')
  }

  render () {
    return (
      <li className={css.item} key={this.props.id}>
      {this.props.name} : {this.props.number}
        <button 
          type="button" 
          name={this.props.name} 
          className={css.itemBtn} 
          onClick={this.handleClick}>
          Delete
        </button>
      </li>
    )
  }
};
  
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Contact;