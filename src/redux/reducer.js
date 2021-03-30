const initialState = {
  input: '',
  output: '',
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case('WRITE_TEXT'):
      return{
        ...state,
        output: `${state.output} ${state.input}`,
        input: '',
      }
    case('CLEAR_OUTPUT'):
      return{
        ...state,
        output: '',
      }
    case('CLEAR_INPUT'):
      return{
        ...state,
        input: '',
      }
    case('INPUT_TEXT'):
      return{
        ...state,
        input: action.payload,
      }
    default: 
      return state
  }
}