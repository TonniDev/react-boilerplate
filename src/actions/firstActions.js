import axios from './_axios';
/**
 * Types
 * */
export const CARREGAMENTO = 'CARREGAMENTO';
export const CARREGAMENTO_FALSE = 'CARREGAMENTO_FALSE';

/**
 * Actions
 * */
export const firstAction = () => async (dispatch) => {
  const req = await axios.get('https://jsonplaceholder.typicode.com/todos');
  
  if (req.status !== 200) {
    dispatch({
      type: CARREGAMENTO_FALSE,
      payload: req
    })
  }
  
  dispatch({
    type: CARREGAMENTO,
    payload: req.data
  });
};
