import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {DEGREE_PATTERN} from '../../../App.constants';

const Number = ({setAngle}) => {
    const [sanitizedValue, setSanitizedValue] = useState(0);

    const onInputChange = (e) => {
        const inputValue = (e.target.validity.valid) ? window.Number(e.target.value) : sanitizedValue;
        setSanitizedValue(inputValue);
    };

    useEffect(() => setAngle(sanitizedValue), [setAngle, sanitizedValue]);

    return (
        <input type='text' pattern={DEGREE_PATTERN}
              placeholder='Degrees' value={sanitizedValue}
              onInput={onInputChange}/>
    );
};

Number.propTypes = {
    setAngle: PropTypes.func
};

Number.defaultProps = {
    setAngle: () => {}
};

export default Number;