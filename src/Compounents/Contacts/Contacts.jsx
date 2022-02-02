import React from 'react';
import ContactListItem from "../ContactListItem";
import PropTypes from "prop-types";
import {List,Item,Button} from "./ContactsStyle";

const Contacts = ({contacts, onDelete}) => (
        <List>
            {contacts.map(({name, number, id}) => (
                <Item key={id}>
                    <ContactListItem name={name} number={number}/>
                    <Button onClick={() => onDelete(id)}>Удалить</Button>
                </Item>))}
        </List>

    )
;

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired
}


export default Contacts;