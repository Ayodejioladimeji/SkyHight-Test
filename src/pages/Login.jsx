import React, { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { Context } from '../Context';
import '../styles/Login.css';

const Login = () => {
  const state = useContext(Context);
  const { handleChange, handleLogin, buttonLoading, values } = state;
  const { angular_test } = values;

  return (
    <div className='login'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='login-center'>
        <ul className='list-group'>
          <li
            className='list-group-item active text-center'
            aria-current='true'
          >
            Provide Your Account Username To Continue
          </li>
          <li className='list-group-item'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12 py-3'>
                  <form
                    onSubmit={handleLogin}
                    className='row g-3 justify-content-center'
                  >
                    <div className='col-md-12'>
                      <label htmlFor='email' className='form-label'>
                        Username
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='username'
                        name='angular_test'
                        value={angular_test}
                        onChange={handleChange}
                        placeholder='username'
                      />
                    </div>

                    <div className='col-md-12 button-div'>
                      <button type='submit' className='btn py-2 '>
                        {buttonLoading ? (
                          <div
                            style={{ width: '2rem', height: '2rem' }}
                            className='text-white spinner-border '
                            role='status'
                          >
                            <span className='sr-only text-white'></span>
                          </div>
                        ) : (
                          'Login'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </li>

          <li className='list-group-item text-center'>
            Just type any username and wait...
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
