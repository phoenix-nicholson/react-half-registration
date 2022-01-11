import React, { useState } from 'react';
import { signInUser, signupUser } from '../services/users';
import AuthForm from '../components/AuthForm';
import classNames from 'classnames';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('signin');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp =
        type === 'signin' ? await signInUser(email, password) : await signupUser(email, password);
      setCurrentUser(resp);
    } catch {
      setErrorMessage('Something went wrong. Please try again');
    }
  };

  return (
    <div>
      <div>
        <h2
          onClick={() => {
            setType('sign in');
          }}
          className={classNames({ active: type === 'sign in' })}
        >
          Sign In
        </h2>
      </div>
      <div>
        <h2
          onClick={() => {
            setType('sign up');
          }}
          className={classNames({ active: type === 'sign up' })}
        >
          Sign Up
        </h2>
      </div>
      <h1>{type}</h1>
      <AuthForm
        errorMessage={errorMessage}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
