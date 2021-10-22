import React, { useState, createContext } from 'react';

import { isEmpty } from './Utils/Common';
import axios from 'axios';
import toast from 'react-hot-toast';
export const Context = createContext(null);

const initialState = {
  angular_test: '',
};

const ContextProvider = ({ children }) => {
  const [values, setValues] = useState(initialState);
  const [buttonLoading, setButtonLoading] = useState(false);

  const { angular_test } = values;

  // THE SECTION OF THE HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // THE SECTION OF THE HANDLE LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    if (isEmpty(angular_test))
      return setValues({ ...values }, alert('Fields cannot be empty!!!'));

    setButtonLoading(true);

    try {
      const res = await axios.post(
        'https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub',
        {
          ...values,
        }
      );
      sessionStorage.setItem('user', true);
      sessionStorage.setItem('data', JSON.stringify(res.data));

      setValues({
        ...values,
      });

      window.location.href = '/charts';
    } catch (err) {
      toast.error('error logging in');
    }
  };

  const state = {
    handleChange,
    handleLogin,
    buttonLoading,
    setButtonLoading,
    values,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export default ContextProvider;
