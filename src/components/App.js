import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './Form/Form';
import { editButtonClicked } from '../madlibs';

require('./App.scss');

const App = ({ essayText, showEditForm, showEditButton, dispatch }) => (
  <div className='app'>
    <Form />
    {!showEditForm && (
      <div>
        <h3>Your essay text</h3>
        <p>{essayText}</p>
        {showEditButton && (
          <button onClick={() => dispatch(editButtonClicked())}>Edit</button>
        )}
      </div>
    )}
  </div>
);

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  essayText: PropTypes.string.isRequired,
  showEditForm: PropTypes.bool.isRequired,
  showEditButton: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
