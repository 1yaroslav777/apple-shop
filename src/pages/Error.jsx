import React from 'react';
import conError from '../assets/conError.svg';

function Error() {
  return (
    <div className="errorBlock">
      <img src={conError} alt="error" />
      <h2>
        Connecting error,
        <br />
        please check your internet connection
      </h2>
    </div>
  );
}

export default Error;
