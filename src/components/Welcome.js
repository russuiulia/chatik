import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <Fragment>
      <h1>Chatik</h1>
      <button><Link to='/login'>Login</Link></button>
    </Fragment>
  )
}

export default Welcome;