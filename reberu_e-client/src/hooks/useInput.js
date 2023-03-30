import { useState, useEffect } from 'react';

export const useInput = (initialValues,onChangeHandler) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));

    };

    const onAckInput = (e) => {

        e.preventDefault();

        onChangeHandler(values);
    }


    return {
        values,
        changeHandler,
        onAckInput
    };
};