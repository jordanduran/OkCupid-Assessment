import React from 'react';
import { connect } from 'react-redux';
import { submitField, startOverButtonClicked } from '../../madlibs';
import PropTypes from 'prop-types';

const Form = ({ showEditForm, essayText, dispatch }) => {
  const handleBlur = e =>
    dispatch(submitField({ id: e.target.name, answer: e.target.value }));

  return (
    <form>
      {showEditForm ? (
        <fieldset className='start-over-form'>
          <legend>Your essay text</legend>
          <textarea defaultValue={essayText}></textarea>
          <button
            id='start-over-btn'
            onClick={() => dispatch(startOverButtonClicked())}
          >
            Start over
          </button>
        </fieldset>
      ) : (
        <fieldset>
          <legend>About Me</legend>
          <label htmlFor='hometown'>Where did you grow up?</label>
          <input
            id='hometown'
            type='text'
            name='hometown'
            onBlur={handleBlur}
          />
          <label htmlFor='favoriteFood'>What's your favorite food?</label>
          <input
            id='favoriteFood'
            type='text'
            name='favoriteFood'
            onBlur={handleBlur}
          />
          <label htmlFor='loveToDo'>What do you LOVE to do?</label>
          <input
            id='loveToDo'
            type='text'
            name='loveToDo'
            onBlur={handleBlur}
          />
          <label htmlFor='messageIf'>
            People should message you if they...
          </label>
          <input
            id='messageIf'
            type='text'
            name='messageIf'
            onBlur={handleBlur}
          />
        </fieldset>
      )}
    </form>
  );
};

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
  essayText: PropTypes.string.isRequired,
  showEditForm: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Form);
