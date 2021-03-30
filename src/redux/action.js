export const writeText = () => {
/*   return (dispatch) => {
    dispatch({type: 'WRITE_TEXT'});
  }; */
  return{
    type: 'WRITE_TEXT'
  }
};

export const clearOutput = () => {
/*   return (dispatch) => {
    dispatch({type: 'CLEAR_OUTPUT'});
  } */
  return{
    type: 'CLEAR_OUTPUT'
  }
}
export const clearInput = () => {
/*   return (dispatch) => {
    dispatch({type: 'CLEAR_INPUT'});
  } */
  return{
    type: 'CLEAR_INPUT'
  }
}

export const inputText = (text) => {
/*   return (dispatch) => {
    dispatch({type: 'INPUT_TEXT', payload: text});
  } */
  return{
    type: 'INPUT_TEXT', payload: text
  }
}
