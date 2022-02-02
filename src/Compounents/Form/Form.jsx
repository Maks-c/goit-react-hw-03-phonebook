import React, {Component} from 'react';
import {nanoid} from "nanoid";


class Form extends Component {

    generationId = nanoid()
    state = {
        name: '',
        number: ''

    }

    handleChange = e => {
        const {name, value} = e.currentTarget
        this.setState({[name]: value})
    };

    handleSubmit = e => {
        e.preventDefault()
        this.reset()
        this.setState({name: '', number: ''})
        this.props.onSubmit({...this.state})
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render(){

        const {name, number} = this.state
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input type='text'
                               name='name'
                               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                               required
                               onChange={this.handleChange}
                               value={name}

                        />
                    </label>
                    <label>
                        Number
                        <input type='tel'
                               name='number'
                               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                               required
                               onChange={this.handleChange}
                               value={number}

                        />
                    </label>
                    <button type='submit'>Add contact</button>
                </form>

            </>

        );
    }

}

export default Form;