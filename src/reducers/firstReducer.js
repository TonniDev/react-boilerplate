import {
  CARREGAMENTO,
  CARREGAMENTO_FALSE
} from '../actions/firstActions';

const initialState = {
  todos: [],
  error: null
};

export default function (state = initialState, action) {
  if (!action || !action.type) return {};
  switch (action.type) {
    case CARREGAMENTO:
      return {
        ...state,
        todos: action.payload.filter(todo => todo.id % 2 !== 0),
      };
    case CARREGAMENTO_FALSE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      if (state === undefined) return {};
      return state;
  }
}
