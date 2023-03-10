import { Component } from 'react';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import ContactForm from './form/ContactForm';
import uniqid from 'uniqid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = ({ name, number }) => {
    const ID = uniqid.process();
    const string = this.state.contacts.filter(el => el.name === name);
    string.length !== 0
      ? this.hendleCoincidence(name)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, { id: ID, name, number }],
        }));
  };

  hendleCoincidence(name) {
    alert(`${name} is already in contacts`);
  }

  hendleSearch = event => {
    const value = event.currentTarget.value.toLowerCase().trim();
    this.setState({ filter: value });
  };

  hendeleClickDelete = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm submit={this.handleSubmit} contacts={this.contacts} />

        <h2>Contacts</h2>
        <Filter filter={this.hendleSearch} />
        <ContactList
          contacts={contacts}
          filter={filter}
          remove={this.hendeleClickDelete}
        />
      </div>
    );
  }
}

export default App;
