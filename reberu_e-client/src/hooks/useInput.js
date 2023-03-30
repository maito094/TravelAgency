import { useState, useEffect } from 'react';

export const useInput = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    return {
        values,
        changeHandler,
    };
};