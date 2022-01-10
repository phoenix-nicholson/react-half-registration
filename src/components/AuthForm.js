import React from 'react';

export default function AuthForm({
  errorMessage,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>{errorMessage}</p>
      <div className="form-controls">
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      <div className="form-controls">
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </div>
      <input type="submit" />
    </form>
  );
}
