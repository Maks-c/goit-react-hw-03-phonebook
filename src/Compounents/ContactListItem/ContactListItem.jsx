import React from 'react';
import PropTypes from 'prop-types'
//==============================================
import {SpanItem} from "./ContactsListItemStyle";
const ContactListItem = ({name, number}) => {
    return (
        <>
            <SpanItem>{name}</SpanItem>
            <SpanItem>{number}</SpanItem>
        </>
    );
};


ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired

}

export default ContactListItem;