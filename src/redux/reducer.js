const initialState = {
  inputText: 'a',
  outputText: '',
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case('WRITE_TEXT'):
      return{
        outputText: `${state.outputText} ${state.inputText}`,
        inputText: '',
      }
    case('CLEAR_OUTPUT'):
      return{
        outputText: '',
      }
    case('CLEAR_INPUT'):
      return{
        inputText: '',
      }
    default: 
      return state
  }
}