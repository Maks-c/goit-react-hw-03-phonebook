import React from 'react';
import PropTypes from "prop-types";
import {FilterDiv} from "./FilterStyle";
const Filter = ({value, onChange}) => {

    return (

        <FilterDiv>
            <input type='text'
                   name='filter'
                   onChange={onChange}
                   value={value} // значение = вводимые символы в инпуте
            />
        </FilterDiv>

    );

}

Filter.propTypes = {
    value: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filter;