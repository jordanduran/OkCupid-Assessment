import { FIELD_NAMES } from './constants';
import { getTextTemplates } from './helpers';

// Action types
// ----------------------------------------------------------------------------

export const SUBMIT_FIELD = 'MADLIBS.SUBMIT_FIELD';
export const EDIT_BUTTON_CLICKED = 'MADLIBS.EDIT_BUTTON_CLICKED';
export const START_OVER_BUTTON_CLICKED = 'MADLIBS.START_OVER_BUTTON_CLICKED';

// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  fieldOrder: [
    FIELD_NAMES.hometown,
    FIELD_NAMES.favoriteFood,
    FIELD_NAMES.loveToDo,
    FIELD_NAMES.music,
    FIELD_NAMES.messageIf,
    FIELD_NAMES.bar
  ],

  fieldAnswers: {},
  essayText: '',
  showEditForm: false,
  ShowEditButton: false
};

// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_FIELD: {
      const { fieldName, answer } = action.payload;
      if (answer.trim() === '') {
        return state;
      }
      const textTemplates = getTextTemplates(fieldName);
      const randomIndexOfTemplates = Math.floor(
        Math.random() * textTemplates.length
      );
      const essayText =
        state.essayText +
        ' ' +
        textTemplates[randomIndexOfTemplates].replace('$answer', answer);
      return {
        ...state,
        fieldAnswers: {
          ...state.fieldAnswers,
          [fieldName]: answer
        },
        essayText,
        showEditButton: true
      };
    }
    case EDIT_BUTTON_CLICKED:
      return {
        ...state,
        showEditForm: true
      };
    case START_OVER_BUTTON_CLICKED:
      return {
        ...state,
        showEditForm: false,
        showEditButton: false,
        fieldName: {},
        essayText: ''
      };
    default:
      return state;
  }
}

// Action creators
// ----------------------------------------------------------------------------

export function submitField({ id, answer }) {
  return { type: SUBMIT_FIELD, payload: { fieldName: id, answer } };
}

export function editButtonClicked() {
  return { type: EDIT_BUTTON_CLICKED };
}

export function startOverButtonClicked() {
  return { type: START_OVER_BUTTON_CLICKED };
}
