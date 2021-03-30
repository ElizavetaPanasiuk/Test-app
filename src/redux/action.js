export const writeText = () => {
  return async(dispatch) => {
    dispatch({type: 'WRITE_TEXT'});
  };
};

export const clearOutput = () => {
  return async (dispatch) => {
    dispatch({type: 'CLEAR_OUTPUT'});
  }
}
export const clearInput = () => {
  return async (dispatch) => {
    dispatch({type: 'CLEAR_INPUT'});
  }

}

export const inputText = (text) => {
  return async (dispatch) => {
    dispatch({type: 'INPUT_TEXT', payload: text});
  }
}
