import React from 'react';
import { errorView } from './error.css';

const Error = error => (
  <div className={errorView}>
    ERROR:
    {error.message}
  </div>
);

export default Error;
