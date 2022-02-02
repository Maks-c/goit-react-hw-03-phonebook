import React, {Component} from "react";
import {nanoid} from "nanoid";
import Form from "./Compounents/Form";
import Contacts from "./Compounents/Contacts";
import Filter from "./Compounents/Filter";
//===========================================
import {AppWrapper,MainHead} from "./AppStyle";

class App extends Component {

    state = {
        contacts: [
            // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: ''
    }

    formSubmitHandler = ({name, number}) => {
        const {contacts} = this.state;
        const newData = {id: nanoid(), name, number}

        if(contacts.some(e => e.name === name)) {
            alert(`${name} is already in contacts!`);
        } else {
            this.setState(({contacts}) => ({
                contacts: [newData, ...contacts]
            }))
        }

    }

    deleteContact = (contactId) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(item => item.id !== contactId)
        }))
    }


    handleFilterChange = (e) => {
        this.setState({filter: e.currentTarget.value})
    }

    visibleContacts = () => {
        const {contacts, filter} = this.state;
        return contacts.filter((contacts) => contacts.name.toLowerCase().includes(filter.toLowerCase()))
    }

    componentDidMount(){
        const contacts = localStorage.getItem('contacts')
        const parsedContacts=(JSON.parse(contacts))
        if(parsedContacts){
            this.setState({contacts:parsedContacts})
        }

    }


    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.state.contacts!== prevState.contacts){
            localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
        }
    }


    render(){
        const {filter} = this.state
        const searchContact = this.visibleContacts();

        return (
            <AppWrapper>
                <MainHead>Phonebook</MainHead>
                <Form onSubmit={this.formSubmitHandler}/>
                <h2>Contacts</h2>
                <Contacts contacts={searchContact} onDelete={this.deleteContact}/>
                <Filter value={filter} onChange={this.handleFilterChange}/>
            </AppWrapper>
        )
    }

}

export default App;
