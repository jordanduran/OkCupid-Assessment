import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './Form/Form';

require('./App.scss');

const App = () => (
  <div className='app'>
    <Form />
  </div>
);

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
